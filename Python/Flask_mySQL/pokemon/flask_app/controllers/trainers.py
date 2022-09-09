from flask import render_template,redirect,request,session

from flask_app import app
#from flask_app.models.trainer import Trainer

@app.route('/')
def goIndex():
    return redirect('/trainers')

@app.route('/trainers')
def goTrainers():
    return render_template('index.html')