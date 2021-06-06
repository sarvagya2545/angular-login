import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
