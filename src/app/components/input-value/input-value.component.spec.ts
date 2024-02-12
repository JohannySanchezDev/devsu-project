import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputValueComponent } from './input-value.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputValueComponent', () => {
  let component: InputValueComponent;
  let fixture: ComponentFixture<InputValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputValueComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(InputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
