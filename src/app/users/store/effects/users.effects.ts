import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators/debounceTime';

import * as UsersActions from '../actions/users.actions';
import { User } from '../../models/user.model';

import { UsersCrudService } from '../../services/users-crud.service';
import { AddUser, DeleteUser, UpdateUser } from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private service: UsersCrudService) {}

  @Effect()
  getAllUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActions.UsersActionTypes.LoadUsers),
    switchMap(action =>
      this.service.getUsers().pipe(
        tap(users =>
          users.forEach((value, index) => {
            users[index]['fullName'] = `${value.firstName} ${value.lastName}`;
          })
        ),
        map(users => ({
          type: UsersActions.UsersActionTypes.LoadUsersSuccess,
          payload: { users }
        })),
        catchError(error =>
          of({ type: UsersActions.UsersActionTypes.Fail, payload: error })
        )
      )
    )
  );

  @Effect()
  addUser$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActions.UsersActionTypes.AddUser),
    mergeMap((action: AddUser) =>
      this.service.createUser(action.payload.user).pipe(
        map(user => ({
          type: UsersActions.UsersActionTypes.AddUserSuccess,
          payload: { user }
        })),
        catchError(error =>
          of({ type: UsersActions.UsersActionTypes.Fail, payload: error })
        )
      )
    )
  );

  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActions.UsersActionTypes.UpdateUser),
    mergeMap((action: UpdateUser) =>
      this.service
        .updateUser(action.payload.user.id, action.payload.user.changes)
        .pipe(
          map(user => ({
            type: UsersActions.UsersActionTypes.UpdateUserSuccess,
            payload: {
              user: {
                id: action.payload.user.id,
                changes: action.payload.user.changes
              }
            }
          })),
          catchError(error =>
            of({ type: UsersActions.UsersActionTypes.Fail, payload: error })
          )
        )
    )
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActions.UsersActionTypes.DeleteUser),
    mergeMap((action: DeleteUser) =>
      this.service.deleteUser(action.payload.id).pipe(
        map(user => ({
          type: UsersActions.UsersActionTypes.DeleteUserSuccess,
          payload: { id: action.payload.id }
        })),
        catchError(error =>
          of({ type: UsersActions.UsersActionTypes.Fail, payload: error })
        )
      )
    )
  );

  @Effect({dispatch: false})
  searchUser$ = this.actions$.pipe(
    ofType(UsersActions.UsersActionTypes.SearchUser),
    debounceTime(300),
    tap(data => console.log(data))
  );
}
