const express = require("express");
const bodyParser = require("body-parser");
const Route = require("./route-handler/route");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", function(req, res) {
  Route.sendWhatsappMessageToConnect(req);
  res.sendStatus(204);
});

app.post("/status-callback", function(req, res) {
  res.sendStatus(204);
});

app.get("/", function(req, res) {
  res.send("Standalone server is alive");
});

app.listen(3000, function() {
  console.log("Started on PORT 3000");
});
