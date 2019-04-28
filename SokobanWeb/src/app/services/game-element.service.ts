import { Injectable } from '@angular/core';
import {PUBLIC_IMAGES_API_PATH} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class GameElementService {

  constructor() { }

  getPlayerImage(): HTMLImageElement {
    const image = new Image();
    image.src= `${PUBLIC_IMAGES_API_PATH}/player.png`;
    return image;
  }

  getBoxImage(): HTMLImageElement {
    const image = new Image();
    image.src= `${PUBLIC_IMAGES_API_PATH}/box.png`;
    return image;
  }

  getBoxTargetImage(): HTMLImageElement {
    const image = new Image();
    image.src= `${PUBLIC_IMAGES_API_PATH}/boxtarget.png`;
    return image;
  }
}
