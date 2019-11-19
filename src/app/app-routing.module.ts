import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PolishingComponent} from './polishing/polishing/polishing.component';
import {RestorationsComponent} from './restorations/restorations/restorations.component';
import {RebuildsComponent} from './rebuilds/rebuilds.component';
import {AboutComponent} from './about/about.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
