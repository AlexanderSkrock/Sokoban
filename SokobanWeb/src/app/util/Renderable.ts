import SokobanMap from "../data/SokobanMap";

export default interface Renderable<T extends RenderingContext> {
  render(renderContext: T): void;
}
