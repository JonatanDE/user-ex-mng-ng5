import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UsersActionTypes {
  LoadUsers = '[Users] Loading Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  SelectUser = '[Users] Selected user',
  AddUser = '[Users] Add User',
  AddUserSuccess = '[Users] User added',
  UpdateUser = '[Users] Update User',
  UpdateUserSuccess = '[Users] User updated',
  DeleteUser = '[Users] Delete User',
  DeleteUserSuccess = '[Users] User deleted',
  SearchUser = '[Users] Search and filter users',
  Fail = '[Users] Failed'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LoadUsersSuccess;

  constructor(public payload: { users: User[] }) {}
}

export class SelectUser implements Action {
  readonly type = UsersActionTypes.SelectUser;

  constructor(public payload: number) {}
}

export class AddUser implements Action {
  readonly type = UsersActionTypes.AddUser;

  constructor(public payload: { user: User }) {}
}

export class AddUserSuccess implements Action {
  readonly type = UsersActionTypes.AddUserSuccess;

  constructor(public payload: { user: User }) {}
}

export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UpdateUser;

  constructor(public payload: { user: { id: number; changes: User } }) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UsersActionTypes.UpdateUserSuccess;

  constructor(public payload: { user: { id: number; changes: User } }) {}
}

export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DeleteUser;

  constructor(public payload: { id: number }) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = UsersActionTypes.DeleteUserSuccess;

  constructor(public payload: { id: number }) {}
}

export class SearchUser implements Action {
  readonly type = UsersActionTypes.SearchUser;

  constructor(public payload: { query: string }) {}
}

export class Fail implements Action {
  readonly type = UsersActionTypes.Fail;
  constructor(public payload: any) {}
}

export type UsersActions =
  | LoadUsers
  | LoadUsersSuccess
  | SelectUser
  | AddUser
  | AddUserSuccess
  | UpdateUser
  | UpdateUserSuccess
  | DeleteUser
  | DeleteUserSuccess
  | SearchUser
  | Fail;
