import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// store
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';

// users routes
import { UsersRoutes } from './users.routes';

// services
import { UsersCrudService } from './services/users-crud.service';

// components
import {
  UserCreateComponent,
  UserCreateDialogComponent
} from './components/user-create/user-create.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UserEditComponent } from './containers/user-edit/user-edit.component';
import { UsersListSearchBarComponent } from './components/users-list-search-bar/users-list-search-bar.component';
import { UsersListUserBarComponent } from './components/users-list-user-bar/users-list-user-bar.component';
import { UsersSidenavMenuComponent } from './components/users-sidenav-menu/users-sidenav-menu.component';
import { UsersListToolbarComponent } from './components/users-list-toolbar/users-list-toolbar.component';
import { UsersListContainerComponent } from './components/users-list-container/users-list-container.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { UsersSidenavComponent } from './containers/users-sidenav/users-sidenav.component';
import { UsersComponent } from './containers/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UsersRoutes,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  entryComponents: [UserCreateComponent, UserCreateDialogComponent],
  declarations: [
    UserCreateComponent,
    UserCreateDialogComponent,
    UsersListComponent,
    UserEditComponent,
    UsersListSearchBarComponent,
    UsersListUserBarComponent,
    UsersSidenavMenuComponent,
    UsersListToolbarComponent,
    UsersListContainerComponent,
    SearchFilterPipe,
    UsersSidenavComponent,
    UsersComponent
  ],
  providers: [UsersCrudService]
})
export class UsersModule {}
