import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SvgWarningComponent } from './svg-warning.component';

describe('SvgWarningComponent', () => {
  let component: SvgWarningComponent;
  let fixture: ComponentFixture<SvgWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgWarningComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(SvgWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
