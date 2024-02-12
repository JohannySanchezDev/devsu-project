import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const mockProduct : Product = {
    id: "Johanny70",
    name: "Visa Infinite Crédito 2",
    description: "Esta tarjeta es test",
    logo: "https://www.visa.co.ve/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-infinite-400x225.jpg",
    date_release: "2023-11-17T00:00:00.000+00:00",
    date_revision: "2024-11-17T00:00:00.000+00:00"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#onClickAdd should emit Event', ()=> {
    const spy = jest.spyOn(component.onClickAddEvent, 'emit');
    component.onClickAdd();
    expect(spy).toHaveBeenCalled();
  })
  it('#onClickDelete should emit Event', ()=> {
    const spy = jest.spyOn(component.onClickDeleteEvent, 'emit');
    component.onClickDelete(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#onClickEdit should emit Event', ()=> {
    const spy = jest.spyOn(component.onClickEditEvent, 'emit');
    component.onClickEdit(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#searchProduct should emit Event', ()=> {
    const spy = jest.spyOn(component.searchValueEvent, 'emit');
    component.searchProduct('Tarj');
    expect(spy).toHaveBeenCalled();
  })
  it('#oncaptureElement should emit Event', ()=> {
    const spy = jest.spyOn(component.filterValueEvent, 'emit');
    component.itemCaptured = 1;
    component.oncaptureElement();
    expect(spy).toHaveBeenCalled();
  })
})