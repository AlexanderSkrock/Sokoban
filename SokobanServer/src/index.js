import {deleteMapHandler, getMapHandler, getMapsHandler, putMapHandler} from "./maps/MapRequestHandlers";
import {deleteTileHandler, getTileHandler, getTilesHandler, putTileHandler} from "./tiles/TileRequestHandlers";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/maps", getMapsHandler);
app.get("/maps/:mapId", getMapHandler);
app.post("/maps", putMapHandler);
app.delete("/maps/:mapId", deleteMapHandler);

app.get("/tiles", getTilesHandler);
app.get("/tiles/:mapId", getTileHandler);
app.post("/tiles", putTileHandler);
app.delete("/tiles/:tileId", deleteTileHandler);

app.listen(3000, function() {
  console.log("Successfully connected")
});
