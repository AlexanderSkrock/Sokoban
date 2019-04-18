import MapService from "./MapService";

export default class MapEndpoint {
  static getMapsHandler = (req, res) => MapService.getMaps(res.send);
  static getMapHandler = (req, res) => MapService.getMap(req.params.id, res.send);
  static putMapHandler = (req, res) => MapService.putMap(req.body, res.end);
  static deleteMapHandler = (req, res) => MapService.deleteMap(req.body, res.end);
}
