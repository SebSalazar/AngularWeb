import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GTAComponent } from './components/gta/gta.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component:  AboutComponent
  },
  {
    path: 'gta', component: GTAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
