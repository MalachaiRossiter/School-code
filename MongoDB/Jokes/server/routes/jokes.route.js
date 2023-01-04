const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:_id', JokeController.getOneJoke);
    app.put('/api/jokes/:_id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
}