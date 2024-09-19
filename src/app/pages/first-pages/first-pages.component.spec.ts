import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPagesComponent } from './first-pages.component';

describe('FirstPagesComponent', () => {
  let component: FirstPagesComponent;
  let fixture: ComponentFixture<FirstPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPagesComponent]
    });
    fixture = TestBed.createComponent(FirstPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
