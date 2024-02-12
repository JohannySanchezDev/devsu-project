import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChanges } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Product } from '../../../interface/product.interface';
import { ProductService } from '../../../services/product/product.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const mockProduct : Product = {
    id: "Johanny70",
    name: "Visa Infinite Crédito 2",
    description: "Esta tarjeta es test",
    logo: "https://www.visa.co.ve/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-infinite-400x225.jpg",
    date_release: "2023-11-17T00:00:00.000+00:00",
    date_revision: "2024-11-17T00:00:00.000+00:00"
  }

  const mockServicesProduct = {
    verifyId: (id: string)=> of(true),
    createProduct: (product: Product) => of({}),
    updateProduct: (product: Product) => of({})
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ 
        FormsModule, 
        ReactiveFormsModule, 
        HttpClientModule
      ],
      providers: [
        {provide: ProductService, useValue: mockServicesProduct}
      ]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnChange sould set isEditting is true', ()=> {
    const changes : SimpleChanges = {} as SimpleChanges;
    component.isEditting = true;
    component.objProductCommand = mockProduct;
    component.ngOnChanges(changes);
    expect(component.isEditting).toBe(true);
  })
  it('#ngOnChange sould set registerForm in objProductCommand', ()=> {
    const changes : SimpleChanges = {} as SimpleChanges;
    component.isEditting = true;
    component.objProductCommand = mockProduct;

    const _date_revision =  new Date(component.objProductCommand.date_revision);
    const _date_release = new Date(component.objProductCommand.date_release);

    component.ngOnChanges(changes);
    expect(component.registerForm.controls['id'].value).toEqual(component.objProductCommand.id);
    expect(component.registerForm.controls['name'].value).toEqual(component.objProductCommand.name);
    expect(component.registerForm.controls['description'].value).toEqual(component.objProductCommand.description);
    expect(component.registerForm.controls['logo'].value).toEqual(component.objProductCommand.logo);
    expect(component.registerForm.controls['date_release'].value).toEqual(_date_release.toISOString().split('T')[0]);
    expect(component.registerForm.controls['date_revision'].value).toEqual(_date_revision.toISOString().split('T')[0]);
  })
  it('#ngOnInit sould call methds formBuild()', ()=> {
      jest.spyOn(component, 'formBuild');
      component.ngOnInit();
      expect(component.formBuild).toHaveBeenCalled();
  })
  it('#ngOnInit sould call methds resetError()', ()=> {
    jest.spyOn(component, 'resetError');
    component.ngOnInit();
    expect(component.resetError).toHaveBeenCalled();
  })
  it('#onCancel should event emit', ()=> {
    const spy = jest.spyOn(component.onCancelEvent, 'emit');
    component.onCancel();
    expect(spy).toHaveBeenCalled();
  })
  it('#onSubmit should call methds handleUpdate()', ()=>{
    const spy = jest.spyOn(component, 'handleUpdate');
    component.isEditting =  true;
    component.onSubmit();
    component.handleUpdate(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#onSubmit should call methds handleOnAdd()', ()=>{
    const spy = jest.spyOn(component, 'handleOnAdd');
    component.isEditting =  false;
    component.onSubmit();
    component.handleOnAdd(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#handleOnAdd should call services createProduct()', ()=> {
    const spy = jest.spyOn(mockServicesProduct, 'createProduct');
    component.handleOnAdd(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#handleOnAdd sould call Error Services createProduct()', ()=>{
    const spy = jest.spyOn(mockServicesProduct, 'createProduct').mockReturnValue(throwError(() => new Error("a error message")));
    component.handleOnAdd(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#handleOnAdd sould call Error emit Event onSubmitEvent', ()=>{
    jest.spyOn(mockServicesProduct, 'createProduct').mockReturnValue(throwError(() => new Error("a error message")));
    const _spy = jest.spyOn(component.onSubmitEvent, 'emit');
    component.handleOnAdd(mockProduct);
    expect(_spy).toHaveBeenCalled();
  })
  it('#handleOnAdd should emit Event', ()=> {
    const spy = jest.spyOn(component.onSubmitEvent, 'emit');
    component.handleOnAdd(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#handleUpdate should call services updateProduct()', ()=> {
    const spy = jest.spyOn(mockServicesProduct, 'updateProduct');
    component.handleUpdate(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#handleUpdate sould call Error Services updateProduct()', ()=>{
    const spy = jest.spyOn(mockServicesProduct, 'updateProduct').mockReturnValue(throwError(() => new Error("a error message")));
    component.handleUpdate(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#handleUpdate sould call Error emit Event onSubmitEvent', ()=>{
    jest.spyOn(mockServicesProduct, 'updateProduct').mockReturnValue(throwError(() => new Error("a error message")));
    const _spy = jest.spyOn(component.onSubmitEvent, 'emit');
    component.handleUpdate(mockProduct);
    expect(_spy).toHaveBeenCalled();
  })
  it('#handleUpdate should emit Event updateProduct()', ()=> {
    const spy = jest.spyOn(component.onSubmitEvent, 'emit');
    component.handleUpdate(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
  it('#onVerifyId should call services verifyId()', ()=> {
    const spy = jest.spyOn(mockServicesProduct, 'verifyId');
    component.objProductCommand = mockProduct;
    component.registerForm.controls['id'].setValue(component.objProductCommand.id);
    component.isEditting =  false;
    component.onVerifyId();
    expect(spy).toHaveBeenCalled();
  })
  it('#onVerifyId sould errors required', ()=> {
    component.formData.id.messageError = '¡(*)Este campo es requerido!';
    component.formData.id.isError = true;
    component.registerForm.controls['id'].setValue('');
    expect(component.formData.id.messageError).toEqual('¡(*)Este campo es requerido!');
    expect(component.formData.id.isError).toBe(true);
  })

  it('#onVerifyId sould errors minlength', ()=> {
    component.formData.id.messageError = '¡(*)Debe se mayor de 3 carácteres!';
    component.formData.id.isError = true;
    component.registerForm.controls['id'].setValue('12');
    expect(component.formData.id.messageError).toEqual('¡(*)Debe se mayor de 3 carácteres!');
    expect(component.formData.id.isError).toBe(true);
  })

  it('#onVerifyName sould errors required', ()=> {
    component.formData.name.messageError = '¡(*)Este campo es requerido!';
    component.formData.name.isError = true;
    component.registerForm.controls['name'].setValue('');
    expect(component.formData.name.messageError).toEqual('¡(*)Este campo es requerido!');
    expect(component.formData.name.isError).toBe(true);
  })

  it('#onVerifyName sould errors minlength', ()=> {
    component.formData.name.messageError = '¡(*)Debe se mayor de 5 carácteres!';
    component.formData.name.isError = true;
    component.registerForm.controls['name'].setValue('123');
    expect(component.formData.name.messageError).toEqual('¡(*)Debe se mayor de 5 carácteres!');
    expect(component.formData.name.isError).toBe(true);
  })

  it('#onVerifyDescripcion sould errors required', ()=> {
    component.formData.description.messageError = '¡(*)Este campo es requerido!';
    component.formData.description.isError = true;
    component.registerForm.controls['description'].setValue('');
    expect(component.formData.description.messageError).toEqual('¡(*)Este campo es requerido!');
    expect(component.formData.description.isError).toBe(true);
  })

  it('#onVerifyDescripcion sould errors minlength', ()=> {
    component.formData.description.messageError = '¡(*)Debe se mayor de 10 carácteres!';
    component.formData.description.isError = true;
    component.registerForm.controls['description'].setValue('1123456');
    expect(component.formData.description.messageError).toEqual('¡(*)Debe se mayor de 10 carácteres!');
    expect(component.formData.description.isError).toBe(true);
  })

  it('#onGetError call methods onVerifyId()', ()=>{
      const spy = jest.spyOn(component, 'onVerifyId');
      const e : Event = { } as Event;
      component.onGetError(e, component.formData.id.name);
      expect(spy).toHaveBeenCalled();
  })
  it('#onGetError call methods onVerifyName()', ()=>{
    const spy = jest.spyOn(component, 'onVerifyName');
    const e : Event = { } as Event;
    component.onGetError(e, component.formData.name.name);
    expect(spy).toHaveBeenCalled();
})
it('#onGetError call methods onVerifyDescripcion()', ()=>{
  const spy = jest.spyOn(component, 'onVerifyDescripcion');
  const e : Event = { } as Event;
  component.onGetError(e, component.formData.description.name);
  expect(spy).toHaveBeenCalled();
})
it('#onGetError sould errors logo required', ()=> {
  component.formData.logo.messageError = '¡(*)Este campo es requerido!';
  component.formData.logo.isError = true;
  component.registerForm.controls['logo'].setValue('');
  const e : Event = { } as Event;
  component.onGetError(e, component.formData.logo.name);
  expect(component.formData.logo.messageError).toEqual('¡(*)Este campo es requerido!');
  expect(component.formData.logo.isError).toBe(true);
})
})