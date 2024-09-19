import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMembershipComponent } from './custom-membership.component';

describe('CustomMembershipComponent', () => {
  let component: CustomMembershipComponent;
  let fixture: ComponentFixture<CustomMembershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMembershipComponent]
    });
    fixture = TestBed.createComponent(CustomMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
