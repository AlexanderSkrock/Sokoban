import { Component } from '@angular/core';
import {Entry} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  entries = [
    new Entry('', 'Startseite'),
    new Entry('', 'Spielen'),
    new Entry('', 'Tile-Editor'),
    new Entry('', 'Map-Editor'),
    new Entry('', 'Einstellungen'),
  ];
  title = 'Sokoban';
}
