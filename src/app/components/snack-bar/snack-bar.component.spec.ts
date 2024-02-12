import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackBarComponent } from './snack-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackBarComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould have isOpening is false', ()=>{
    expect(component.isOpening).toEqual(false);
  })

  it('sould have snackBarObj.isOpen is false', ()=>{
    expect(component.snackBarObj.isOpen).toEqual(false);
  })

  it('sould have snackBarObj.isSuccess is false', ()=>{
    expect(component.snackBarObj.isSuccess).toEqual(false);
  })

  it('sould have snackBarObj.message is empty', ()=>{
    expect(component.snackBarObj.message).toEqual('');
  })

  it('#handleClick should emit Event', ()=> {
    const spy = jest.spyOn(component.onCloseSnackBarEvent, 'emit');
    component.onSnackBar();
    expect(spy).toHaveBeenCalled();
  })

  it('#ngOnChanges should set #isOpenning', ()=> {
    component.isOpening = false;
    component.snackBarObj.isOpen = true;
    component.ngOnChanges({});
    expect(component.isOpening).toEqual(true);
  })

  it('#ngOnChanges should call #onSnackBar', ()=> {
    const spy = jest.spyOn(component, 'onSnackBar');
    component.isOpening = false;
    component.snackBarObj.isOpen = true;
    component.onSnackBar();
    expect(spy).toHaveBeenCalled();
  })
});