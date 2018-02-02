import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list-user-bar',
  templateUrl: './users-list-user-bar.component.html',
  styleUrls: ['./users-list-user-bar.component.scss']
})
export class UsersListUserBarComponent implements OnInit {
  @Input() public user;
  @Output() public removeUserEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public removeUser(id) {
    this.removeUserEvent.emit(id);
  }

}
