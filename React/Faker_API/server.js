const express = require("express");
const app = express();
const port = 8000;

const {faker}

app.get("/api", (req, res) => {
    res.json({message: "BEANS"});
});

app.get("/api/user", (req, res) => {
    res.json(users);
})

app.listen( port, () => console.log(`Listening on port: ${port}`));