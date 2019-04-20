import TileService from "./TileService";

export const getTilesHandler = (req, res) => TileService.getTiles(maps  => res.send(maps));
export const getTileHandler = (req, res) => TileService.getTile(req.params.id, map => res.send(map));
export const putTileHandler = (req, res) => TileService.putTile(req.body, () => res.end());
export const deleteTileHandler = (req, res) => TileService.deleteTile(req.params.id, () => res.end());
