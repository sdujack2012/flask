from flask import Flask
from .nameApi import nameApi

app = Flask(__name__)
app.register_blueprint(nameApi)