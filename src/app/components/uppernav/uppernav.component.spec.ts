import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppernavComponent } from './uppernav.component';

describe('UppernavComponent', () => {
  let component: UppernavComponent;
  let fixture: ComponentFixture<UppernavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppernavComponent]
    });
    fixture = TestBed.createComponent(UppernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
