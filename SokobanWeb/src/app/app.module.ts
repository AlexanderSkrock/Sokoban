import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './modules/routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModulesModule } from './modules/material-component-modules/material-component-modules.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameComponent } from './pages/game/game.component';
import { TileEditorComponent } from './pages/tile-editor/tile-editor.component';
import { MapEditorComponent } from './pages/map-editor/map-editor.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TileSelectorComponent } from './components/tile-selector/tile-selector.component';
import { TileComponent } from './components/tile/tile.component';
import { TileDetailComponent } from './components/tile-detail/tile-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GameComponent,
    TileEditorComponent,
    MapEditorComponent,
    WelcomeComponent,
    TileSelectorComponent,
    TileComponent,
    TileDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialComponentModulesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
