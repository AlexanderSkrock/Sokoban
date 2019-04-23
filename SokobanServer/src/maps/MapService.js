import MapRepository from "./MapRepository";
import TileService from "../tiles/TileService";

export default class MapService {
  static getMaps(callback) {
    MapRepository.getMaps(maps => {
      maps.forEach(map => {
        map = MapService.enrichMapSync(map);
      });
      callback(maps);
    });
  }

  static getMap(id, callback) {
    MapRepository.getMap(id, map => {
      map = MapService.enrichMapSync(map);
      callback(map);
    });
  }

  static putMap(map, callback) {
    map = MapService.extractMap(map);
    if(!map.id) {
      MapRepository.getMaps(maps => {
        map.id = MapService.generateId(maps);
        MapRepository.putMap(map, callback);
      })
    } else {
      MapRepository.putMap(map, callback);
    }
  }

  static deleteMap(mapId, callback) {
    MapRepository.deleteMap(mapId, callback)
  }

  static generateId(existingMaps) {
    let i = 1;
    for(i; existingMaps.some(tile => tile.id === i); i++) {}
    console.log("generated map id: " + i);
    return i;
  }

  static extractMap(map) {
    map.tiles = map.tiles.map(row => row.map(tile => tile ? tile.id : undefined));
    return map;
  }

  static enrichMapSync(map) {
    map.tiles = map.tiles.map(row => row.map(tileId => TileService.getTileSync(tileId)));
    return map;
  }
}
