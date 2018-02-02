import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Store } from '@ngrx/store';
import * as UsersActions from './users/store/actions/users.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private $store: Store<any>,
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'ic-account-circle',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_account_circle_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-chrome-reader-mode',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_chrome_reader_mode_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-inbox',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_inbox_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-menu',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_menu_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-settings',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_settings_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-sort',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_sort_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-star-rate',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_star_rate_black_18px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-supervisor-account',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_supervisor_account_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-verified-user',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_verified_user_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-view-module',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_view_module_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-search',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_search_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-more-vert',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_more_vert_black_24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'ic-person',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ic_person_black_24px.svg'
      )
    );
  }

  ngOnInit() {
    // can be done in router resolve
    this.$store.dispatch(new UsersActions.LoadUsers());
  }
}
