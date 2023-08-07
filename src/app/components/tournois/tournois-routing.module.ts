import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
      { path: 'index', component: IndexComponent },
      { path: 'add', component: AddComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full' } // Redirige vers 'index' par défaut
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournoisRoutingModule { }
