
from flask_pymongo import PyMongo
from flask import current_app, jsonify


class UserModel(object):
    def __init__(self, username, password):
        self.username = username
        self.password = password

    @classmethod
    def get_user_by_username(cls, username):
        mongo = PyMongo(current_app)
        user = mongo.db.user.find_one({"username": username})
        print(user)
        if(user is not None):
            return UserModel(user['username'], user['password'])
        else:
            return None

    @classmethod
    def create_user(cls, username, password):
        mongo = PyMongo(current_app)
        user = mongo.db.user.find_one({"username": username})
        print(user)
        if(user is not None):
            raise Exception("user exists")
        else:
            mongo.db.user.insert_one(
                {"password": password, "username": username})
            return UserModel(username, password)
