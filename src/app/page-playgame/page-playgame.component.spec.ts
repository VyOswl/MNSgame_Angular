import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlaygameComponent } from './page-playgame.component';

describe('PagePlaygameComponent', () => {
  let component: PagePlaygameComponent;
  let fixture: ComponentFixture<PagePlaygameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePlaygameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlaygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
