import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryNotAlowedComponent } from './registry-not-alowed.component';

describe('RegistryNotAlowedComponent', () => {
  let component: RegistryNotAlowedComponent;
  let fixture: ComponentFixture<RegistryNotAlowedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistryNotAlowedComponent]
    });
    fixture = TestBed.createComponent(RegistryNotAlowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
