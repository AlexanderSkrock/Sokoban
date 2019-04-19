import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentModulesModule} from './material-component-modules/material-component-modules.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { TileEditorComponent } from './tile-editor/tile-editor.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
