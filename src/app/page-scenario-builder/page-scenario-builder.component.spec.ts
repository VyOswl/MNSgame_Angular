import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScenarioBuilderComponent } from './page-scenario-builder.component';

describe('PageScenarioBuilderComponent', () => {
  let component: PageScenarioBuilderComponent;
  let fixture: ComponentFixture<PageScenarioBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageScenarioBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageScenarioBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
