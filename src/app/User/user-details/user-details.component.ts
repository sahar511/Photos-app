import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectSelectedUser } from 'src/app/Auth/store/auth.selectors';
import { authApiAction } from 'src/app/Auth/store/auth.actions';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy{
  private idSubscription!: Subscription;
  @Input() id: number = 0;
  selectedUser$ = this.store.select(selectSelectedUser)

  constructor(private store: Store, private route: ActivatedRoute, ){}

  ngOnInit(): void {
    this.idSubscription = this.route.params.subscribe(({ id }) => {
      this.id = id
    })

    this.store.dispatch(authApiAction.userLoadStart({ id: this.id }))
  }

  ngOnDestroy(): void {
    this.idSubscription.unsubscribe()
}
}
