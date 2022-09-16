import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStartgameComponent } from './page-startgame.component';

describe('PageStartgameComponent', () => {
  let component: PageStartgameComponent;
  let fixture: ComponentFixture<PageStartgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStartgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStartgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
