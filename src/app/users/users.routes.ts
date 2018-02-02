import { RouterModule } from '@angular/router';

import { UsersComponent } from './containers/users/users.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UserEditComponent } from './containers/user-edit/user-edit.component';

const Routes = [
  {
    path: 'users-list',
    component: UsersComponent
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent
  }
];

export const UsersRoutes = RouterModule.forChild(Routes);
