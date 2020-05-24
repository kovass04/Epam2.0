import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';  
import {AboutComponent} from './about/about.component';


const appRoutes: Routes = [ 
{ path: 'crisis-center' },
{ path: 'heroes' },
{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
{ path: '**' } 
  ];
const routes: Routes =[ { path: 'about/:name',  component: AboutComponent } ];



@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
  }) 
  export class AppRoutingModule { }
