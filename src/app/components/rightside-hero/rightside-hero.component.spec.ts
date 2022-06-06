import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideHeroComponent } from './rightside-hero.component';

describe('RightsideHeroComponent', () => {
  let component: RightsideHeroComponent;
  let fixture: ComponentFixture<RightsideHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsideHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsideHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
