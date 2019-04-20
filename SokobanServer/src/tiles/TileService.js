import TileRepository from "./TileRepository";

export default class TileService {
  static getTiles(callback) {
    TileRepository.getTiles(callback);
  }

  static getTile(tileId, callback) {
    TileRepository.getTile(tileId, callback);
  }

  static putTile(tile, callback) {
    TileRepository.putTile(tile, callback);
  }

  static deleteTile(tileId, callback) {
    TileRepository.deleteTile(tileId, callback)
  }
}
