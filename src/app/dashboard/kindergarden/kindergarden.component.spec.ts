import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergardenComponent } from './kindergarden.component';

describe('KindergardenComponent', () => {
  let component: KindergardenComponent;
  let fixture: ComponentFixture<KindergardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KindergardenComponent],
    });
    fixture = TestBed.createComponent(KindergardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
