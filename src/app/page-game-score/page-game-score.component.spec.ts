import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGameScoreComponent } from './page-game-score.component';

describe('PageGameScoreComponent', () => {
  let component: PageGameScoreComponent;
  let fixture: ComponentFixture<PageGameScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGameScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGameScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
