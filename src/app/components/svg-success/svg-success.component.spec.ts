import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SvgSuccessComponent } from './svg-success.component';

describe('SvgSuccessComponent', () => {
  let component: SvgSuccessComponent;
  let fixture: ComponentFixture<SvgSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgSuccessComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(SvgSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
