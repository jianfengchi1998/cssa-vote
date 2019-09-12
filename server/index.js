import 'regenerator-runtime/runtime'
import path from 'path'
import bodyParser from 'body-parser'
import { matchPath } from 'react-router-dom'
import routes from '../src/routes'
import {
  state,
  setSingers,
  setSinger,
  setIsVote,
} from '../database/data'

const express = require('express')

const app = express()
const http = require('http').createServer(app)
// var io = require("socket.io")(http);

// const singers = require("../data/data");

app.use(bodyParser.json())
app.use(express.static('public'))

// app.get("/getAllSingers", (req, res) => res.send(singers));

app.get('/getState', (req, res) => {
  res.send(state)
})

app.post('/setSingers', (req, res) => {
  setSingers(req.body)
  res.send(state)
})

app.post('/setSinger', (req, res) => {
  setSinger(req.body.singer)
  res.send(state)
})

app.post('/setIsVote', (req, res) => {
  setIsVote(req.body.isVote)
  res.send(state)
})

app.get('*', (req, res) => {
  if (!routes.find((route) => matchPath(req.url, route))) {
    res.status(404)
    res.send('Not found')
    return
  }

  res.sendFile(path.join(__dirname, '../index.html'))
})

// io.on("connect", function(socket) {
//   socket.on("getAllSingers", () => {
//     socket.broadcast.emit("allSingers", singers);
//     console.log(singers);
//   });
//   socket.on("disconnect", function() {
//     console.log("user disconnected");
//   });
// });

http.listen(5000, () => {
  console.log('listening on *:5000')
})

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
