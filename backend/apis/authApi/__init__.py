from flask import Blueprint, request, current_app, jsonify, session, g, jsonify, Response
from flask_restful import reqparse, Resource, Api
from flask_jwt_extended import (create_access_token, create_refresh_token,
                                jwt_required, jwt_refresh_token_required, verify_jwt_in_request, get_jwt_identity, get_raw_jwt)

import jwt
from bson import json_util

from backend.model import UserModel
authBlueprint = Blueprint('authApi', __name__)
authApi = Api(authBlueprint)

parser = reqparse.RequestParser()
parser.add_argument('username', type=str)
parser.add_argument('password', type=str)


def valid_jwt_required(func):
    def validate_token(*agrs, **swagrs):
        verify_jwt_in_request()
        username = get_jwt_identity()

        user = UserModel.get_user_by_username(username)
        if(user is not None):
            g.current_user = user
            return func(*agrs, **swagrs)
        else:
            return Response(jsonify({"message": "Unauthorized"}), status=403, mimetype='application/json')
    return validate_token


class Login(Resource):
    def post(self):
        args = parser.parse_args()
        username = args["username"]
        password = args["password"]
        user = UserModel.get_user_by_username(username)
        if(user is not None and user.password == password):
            access_token = create_access_token(username)
            refresh_token = create_refresh_token(username)
            return {
                'message': 'User {} was created'.format(username),
                'access_token': access_token,
                'refresh_token': refresh_token
            }, 200
        else:
            return {"error": "No match found"}, 203


class Register(Resource):
    def post(self):
        args = parser.parse_args()
        username = args["username"]
        password = args["password"]
        user = UserModel.get_user_by_username(username)

        if(user is None):
            UserModel.create_user(username, password)
            access_token = create_access_token(username)
            refresh_token = create_refresh_token(username)
            return{
                'message': 'User {} was created'.format(username),
                'access_token': access_token,
                'refresh_token': refresh_token
            }, 200
        else:
            return {"error": "User already exists"}, 203


authApi.add_resource(Login, '/login')
authApi.add_resource(Register, '/register')
