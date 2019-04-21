const fs = require("fs");

export default class TileRepository {
  static TILES_BASE_PATH = "data/tiles/";
  static TILES_PATH = `${TileRepository.TILES_BASE_PATH}tiles.json`;

  static getTiles(callback) {
    fs.readFile(TileRepository.TILES_PATH, (error, data) => {
      let tiles = [];
      if(!error && data) {
        tiles = JSON.parse(data)
      }
      console.log(`loaded ${tiles.length} tiles`);
      callback(tiles);
    });
  }

  static getTile(id, callback) {
    TileRepository.getTiles(tiles => {
      const result = tiles.find(tile => tile.id === id);
      callback(result);
    });
  }

  static putTile(tile, callback)  {
    TileRepository.deleteTile(tile, () => {
      TileRepository.getTiles(tiles => {
        const alteredTiles = [ ...tiles, tile ];
        console.log(`put tile ${tile.name} with id ${tile.id}`);
        TileRepository.saveTiles(alteredTiles, callback)
      })
    });
  }

  static deleteTile(tileId, callback) {
    TileRepository.getTiles(tiles => {
      const filteredTiles = tiles.filter(tile => tile.id !== tileId);
      console.log(`deleted tile with id ${tileId}`);
      TileRepository.saveTiles(filteredTiles, callback);
    });
  }

  static saveTiles(tiles, callback) {
    console.log(`saved ${tiles.length} tiles`);
    fs.writeFile(TileRepository.TILES_PATH, JSON.stringify(tiles), callback)
  }

  static writeTileSprite(imageFileName, imageData, encoding, callback) {
    const path = `${TileRepository.TILES_BASE_PATH}${imageFileName}`;
    fs.writeFile(path, imageData, encoding, callback)
  }

  static readTileSprite(imageFileName, encoding, callback) {
    const path = `${TileRepository.TILES_BASE_PATH}${imageFileName}`;
    fs.readFile(path, encoding, callback);
  }

  static readTileSpriteSync(imageFileName, encoding) {
    const path = `${TileRepository.TILES_BASE_PATH}${imageFileName}`;
    return fs.readFileSync(path, encoding);
  }
}
