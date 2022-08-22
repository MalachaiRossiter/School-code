from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def hello_world():
    return "Dojo!"

@app.route('/say/<str:name>')
def hello(name):
    print(name)
    return "Hi " + name