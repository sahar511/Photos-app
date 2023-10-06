import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ScrollerModule } from 'primeng/scroller';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './Posts/store/posts.reducer';
import { PostsListComponent } from './Posts/posts-list/posts-list.component';
import { PostComponent } from './Posts/post/post.component';
import { PostDetailsComponent } from './Posts/post-details/post-details.component';
import { HomeComponent } from './Posts/home/home.component';
import { CommentComponent } from './Posts/comment/comment.component';
import { CommentFormComponent } from './Posts/comment-form/comment-form.component';
import { LoadingComponent } from './Shared/loading/loading.component';
import { LoginComponent } from './Auth/login/login.component';
import { AvatarModule } from 'primeng/avatar';
import { authReducer } from './Auth/store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { UsersComponent } from './User/users/users.component';
import { PostsEffects } from './Posts/store/posts.effects';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { userEffects } from './User/store/user.effects';
import { userReducer } from './User/store/user.reducer';
import { AuthEffects } from './Auth/store/auth.effects';
import { MessageService } from 'primeng/api';
import { FilterUsersPipe } from './User/filter-users.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    HomeComponent,
    PostDetailsComponent,
    CommentComponent,
    CommentFormComponent,
    LoadingComponent,
    LoginComponent,
    UserDetailsComponent,
    UsersComponent,
    FilterUsersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollerModule,
    AvatarModule,
    RouterModule,
    ButtonModule,
    ToastModule,
    AutoCompleteModule,
    InputTextModule,
    InputTextareaModule,
    StoreModule.forRoot({ postsState : postsReducer, authState: authReducer, userState: userReducer}),
    EffectsModule.forRoot(PostsEffects, userEffects, AuthEffects),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
