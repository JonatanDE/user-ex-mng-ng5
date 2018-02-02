import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUsers from '../users/store/reducers/users.reducer';

export interface State {
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer
};

export const selectUserState = createFeatureSelector<fromUsers.State>('users');

export const selectUserIds = createSelector(
  selectUserState,
  fromUsers.selectUserIds
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUsers.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUsers.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUsers.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUsers.getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);
