import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MemberComponent } from './components/member/member.component';
import { AddComponent } from './components/tournois/add/add.component';
import { IndexComponent } from './components/tournois/index/index.component';
import { TournoisComponent } from './components/tournois/tournois.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : 'tournois', loadChildren: () =>import('./components/tournois/tournois.module').then(m => m.TournoisModule)},
  {path : 'membre/add', component:MemberComponent},
  {path : 'login' , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
