import MapService from "./MapService";

export const getMapsHandler = (req, res) => MapService.getMaps(maps  => res.send(maps));
export const getMapHandler = (req, res) => MapService.getMap(parseInt(req.params.mapId), map => res.send(map));
export const putMapHandler = (req, res) => MapService.putMap(req.body, () => res.end());
export const deleteMapHandler = (req, res) => MapService.deleteMap(parseInt(req.params.mapId), () => res.end());
