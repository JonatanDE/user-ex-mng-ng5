import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list-search-bar',
  templateUrl: './users-list-search-bar.component.html',
  styleUrls: ['./users-list-search-bar.component.scss']
})
export class UsersListSearchBarComponent implements OnInit {
  @Input() public query = '';
  @Output() public search = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
