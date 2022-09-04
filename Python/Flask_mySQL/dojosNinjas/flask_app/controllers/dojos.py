from flask import render_template,redirect,request,session

from flask_app import app
from flask_app.models.dojo import Dojo

@app.route("/")
def goHome():
    return redirect("/dojos")

@app.route("/dojos")
def dojos():
    return render_template("index.html")

@app.route("/create/dojo", methods=['POST'])
def create_Dojo():
    print(request.form)
    Dojo.save(request.form)
    return redirect("/dojos")

@app.route('/dojo/<int:id>')
def show_dojo(id):
    data = {
        "id": id
    }
    return render_template('dojo.html', dojo=Dojo.get_one_with_ninjas(data))