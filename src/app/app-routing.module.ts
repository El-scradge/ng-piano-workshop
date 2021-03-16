import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PolishingComponent} from './polishing/polishing/polishing.component';
import {RestorationsComponent} from './restorations/restorations/restorations.component';
import {RebuildsComponent} from './rebuilds/rebuilds.component';
import {AboutComponent} from './about/about.component';
import {AdminComponent} from './admin/admin/admin.component';
import {UnderConstructionComponent} from "./under-construction/under-construction.component";
import {TuningComponent} from "./tuning/tuning.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  { path: 'waiting', component: UnderConstructionComponent
  },
  {
    path: 'french-polishing', component: PolishingComponent
  },
  {
    path: 'restorations', component: RestorationsComponent
  },
  {
    path: 'rebuilds', component: RebuildsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path : 'tuning', component: TuningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
