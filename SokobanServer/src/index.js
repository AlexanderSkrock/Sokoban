import {deleteMapHandler, getMapHandler, getMapsHandler, putMapHandler} from "./src/maps/MapRequestHandlers";

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/maps", getMapsHandler);
app.get("/maps/:mapId", getMapHandler);
app.post("/maps", putMapHandler);
app.delete("/maps", deleteMapHandler);
