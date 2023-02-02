import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CasosComponent } from './casos/casos.component';

const routes: Routes = [
	{
		path:'',
		component:LoginComponent
	},
	{
		path:'clientes',
		component:HomeComponent
	},
	{
		path:'casos',
		component:CasosComponent
	},
	{
		path:'login',
		component:LoginComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
