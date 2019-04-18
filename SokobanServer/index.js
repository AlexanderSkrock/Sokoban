import MapEndpoint from "./src/maps/MapEndpoint";

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/maps", MapEndpoint.getMapsHandler);
app.get("/maps/:mapId", MapEndpoint.getMapHandler);
app.post("/maps", MapEndpoint.putMapHandler);
app.delete("/maps", MapEndpoint.deleteMapHandler);
