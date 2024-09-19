import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'contact-form',
    component:ContactFormComponent
  },
  {
    path:'all-users',
    component:AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
