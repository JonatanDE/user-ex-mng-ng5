import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListToolbarComponent } from './users-list-toolbar.component';

describe('UsersListToolbarComponent', () => {
  let component: UsersListToolbarComponent;
  let fixture: ComponentFixture<UsersListToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
