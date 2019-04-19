import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import {MapEditorComponent} from '../map-editor/map-editor.component';
import {GameComponent} from '../game/game.component';
import {TileEditorComponent} from '../tile-editor/tile-editor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'game', pathMatch: 'full', component: GameComponent },
  { path: 'tile-editor', pathMatch: 'full', component: TileEditorComponent },
  { path: 'map-editor', pathMatch: 'full', component: MapEditorComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
   RouterModule
  ]
})
export class RoutingModule { }