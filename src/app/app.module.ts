import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// http
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// fake api
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './backend/api';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// modules
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { UsersModule } from './users/users.module';

// routes
import { Routing } from './app.route';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    Routing,
    CoreModule,
    SharedModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25
        })
      : [],
    EffectsModule.forRoot([]),
    UsersModule
  ],
  providers: [fakeBackendProvider, MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule {}
