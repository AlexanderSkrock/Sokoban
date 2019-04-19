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
    new Entry('/game', 'Spielen'),
    new Entry('/tile-editor', 'Tile-Editor'),
    new Entry('/map-editor', 'Map-Editor'),
    new Entry('/settings', 'Einstellungen'),
  ];
  title = 'Sokoban';
}
