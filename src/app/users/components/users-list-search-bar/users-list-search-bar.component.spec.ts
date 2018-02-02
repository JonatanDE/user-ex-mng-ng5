import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListSearchBarComponent } from './users-list-search-bar.component';

describe('UsersListSearchBarComponent', () => {
  let component: UsersListSearchBarComponent;
  let fixture: ComponentFixture<UsersListSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
