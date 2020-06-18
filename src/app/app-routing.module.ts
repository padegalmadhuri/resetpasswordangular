import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "reset", component: ResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
