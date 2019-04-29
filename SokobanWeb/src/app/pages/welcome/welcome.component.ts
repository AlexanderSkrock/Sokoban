import {Component, Input, OnInit} from '@angular/core';
import {GameElementService} from "../../services/game-element.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  gameElements = [];

  constructor(private gameElementService: GameElementService) {
  }

  ngOnInit() {
    this.gameElements = [
      {
        name: "Spieler",
        image: this.gameElementService.getPlayerImage(),
      },
      {
        name: "Box",
        image: this.gameElementService.getBoxImage(),
      },
      {
        name: "Boxziel",
        image: this.gameElementService.getBoxTargetImage(),
      },
    ];
  }
}
