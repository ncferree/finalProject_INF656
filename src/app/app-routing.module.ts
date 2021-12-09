import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PaintingComponent } from './components/painting/painting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RepairInstallComponent } from './components/repair-install/repair-install.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'painting',
    component: PaintingComponent,
  },
  {
    path: 'repair-install',
    component: RepairInstallComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: "register", 
    component: RegisterComponent 
  },
  { 
    path: "profile", 
    component: ProfileComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
