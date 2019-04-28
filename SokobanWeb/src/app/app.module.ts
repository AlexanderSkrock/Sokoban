  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './modules/routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameComponent } from './pages/game/game.component';
import { TileEditorComponent } from './pages/tile-editor/tile-editor.component';
import { MapEditorComponent } from './pages/map-editor/map-editor.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TileSelectorComponent } from './components/tiles/tile-selector/tile-selector.component';
import { TileComponent } from './components/tiles/tile/tile.component';
import { TileDetailComponent } from './components/tiles/tile-detail/tile-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { MapSelectorComponent } from './components/maps/map-selector/map-selector.component';
import { MapComponent } from './components/maps/map/map.component';
import { MapWorkspaceComponent } from './components/maps/map-workspace/map-workspace.component';
import { TileChangeComponent } from './components/maps/tile-change/tile-change.component';
import { BoxChangeComponent } from './components/maps/box-change/box-change.component';
import { BoxTargetChangeComponent } from './components/maps/box-target-change/box-target-change.component';
import { PlayerChangeComponent } from './components/maps/player-change/player-change.component';
import { RenderDirective } from './directives/render.directive';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GameComponent,
    TileEditorComponent,
    MapEditorComponent,
    WelcomeComponent,
    TileSelectorComponent,
    TileComponent,
    TileDetailComponent,
    MapSelectorComponent,
    MapComponent,
    MapWorkspaceComponent,
    TileChangeComponent,
    BoxChangeComponent,
    BoxTargetChangeComponent,
    PlayerChangeComponent,
    RenderDirective,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
