from flask import Blueprint, request, jsonify, session, jsonify
nameApi = Blueprint('nameApi', __name__)


@nameApi.route('/', methods=['GET'])
def getNames():
    return jsonify(request.args)


@nameApi.route('/', methods=['POST'])
def getNamesPost():
    return jsonify(request.forms)
