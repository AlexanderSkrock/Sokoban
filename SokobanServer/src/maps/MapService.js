import MapRepository from "./MapRepository";

export default class MapService {
  static getMaps(callback) {
    MapRepository.getMaps(callback);
  }

  static getMap(id, callback) {
    MapRepository.getMap(id, callback);
  }

  static putMap(map, callback) {
    MapRepository.putMap(map, callback);
  }

  static deleteMap(mapId, callback) {
    MapRepository.deleteMap(mapId, callback)
  }
}
