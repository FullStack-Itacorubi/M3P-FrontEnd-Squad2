import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeSeparatorComponent } from './fade-separator.component';

describe('FadeSeparatorComponent', () => {
  let component: FadeSeparatorComponent;
  let fixture: ComponentFixture<FadeSeparatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FadeSeparatorComponent]
    });
    fixture = TestBed.createComponent(FadeSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
