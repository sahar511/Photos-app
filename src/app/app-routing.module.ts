import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { PostDetailsComponent } from 'src/app/Posts/post-details/post-details.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { UsersComponent } from './User/users/users.component';

const routes: Routes = [];

@NgModule({
  imports: [  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'posts/:id', component: PostDetailsComponent},
    {path: 'users/:id', component: UserDetailsComponent},
    {path: 'users', component: UsersComponent},
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
