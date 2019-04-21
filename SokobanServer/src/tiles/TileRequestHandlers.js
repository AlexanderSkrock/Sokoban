import TileService from "./TileService";

export const getTilesHandler = (req, res) => TileService.getTiles(tiles => res.send(tiles));
export const getTileHandler = (req, res) => TileService.getTile(parseInt(req.params.tileId), tile => res.send(tile));
export const putTileHandler = (req, res) => TileService.putTile(req.body, () => res.end());
export const deleteTileHandler = (req, res) => TileService.deleteTile(parseInt(req.params.tileId), () => res.end());
