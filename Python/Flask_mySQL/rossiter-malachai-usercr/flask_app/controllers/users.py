from flask import render_template,redirect,request,session

from flask_app import app
from flask_app.models.user import User

@app.route("/users")
def home():
    return render_template('index.html',users=User.get_all())

@app.route("/new")
def create():
    return render_template("new_users.html")

@app.route('/process', methods=['POST'])
def process():
    print(request.form)
    User.save(request.form)
    return redirect("/users")
