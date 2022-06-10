import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGameManagementComponent } from './page-game-management.component';

describe('PageGameManagementComponent', () => {
  let component: PageGameManagementComponent;
  let fixture: ComponentFixture<PageGameManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGameManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGameManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
