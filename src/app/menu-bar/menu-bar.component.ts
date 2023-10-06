import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

import { selectToken } from '../Auth/store/auth.selectors';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  token$ = this.store.select(selectToken);
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/'],
    },
    {
      label: 'Login',
      icon: 'pi pi-user',
      routerLink: ['/login'],
    },
    {
      label: 'Logout',
      icon: 'pi pi-user',
      command: () => this.authService.logout(),
    },
    {
      label: 'Users',
      icon: 'pi pi-search',
      routerLink: ['/users'],
    },
  ];

  constructor(private store: Store, private authService: AuthService) {}
}
