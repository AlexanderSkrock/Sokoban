import {deleteMapHandler, getMapHandler, getMapsHandler, putMapHandler} from "./maps/MapRequestHandlers";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/maps", getMapsHandler);
app.get("/maps/:mapId", getMapHandler);
app.post("/maps", putMapHandler);
app.delete("/maps", deleteMapHandler);

app.listen(3000, function() {
  console.log("Successfully connected")
});
