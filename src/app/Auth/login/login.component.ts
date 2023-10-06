import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { authApiAction } from '../store/auth.actions';
import { selectError } from '../store/auth.selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error$ = this.store.select(selectError)
  constructor(private store: Store, private messageService: MessageService){}
  
  onSubmit(authForm: NgForm){
    this.store.dispatch(authApiAction.loginStart({ 
      username: authForm.value.username,
      password: authForm.value.password,
     }))
    this.error$.subscribe((error) => {
      if(!error) {
        return
      }
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error,
      })
    })
    authForm.reset()
  }
}
 