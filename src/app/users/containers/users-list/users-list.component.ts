import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

// store
import { Store } from '@ngrx/store';
import * as UsersActions from '../../store/actions/users.actions';
import * as reducer from '../../../reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users$: Observable<any>;
  public searchText: string;
  public users: string;
  private subscription: Subscription;

  constructor(
    private $store: Store<any>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(['./users-list'], {
      queryParams: { users: 'allUsers' }
    });

    this.users$ = this.$store.select(reducer.selectAllUsers);

    this.subscription = this.route.queryParams.subscribe(params => {
      this.users = 'allUsers';
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public filterUsers(query) {
    this.searchText = query;
    this.$store.dispatch(new UsersActions.SearchUser({ query }));
  }

  public createNewUser(user) {
    this.$store.dispatch(new UsersActions.AddUser({ user }));
  }

  public deleteUser(id) {
    this.$store.dispatch(new UsersActions.DeleteUser({ id: id }));
  }
}
