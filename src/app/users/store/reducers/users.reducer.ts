import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user.model';
import { UsersActions, UsersActionTypes } from '../actions/users.actions';

export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id
});

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
  ids: []
});

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.AddUserSuccess: {
      return adapter.addOne(action.payload.user, state);
    }

    case UsersActionTypes.UpdateUserSuccess: {
      return adapter.updateOne(action.payload.user, state);
    }

    case UsersActionTypes.DeleteUserSuccess: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UsersActionTypes.LoadUsersSuccess: {
      return adapter.addAll(action.payload.users, state);
    }

    case UsersActionTypes.SelectUser: {
      return {
        ...state,
        selectedUserId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedUserId = (state: State) => state.selectedUserId;

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUserTotal
} = adapter.getSelectors();
