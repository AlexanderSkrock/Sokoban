import {deleteMapHandler, getMapHandler, getMapsHandler, putMapHandler} from "./maps/MapRequestHandlers";
import {deleteTileHandler, getTileHandler, getTilesHandler, putTileHandler} from "./tiles/TileRequestHandlers";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({
  limit: "100MB"
}));
app.use("/images", express.static("images"));
app.use(cors());

app.get("/maps", getMapsHandler);
app.get("/maps/:mapId", getMapHandler);
app.post("/maps", putMapHandler);
app.delete("/maps/:mapId", deleteMapHandler);

app.get("/tiles", getTilesHandler);
app.get("/tiles/:tileId", getTileHandler);
app.post("/tiles", putTileHandler);
app.delete("/tiles/:tileId", deleteTileHandler);

app.listen(3000, function() {
  console.log("Successfully connected")
});
