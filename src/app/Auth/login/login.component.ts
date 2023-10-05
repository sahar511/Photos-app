import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { authApiAction } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(authApiAction.usersLoadStart())
  }

  onSubmit(authForm: NgForm){
    this.authService.login(authForm.value)
    // this.store.dispatch(authApiAction.loginStart(authForm.value))
    authForm.reset()
  }

}
 