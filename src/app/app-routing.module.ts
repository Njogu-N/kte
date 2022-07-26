import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { HomeComponent } from './home/home.component';
import { SitesComponent } from './sites/sites.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sites', component: SitesComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contract', component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import {NgModule} from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';
// import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

// const routes: Routes = [
//   {path: 'login', component: PageNotFoundComponent},
//   {path: '', redirectTo: "/app/home", pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
