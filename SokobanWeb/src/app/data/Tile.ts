export default class Tile {
  id: number;
  name: string;
  solid: boolean;
  sprite: string;

  constructor(tile: Tile = undefined) {
    if (tile) {
      this.id = tile.id;
      this.name = tile.name;
      this.solid = tile.solid;
      this.sprite = tile.sprite;
    }
    this.name = this.name || "";
  }
}
