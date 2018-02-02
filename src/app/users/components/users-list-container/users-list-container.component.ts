import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss']
})
export class UsersListContainerComponent implements OnInit {
  @Input() public users;
  @Input() public filter;
  @Output() public deleteUser = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public removeUser(id) {
    this.deleteUser.emit(id);
  }
}
