import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SvgEditComponent } from './svg-edit.component';

describe('SvgEditComponent', () => {
  let component: SvgEditComponent;
  let fixture: ComponentFixture<SvgEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgEditComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(SvgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
