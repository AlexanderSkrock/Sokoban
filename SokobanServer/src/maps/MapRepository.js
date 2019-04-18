const fs = require("fs");

export default class MapRepository {
  static MAP_PATH = "data/maps/maps.json";

  static getMaps(callback) {
    fs.readFile(MapRepository.MAP_PATH, (error, data) => {
      let maps = [];
      if(!error && data) {
        maps = JSON.parse(data)
      }
      callback(maps);
    });
  }

  static getMap(id, callback) {
    MapRepository.getMaps(maps => {
      const result = maps.find(map => map.id === id);
      callback(result);
    });
  }

  static putMap(map, callback)  {
    MapRepository.deleteMap(map, () => {
      this.getMaps(maps => {
        if(!map.id) {
          map.id = MapRepository.generateId();
        }
        const alteredMaps = [ ...maps, map ];
        MapRepository.saveMaps(alteredMaps, callback);
      })
    });
  }

  static deleteMap(mapToDelete, callback) {
    MapRepository.getMaps(maps => {
      const filteredMaps = maps.filter(map => map.id === mapToDelete.id);
      MapRepository.saveMaps(filteredMaps, callback);
    });
  }

  static saveMaps(maps, callback) {
    fs.writeFile(MapRepository.MAP_PATH, JSON.stringify(maps), callback)
  }

  static generateId() {
    return 0;
  }
}
