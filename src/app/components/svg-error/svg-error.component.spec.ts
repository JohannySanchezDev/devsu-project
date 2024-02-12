import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SvgErrorComponent } from './svg-error.component';

describe('SvgErrorComponent', () => {
  let component: SvgErrorComponent;
  let fixture: ComponentFixture<SvgErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgErrorComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(SvgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
