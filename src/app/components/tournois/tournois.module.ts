import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { TournoisRoutingModule } from './tournois-routing.module'; // Importez le module de routage

@NgModule({
  declarations: [
    IndexComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    TournoisRoutingModule // Ajoutez le module de routage ici
  ]
})
export class TournoisModule { }
