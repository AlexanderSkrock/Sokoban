export default class Tile {
  id: number;
  name: string;
  solid: boolean;
  sprite: string;

  constructor() {
    this.id = undefined;
    this.name = "";
    this.solid = undefined;
    this.sprite = undefined;
  }
}
