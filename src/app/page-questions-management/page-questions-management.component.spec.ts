import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuestionsManagementComponent } from './page-questions-management.component';

describe('PageQuestionsManagementComponent', () => {
  let component: PageQuestionsManagementComponent;
  let fixture: ComponentFixture<PageQuestionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQuestionsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuestionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
