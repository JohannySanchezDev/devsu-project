import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SvgDeleteComponent } from './svg-delete.component';

describe('SvgDeleteComponent', () => {
  let component: SvgDeleteComponent;
  let fixture: ComponentFixture<SvgDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgDeleteComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(SvgDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});