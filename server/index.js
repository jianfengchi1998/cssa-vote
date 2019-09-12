const express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const singers = require("./data");
var cors = require("cors");

app.use(cors());

app.get("/getAllSingers", (req, res) => res.send(singers));

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
