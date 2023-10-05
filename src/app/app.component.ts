import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

import { selectToken } from './Auth/store/auth.selectors';
import { AuthService } from './Auth/auth.service';
import { selectSelectedUser } from './User/store/user.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  token$ = this.store.select(selectToken);
  user$ = this.store.select(selectSelectedUser)
  items: MenuItem[] | undefined;
  authMenuItem: any = {
    label: 'Login',
    icon: 'pi pi-user',
    routerLink: ['/login'],
  };

  constructor(private store: Store, private authService: AuthService) {}

  title : string = 'Mini Instagram'

  ngOnInit() {
    this.user$.subscribe((user)=> console.log('user', user))
    this.token$.subscribe((token) => {
      if (token) {

        this.authMenuItem = {
          label: 'Logout',
          icon: 'pi pi-user',
          command: () => this.authService.logout(),
        };
      } else {
        this.authMenuItem = {
          label: 'Login',
          icon: 'pi pi-user',
          routerLink: ['/login'],
        };
      }

      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: ['/'],
        },
        this.authMenuItem,
        {
          label: 'Users',
          icon: 'pi pi-search',
          routerLink: ['/users'],
        },
      ];
    });
  }
}
