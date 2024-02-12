import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onClickSecondary should emit Event', ()=> {
    const spy = jest.spyOn(component.onClickSecondaryEvent, 'emit');
    component.onClickSecondary();
    expect(spy).toHaveBeenCalled();
  })

  it('#onSubmit should emit Event', ()=> {
    const spy = jest.spyOn(component.onClickPrimaryEvent, 'emit');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  })
});