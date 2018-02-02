import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListSidenavComponent } from './users-list-sidenav.component';

describe('UsersListSidenavComponent', () => {
  let component: UsersListSidenavComponent;
  let fixture: ComponentFixture<UsersListSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
