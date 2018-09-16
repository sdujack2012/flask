import os
from flask import Flask
from flask_jwt_extended import JWTManager

from ..apis.authApi import authBlueprint


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='3~b9\"lkG@I]H\GhliJT@?(6i.L % 2Db3WAh(JCdE8=+2+]bV & F[(wV-q!]S  # _}-q',
        MONGO_URI='mongodb://localhost:27017/flask'
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    jwt = JWTManager(app)
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    app.register_blueprint(authBlueprint)

    return app


app = create_app()
