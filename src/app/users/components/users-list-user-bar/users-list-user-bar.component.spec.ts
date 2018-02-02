import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListUserBarComponent } from './users-list-user-bar.component';

describe('UsersListUserBarComponent', () => {
  let component: UsersListUserBarComponent;
  let fixture: ComponentFixture<UsersListUserBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListUserBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListUserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
