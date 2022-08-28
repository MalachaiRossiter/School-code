from flask import Flask, session, render_template, redirect, request

from users import User

app = Flask(__name__)
app.secret_key = "beans"


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

if __name__ == "__main__":
    app.run(debug=True)
