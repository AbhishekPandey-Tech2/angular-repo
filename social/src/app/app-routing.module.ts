import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {
    path:"login", component: LoginComponent
  },
  {
    path:"register", component: RegisterComponent
  },
  {
    path:"about", component: AboutComponent
  },
  {
    path:"goto", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
