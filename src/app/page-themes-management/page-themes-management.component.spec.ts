import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThemesManagementComponent } from './page-themes-management.component';

describe('PageThemesManagementComponent', () => {
  let component: PageThemesManagementComponent;
  let fixture: ComponentFixture<PageThemesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThemesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThemesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
