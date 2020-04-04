import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'meister-chef')
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
