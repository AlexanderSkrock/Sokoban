import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from './modules/routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentModulesModule} from './modules/material-component-modules/material-component-modules.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameComponent } from './pages/game/game.component';
import { TileEditorComponent } from './pages/tile-editor/tile-editor.component';
import { MapEditorComponent } from './pages/map-editor/map-editor.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GameComponent,
    TileEditorComponent,
    MapEditorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialComponentModulesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
