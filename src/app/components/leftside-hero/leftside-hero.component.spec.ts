import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideHeroComponent } from './leftside-hero.component';

describe('LeftsideHeroComponent', () => {
  let component: LeftsideHeroComponent;
  let fixture: ComponentFixture<LeftsideHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftsideHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
