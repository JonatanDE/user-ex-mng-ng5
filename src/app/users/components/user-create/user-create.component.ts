import { Component, Inject, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnDestroy {
  @Output() public userDataEvent = new EventEmitter<User>();
  private subscription: Subscription;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserCreateDialogComponent, {
      width: '400px',
      data: {}
    });

    this.subscription = dialogRef.afterClosed().pipe(filter(Boolean)).subscribe(result => {
      result.fullName = `${result.firstName} ${result.lastNmae}`;
      result.date = new Date();
      this.userDataEvent.emit(result);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.html'
})
export class UserCreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
