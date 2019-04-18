import MapService from "./MapService";

export const getMapsHandler = (req, res) => MapService.getMaps(res.send);
export const getMapHandler = (req, res) => MapService.getMap(req.params.id, res.send);
export const putMapHandler = (req, res) => MapService.putMap(req.body, res.end);
export const deleteMapHandler = (req, res) => MapService.deleteMap(req.body, res.end);
