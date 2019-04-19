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
      TileRepository.enrichTilesSync(tiles);
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
        if(!tile.id) {
          tile.id = TileRepository.generateId();
        }
        const alteredTiles = [ ...tiles, tile ];
        TileRepository.extractSprite(tile, () => TileRepository.saveTiles(alteredTiles, callback));
      })
    });
  }

  static deleteTile(tileToDelete, callback) {
    TileRepository.getTiles(tiles => {
      const filteredTiles = tiles.filter(tile => tile.id === tileToDelete.id);
      TileRepository.saveTiles(filteredTiles, callback);
    });
  }

  static saveTiles(tiles, callback) {
    fs.writeFile(TileRepository.TILES_PATH, JSON.stringify(tiles), callback)
  }

  static extractSprite(tile, callback) {
    const imageFileName = `${tile.id}.png`;
    const data = tile.sprite;
    tile.sprite = imageFileName;
    fs.writeFile(`${TileRepository.TILES_BASE_PATH}${imageFileName}`, data, callback);
  }

  static enrichTilesSync(tiles) {
    tiles.forEach(tile => {
      const imageFileName = tile.sprite;
      tile.sprite = fs.readFileSync(`${TileRepository.TILES_BASE_PATH}${imageFileName}`);
    });
  }

  static generateId() {
    return 0;
  }
}
