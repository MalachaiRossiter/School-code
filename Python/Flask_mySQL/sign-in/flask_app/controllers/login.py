from flask import render_template,session,redirect,request,flash
from flask_app import app
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
Bcrypt = Bcrypt(app)

@app.route('/')
def goHome():
    return redirect('/sign-in')

@app.route('/sign-in')
def SignIn():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def signUp():
    #This one here officer
    if not User.validate_register(request.form):
        return redirect('/')
    data ={ 
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": bcrypt.generate_password_hash(request.form['password'])
    }
    id = User.save(data)
    session['user_id'] = id

    return redirect('/home-page')

@app.route('/log-in', methods=['POST'])
def logIn():
    user = User.get_by_email(request.form)

    if not user:
        flash('Invalid Email', 'login')
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Invalid Password","login")
        return redirect('/')
    session['user_id'] = user.id
    return redirect('/home-page')

@app.route('home-page')
def goMainPage():
    if 'user_id' not in session:
        return redirect('/log-out')
    data ={
        'id': session['user_id']
    }
    return render_template("homepage.html",user=User.get_by_id(data))

@app.route('/log-out')
def logout():
    session.clear()
    return redirect('/')
