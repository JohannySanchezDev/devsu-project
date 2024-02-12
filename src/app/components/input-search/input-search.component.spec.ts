import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSearchComponent } from './input-search.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSearchComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    });
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#returnValue should emit event', ()=> {
    const spy = jest.spyOn(component.searchValueEvent, 'emit');
    component.returnValue();
    expect(spy).toHaveBeenCalled();
  })
});
