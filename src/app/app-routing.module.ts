import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinComponent } from './bulletin/bulletin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/bulletin',
    pathMatch: 'full'
  },
  {
    path: 'bulletin',
    component: BulletinComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
