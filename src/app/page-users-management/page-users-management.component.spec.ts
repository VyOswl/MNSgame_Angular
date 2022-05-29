import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersManagementComponent } from './page-users-management.component';

describe('PageUsersManagementComponent', () => {
  let component: PageUsersManagementComponent;
  let fixture: ComponentFixture<PageUsersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsersManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
