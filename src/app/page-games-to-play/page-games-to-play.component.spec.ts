import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGamesToPlayComponent } from './page-games-to-play.component';

describe('PageGamesToPlayComponent', () => {
  let component: PageGamesToPlayComponent;
  let fixture: ComponentFixture<PageGamesToPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGamesToPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGamesToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
