import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotSectionComponent } from './screen-shot-section.component';

describe('ScreenShotSectionComponent', () => {
  let component: ScreenShotSectionComponent;
  let fixture: ComponentFixture<ScreenShotSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenShotSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShotSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
