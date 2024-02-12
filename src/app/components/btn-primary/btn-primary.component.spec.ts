import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryComponent } from './btn-primary.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BtnPrimaryComponent', () => {
  let component: BtnPrimaryComponent;
  let fixture: ComponentFixture<BtnPrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnPrimaryComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(BtnPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#handleClick should emit Event', ()=> {
    const spy = jest.spyOn(component.onClickEvent, 'emit');
    component.handleClick();
    expect(spy).toHaveBeenCalled();
  })
});
