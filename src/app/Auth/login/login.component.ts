import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
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
export class LoginComponent implements OnInit {
  error$ = this.store.select(selectError)
  constructor(private authService: AuthService, private store: Store, private messageService: MessageService){}
  ngOnInit(): void {
    this.store.dispatch(authApiAction.usersLoadStart())
  }

  onSubmit(authForm: NgForm){
    this.authService.login(authForm.value)
    
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
 