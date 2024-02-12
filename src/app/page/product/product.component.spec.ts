import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from '../../services/product/product.service';
import { of, throwError,  } from 'rxjs';
import { UtilsService } from '../../services/utils/utils.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let servicesProduct : ProductService;
  let servicesUtil : UtilsService

  const mockProduct : Product = {
    id: "Johanny70",
    name: "Visa Infinite Crédito 2",
    description: "Esta tarjeta es test",
    logo: "https://www.visa.co.ve/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-infinite-400x225.jpg",
    date_release: "2023-11-17T00:00:00.000+00:00",
    date_revision: "2024-11-17T00:00:00.000+00:00"
  }

  const mockServicesProduct = {
    getProducts: ()=> of([]),
    deleteProduct: (product: Product) => of('')
  }

  const mockServicesUtil = {
    messageSnackBar: {
      editIsSuccess: '¡Registro actualizado con éxito!',
      deleteIsSuccess: '¡Registro eliminado con éxito!',
      addIsSuccess: '¡Registro agregado con éxito!',
      editError: '¡Error al modificar este registro, intente nuevamente!',
      deleteError: '¡Error al Eliminar este registro, intente nuevamente!',
      addError: '¡Error al egregar un nuevo registro, intente nuevamente!',
      error: '¡ha ocurrido un Error, intente nuevamente!'
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientModule],
      providers: [
        {provide: ProductService, useValue: mockServicesProduct},
        {provide: UtilsService, useValue: mockServicesUtil}
      ]
    });
    fixture = TestBed.createComponent(ProductComponent);
    servicesProduct = TestBed.inject(ProductService);
    servicesUtil = TestBed.inject(UtilsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit sould call methds getAllProduct()', ()=> {
    servicesProduct = TestBed.inject(ProductService);
    jest.spyOn(component, 'getAllProduct');
    jest.spyOn(mockServicesProduct, 'getProducts');
    component.ngOnInit();
    expect(component.getAllProduct).toHaveBeenCalled();
  })

  it('#getAllProduct sould call services getProducts()', ()=>{
    const spy = jest.spyOn(mockServicesProduct, 'getProducts');
    component.getAllProduct();
    expect(spy).toHaveBeenCalled()
  })

  it('#getAllProduct sould call services isLoadingTable', ()=>{
    jest.spyOn(component, 'getAllProduct');
    component.getAllProduct();
    component.isLoadingTable = true;
    expect(component.isLoadingTable).toBe(true);
  })

  it('#getAllProduct sould call services getProducts() Error setValues', ()=>{
    jest.spyOn(mockServicesProduct, 'getProducts').mockReturnValue(throwError(() => new Error("a error message")));
    component.getAllProduct();
    expect(component.listProduct).toEqual([]);
    expect(component.listSearchProduct).toEqual([]);
  })

  it('#getAllProduct sould call services getProducts()', ()=>{
    jest.spyOn(mockServicesProduct, 'getProducts');
    component.getAllProduct();
    expect(component.listProduct).toEqual([]);
    expect(component.listSearchProduct).toEqual([]);
  })

  it('#onOpenModal should set value isOpenModalForm', ()=>{
    jest.spyOn(component, 'onOpenModal');
    component.onOpenModal('form');
    expect(component.isOpenModalForm).toBe(true);
  })

  it('#onOpenModal should set value isOpenModalDelete', ()=>{
    jest.spyOn(component, 'onOpenModal');
    component.onOpenModal('delete');
    expect(component.isOpenModalDelete).toBe(true);
  })

  it('#onCloseModal should set value isOpenModalDelete', ()=>{
    jest.spyOn(component, 'onCloseModal');
    component.onCloseModal('delete');
    expect(component.isOpenModalDelete).toBe(false);
  })

  it('#onCloseModal should set value isOpenModalForm', ()=>{
    jest.spyOn(component, 'onCloseModal');
    component.onCloseModal('form');
    expect(component.isOpenModalForm).toBe(false);
  })

  it('#onClickAddProduct should set value isEditting', ()=>{
    jest.spyOn(component, 'onClickAddProduct');
    component.onClickAddProduct();
    expect(component.isEditting).toBe(false);
  })

  it('#onClickAddProduct should call onOpenModal', ()=>{
    const spy = jest.spyOn(component, 'onOpenModal');
    component.onClickAddProduct();
    expect(spy).toHaveBeenCalled();
  })

  it('#onClickEditProduct should set value isEditting', ()=>{
    jest.spyOn(component, 'onClickEditProduct');
    component.onClickEditProduct(mockProduct);
    expect(component.isEditting).toBe(true);
  })

  it('#onClickEditProduct should set value objProductCommand', ()=>{
    jest.spyOn(component, 'onClickEditProduct');
    component.onClickEditProduct(mockProduct);
    expect(component.objProductCommand).toEqual(mockProduct);
  })

  it('#onClickEditProduct should call onOpenModal', ()=>{
    const spy = jest.spyOn(component, 'onOpenModal');
    component.onClickEditProduct(mockProduct);
    expect(spy).toHaveBeenCalled();
  })

  it('#onClickDeleteProduct should set value objProductCommand', ()=>{
    jest.spyOn(component, 'onClickDeleteProduct');
    component.onClickDeleteProduct(mockProduct);
    expect(component.objProductCommand).toEqual(mockProduct);
  })

  it('#onClickDeleteProduct should call onOpenModal', ()=>{
    const spy = jest.spyOn(component, 'onOpenModal');
    component.onClickDeleteProduct(mockProduct);
    expect(spy).toHaveBeenCalled();
  })

  it('#onCancelForm should call resetObjProduct()', ()=>{
    const spy = jest.spyOn(component, 'onCloseModal');
    component.onCancelForm();
    expect(spy).toHaveBeenCalled();
  })

  it('#onCancelForm should set value isEditting', ()=>{
    jest.spyOn(component, 'onCancelForm');
    component.onCancelForm();
    expect(component.isEditting).toBe(false);
  })

  it('#onCancelForm should call resetObjProduct()', ()=>{
    const spy = jest.spyOn(component, 'onCloseModal');
    component.onCancelForm();
    expect(spy).toHaveBeenCalled();
  })

  it('#onCancelDelete should call resetObjProduct()', ()=>{
    const spy = jest.spyOn(component, 'resetObjProduct');
    component.onCancelDelete();
    expect(spy).toHaveBeenCalled();
  })

  it('#onCancelDelete should call onCloseModal()', ()=>{
    const spy = jest.spyOn(component, 'onCloseModal');
    component.onCancelDelete();
    expect(spy).toHaveBeenCalled();
  })

  it('#resetObjProduct should setValue objProductCommand', ()=>{
    jest.spyOn(component, 'resetObjProduct');
    const mock = {
      id:'',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    }
    component.objProductCommand = mock;
    component.resetObjProduct();
    expect(component.objProductCommand).toEqual(mock);
  })

  it('#onOpenSnackBar set values in snackBarObj', ()=>{
    jest.spyOn(component, 'onOpenSnackBar');
    component.onOpenSnackBar(true,'isSuccess');
    expect(component.snackBarObj.isOpen).toBe(true);
    expect(component.snackBarObj.message).toEqual('isSuccess');
    expect(component.snackBarObj.isSuccess).toBe(true);
  })

  it('#onCloseSnackBar set values in snackBarObj', ()=>{
    jest.spyOn(component, 'onCloseSnackBar');
    component.onCloseSnackBar();
    expect(component.snackBarObj.isOpen).toBe(false);
    expect(component.snackBarObj.message).toEqual('');
    expect(component.snackBarObj.isSuccess).toBe(false);
  })

  it('#searchProductValue setValues listSearchProduct case empty', ()=>{
    jest.spyOn(component, 'searchProductValue');
    component.searchProductValue('');
    expect(component.listSearchProduct).toEqual([...component.listProduct]);
  })

  it('#searchProductValue setValues listSearchProduct', ()=>{
    const value = 'Tarjeta';
    jest.spyOn(component, 'searchProductValue');
    component.searchProductValue(value);
    let newArr = [...component.listProduct];
    newArr = newArr.filter(x => x.name.toLowerCase().startsWith(value.toLocaleLowerCase()));
    component.listSearchProduct =  [...newArr];
    expect(component.listSearchProduct).toEqual([...newArr]);
  })
});