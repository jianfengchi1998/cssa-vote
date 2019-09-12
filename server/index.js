import path from 'path'
import { matchPath } from 'react-router-dom'
import routes from '../src/routes'

const express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const singers = require("../data/data");
// var cors = require("cors");

// app.use(cors());

app.use(express.static('public'))

app.get("/getAllSingers", (req, res) => res.send(singers));

app.get('/*', (req, res) => {
    if (!routes.find((route) => matchPath(req.url, route))) {
        res.status(404)
        res.send('Not found')
        return
    }

    res.sendFile(path.join(__dirname, '../index.html'))
})

io.on("connect", function(socket) {
  socket.on("getAllSingers", () => {
    socket.broadcast.emit("allSingers", singers);
    console.log(singers);
  });
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

http.listen(5000, function() {
  console.log("listening on *:5000");
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
