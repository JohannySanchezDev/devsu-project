import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteComponent } from './form-delete.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormDeleteComponent', () => {
  let component: FormDeleteComponent;
  let fixture: ComponentFixture<FormDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDeleteComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(FormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
