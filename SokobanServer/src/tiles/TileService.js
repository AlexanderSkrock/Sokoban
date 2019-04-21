import TileRepository from "./TileRepository";

export default class TileService {
  static ENCODING = 'base64';
  static DATA_URL_PREFIX = 'data:image\/png;base64,';

  static getTiles(callback) {
    TileRepository.getTiles(tiles => {
      tiles.forEach(tile => {
        tile = TileService.enrichTileSync(tile);
      });
      callback(tiles);
    });
  }

  static getTile(tileId, callback) {
    TileRepository.getTile(tileId, tile => {
      TileService.enrichTile(tile, callback);
    });
  }

  static putTile(tile, callback) {
    if(!tile.id) {
      TileRepository.getTiles(tiles => {
        tile.id = TileService.generateId(tiles);
        TileService.extractSprite(tile, (tile) => TileRepository.putTile(tile, callback));
      });
    } else {
      TileService.extractSprite(tile, () => TileRepository.putTile(tile, callback));
    }
  }

  static deleteTile(tileId, callback) {
    TileRepository.deleteTile(tileId, callback)
  }

  static extractSprite(tile, callback) {
    const imageFileName = `${tile.id}.png`;
    const data = tile.sprite.replace(/^data:image\/png;base64,/, "");
    tile.sprite = imageFileName;
    TileRepository.writeTileSprite(imageFileName, data, TileService.ENCODING, () => callback(tile));
  }

  static enrichTile(tile, callback) {
    const imageFileName = tile.sprite;
    TileRepository.readTileSprite(imageFileName, TileService.ENCODING, (error, data) => {
      tile.sprite = TileService.DATA_URL_PREFIX + data;
      callback(tile)
    });
  }

  static enrichTileSync(tile) {
    const imageFileName = tile.sprite;
    tile.sprite = TileService.DATA_URL_PREFIX + TileRepository.readTileSpriteSync(imageFileName, TileService.ENCODING);
    return tile;
  }

  static generateId(existingTiles) {
    existingTiles.forEach(tile => console.log(tile.id));
    let i = 1;
    for(i; existingTiles.some(tile => tile.id === i); i++) {}
    console.log("generated id: " + i);
    return i;
  }
}
