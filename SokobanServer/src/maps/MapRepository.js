export default class MapRepository {
  static MAP_PATH = "data/maps/maps.json";

  static getMaps(callback) {
    fs.readFile(MapRepository.MAP_PATH, maps => {
      const result = maps || [];
      callback(result);
    });
  }

  static getMap(id, callback) {
    MapRepository.getMaps(maps => {
      const result = maps.find(map => map.id === id);
      callback(result);
    });
  }

  static putMap(map, callback)  {
    MapRepository.deleteMap(map.id, () => {
      this.getMaps(maps => {
        const alteredMaps = [ ...maps, map ];
        MapRepository.saveMaps(alteredMaps, callback);
      })
    });
  }

  static deleteMap(id, callback) {
    MapRepository.getMaps(maps => {
      const filteredMaps = maps.filter(map => map.id === id);
      MapRepository.saveMaps(filteredMaps, callback);
    });
  }

  static saveMaps(maps, callback) {
    fs.writeFile(MapRepository.MAP_PATH, JSON.stringify(maps), callback)
  }
}
