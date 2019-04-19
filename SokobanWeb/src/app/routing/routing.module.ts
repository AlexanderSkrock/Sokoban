import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Add routes as follows
  // { path: '', pathMatch: 'full', component: Component}
  // Default match
  // { path: '**', component: Component}
  // Reference routes by usage of this directive [routerLink]="['/home']"
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
