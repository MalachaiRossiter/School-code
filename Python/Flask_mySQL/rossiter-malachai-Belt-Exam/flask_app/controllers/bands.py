from flask import Flask, render_template, session, redirect, request, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.band import Band
from flask import flash

#home page with table
@app.route('/dashboard')
def homePage():
    if "user_id" not in session:
        return redirect('/')

    user = User.get_id(session['user_id'])
    bands = Band.get_all()
    return render_template('dashboard.html', user = user, bands = bands)

#create band page
@app.route('/new/sighting')
def createPage():
    if "user_id" not in session:
        return redirect('/')
    user = User.get_id(session['user_id'])
    return render_template('create_band.html', user = user)

#edit band page
@app.route('/edit/<int:band_id>')
def editBand(band_id):
    if "user_id" not in session:
        return redirect('/')
    user = User.get_id(session['user_id'])
    band = Band.get_band(band_id)
    return render_template('edit_band.html', user = user, band = band)

#my bands Page
@app.route('/mybands')
def myBands():
    if "user_id" not in session:
        return redirect('/')
    user = User.get_id(session['user_id'])
    bands = Band.get_user_bands()
    return render_template('my_bands.html', user = user, bands = bands)


#Form Actions

#Creates New band
@app.route('/create-band', methods=['POST'])
def createBand():
    valid_band = Band.create_band(request.form)
    if not valid_band:
        return redirect('/new/sighting')
    return redirect('/dashboard')

#Update Band
@app.route('/update-band/<int:band_id>', methods=['POST'])
def updateband(band_id):
    valid_band = Band.update_band(request.form,band_id)
    if not valid_band:
        return redirect(f'/edit/{band_id}')
    return redirect('/dashboard')

#delete Band
@app.route('/delete/<int:band_id>')
def deleteBand(band_id):
    Band.delete_band(band_id)
    return redirect('/dashboard')