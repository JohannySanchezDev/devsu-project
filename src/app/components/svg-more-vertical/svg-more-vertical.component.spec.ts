import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SvgMoreVerticalComponent } from './svg-more-vertical.component';

describe('SvgMoreVerticalComponent', () => {
  let component: SvgMoreVerticalComponent;
  let fixture: ComponentFixture<SvgMoreVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgMoreVerticalComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(SvgMoreVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
