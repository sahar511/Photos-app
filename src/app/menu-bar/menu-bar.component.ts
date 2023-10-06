import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

import { selectToken } from '../Auth/store/auth.selectors';
import { AuthService } from '../Auth/auth.service';
import { selectSelectedUser } from '../Auth/store/auth.selectors';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  token$ = this.store.select(selectToken);
  user$ = this.store.select(selectSelectedUser)
  items: MenuItem[] | undefined;
  authMenuItem: any = {
    label: 'Login',
    icon: 'pi pi-user',
    routerLink: ['/login'],
  };

  constructor(private store: Store, private authService: AuthService) {}
  ngOnInit() {
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
