import TileRepository from "./TileRepository";

export default class TileService {
  static ENCODING = 'base64';
  static PNG_TYPE = {
    FILE_SUFFIX: '.png',
    DATA_URL_PREFIX: 'data:image\/png;base64,',
    DATA_URL_MATCHER: /^data:image\/png;base64,/,
  };

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

  static getTileSync(tileId) {
    let tile = TileRepository.getTileSync(tileId);
    tile = TileService.enrichTileSync(tile);
    return tile;
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
    const imageFileName = `${tile.id}${TileService.PNG_TYPE.FILE_SUFFIX}`;
    const data = tile.sprite.replace(TileService.PNG_TYPE.DATA_URL_MATCHER, "");
    tile.sprite = imageFileName;
    TileRepository.writeTileSprite(imageFileName, data, TileService.ENCODING, () => callback(tile));
  }

  static enrichTile(tile, callback) {
    if(tile) {
      const imageFileName = tile.sprite;
      TileRepository.readTileSprite(imageFileName, TileService.ENCODING, (error, data) => {
        tile.sprite = TileService.PNG_TYPE.DATA_URL_PREFIX + data;
        callback(tile)
      });
    } else {
      callback(tile);
    }
  }

  static enrichTileSync(tile) {
    if(tile) {
      const imageFileName = tile.sprite;
      tile.sprite = TileService.PNG_TYPE.DATA_URL_PREFIX + TileRepository.readTileSpriteSync(imageFileName, TileService.ENCODING);
    }
    return tile;
  }

  static generateId(existingTiles) {
    let i = 1;
    for(i; existingTiles.some(tile => tile.id === i); i++) {}
    console.log("generated tile id: " + i);
    return i;
  }
}
