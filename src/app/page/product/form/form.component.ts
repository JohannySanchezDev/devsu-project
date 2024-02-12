import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { ErrorsControls, Product, ResponseSubmit } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  //#region Variables
  @Input() objProductCommand: Product = {} as Product;
  @Input() isEditting : boolean = false;
  @Output() onSubmitEvent = new EventEmitter<ResponseSubmit>();
  @Output() onCancelEvent = new EventEmitter();
  isSubmitting : boolean = false;
  minDate : string = new Date().toDateString().split('T')[0];
  firstDate : string = '';
  secondDate : string = '';
  registerForm!: FormGroup;
  formData : ErrorsControls = {
    id: {name: 'id', isError:  false, messageError: ''},
      name: { name: 'name', isError: false, messageError: ''},
      description: { name: 'description', isError: false, messageError: ''},
      logo: { name: 'logo', isError: false, messageError: ''},
      date_release: { name: 'date_release', isError: false, messageError: ''},
      date_revision: { name: 'date_revision', isError: false, messageError: ''},
  } 
  //#endregion

  //#region Constructor, ngOnChange, ngOnInit, formBuild
  constructor(
    private _servicesProduct : ProductService,
    private _formBuilder: FormBuilder
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.isEditting) {

      const _date_revision =  new Date(this.objProductCommand.date_revision);
      const _date_release = new Date(this.objProductCommand.date_release);
      
      this.registerForm.controls['id'].setValue(this.objProductCommand.id);
      this.registerForm.controls['name'].setValue(this.objProductCommand.name);
      this.registerForm.controls['description'].setValue(this.objProductCommand.description);
      this.registerForm.controls['logo'].setValue(this.objProductCommand.logo);
      this.registerForm.controls['date_release'].setValue(_date_release.toISOString().split('T')[0]);
      this.registerForm.controls['date_revision'].setValue(_date_revision.toISOString().split('T')[0]);
    } 
  }
  ngOnInit(): void {
    this.formBuild();
    this.resetError();
  }
  formBuild(){
    this.registerForm = this._formBuilder.group({
      id: new FormControl('', 
        [
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(10)
        ]
      ),
      name:  new FormControl('', 
        [
          Validators.required,
          Validators.minLength(5), 
          Validators.maxLength(100)
        ]
      ),
      description:  new FormControl('', 
        [
          Validators.required, 
          Validators.minLength(10), 
          Validators.maxLength(200)
        ]
      ),
      logo:  new FormControl('', [Validators.required]),
      date_release:  new FormControl('', [Validators.required]),
      date_revision:  new FormControl('', [Validators.required]),
    });
  }
  //#endregion

  //#region Methods
  onVerifyId(){
    this.formData.id.messageError = '';
    this.formData.id.isError = false;

    if (this.registerForm.get('id')?.errors?.['required']) {
      this.formData.id.messageError = '¡(*)Este campo es requerido!';
      this.formData.id.isError = true;
    }else if(this.registerForm.get('id')?.errors?.['minlength']){
      this.formData.id.messageError = '¡(*)Debe se mayor de 3 carácteres!';
      this.formData.id.isError = true;
    }else if(this.registerForm.get('id')?.errors?.['maxlength']){
      this.formData.id.messageError = '¡(*)Debe se menor a 100 dígitos!';
      this.formData.id.isError = true;
    }else if (!this.isEditting) {
      this._servicesProduct.verifyId(this.registerForm.controls['id'].value).subscribe((resp =>{
          if (resp) {
            this.formData.id.isError = true;
            this.formData.id.messageError = '¡(*)Introduzca otro Id, no es válido!'
          }
      }),error => {
        console.log(error);
          this.formData.id.isError = true;
          this.formData.id.messageError = '¡(*)Error al consultar Id, intente nuevamente!'
      })
    } else {
      this.formData.id.isError = false;
      this.formData.id.messageError = ''
    }
  }
  onVerifyName(){
    this.formData.name.messageError = '';
    this.formData.name.isError = false;

    if (this.registerForm.get('name')?.errors?.['required']) {
      this.formData.name.messageError = '¡(*)Este campo es requerido!';
      this.formData.name.isError = true;
    }else if(this.registerForm.get('name')?.errors?.['minlength']){
      this.formData.name.messageError = '¡(*)Debe se mayor de 5 carácteres!';
      this.formData.name.isError = true;
    }else if(this.registerForm.get('name')?.errors?.['maxlength']){
      this.formData.name.messageError = '¡(*)Debe se menor a 100 dígitos!';
      this.formData.name.isError = true;
    }else{
      this.formData.name.isError = false;
      this.formData.name.messageError = ''
    }
  }
  onVerifyDescripcion(){
    this.formData.description.messageError = '';
    this.formData.description.isError = false;

    if (this.registerForm.get('description')?.errors?.['required']) {
      this.formData.description.messageError = '¡(*)Este campo es requerido!';
      this.formData.description.isError = true;
    }else if(this.registerForm.get('description')?.errors?.['minlength']){
      this.formData.description.messageError = '¡(*)Debe se mayor de 10 carácteres!';
      this.formData.description.isError = true;
    }else if(this.registerForm.get('description')?.errors?.['maxlength']){
      this.formData.description.messageError = '¡(*)Debe se menor a 200 dígitos!';
      this.formData.description.isError = true;
    }else{
      this.formData.description.isError = false;
      this.formData.description.messageError = ''
    }
  }
  onVerifyDateRelease(){
    const myDate = new Date(this.registerForm.controls['date_release'].value);
    myDate.setFullYear(myDate.getFullYear() + 1);
    this.registerForm.controls['date_revision'].setValue(myDate.toISOString().split('T')[0]); 
  }
  onGetError(e:Event, name: string){
    switch (name) {
      case this.formData.id.name:
        this.onVerifyId();
      break;
      case this.formData.name.name:
        this.onVerifyName();
      break;
      case this.formData.description.name:
        this.onVerifyDescripcion();
      break;
      case this.formData.logo.name:
        this.formData.logo.isError = this.registerForm.get('logo')?.errors?.['required'];
      break;
      case this.formData.date_release.name:
          this.onVerifyDateRelease();
      break;
      default: break;
    }
  }
  resetError(){
    this.formData = {
      id: {name: 'id', isError:  false, messageError: ''},
      name: { name: 'name', isError: false, messageError: ''},
      description: { name: 'description', isError: false, messageError: ''},
      logo: { name: 'logo', isError: false, messageError: ''},
      date_release: { name: 'date_release', isError: false, messageError: ''},
      date_revision: { name: 'date_revision', isError: false, messageError: ''},
    }
  }
  onCancel(){
    this.registerForm.reset();
    this.onCancelEvent.emit();
  }
  onSubmit(){
    this.isSubmitting = true;

    if (this.registerForm.valid) {
      const _date_revision =  new Date(this.registerForm.controls['date_revision'].value);
      const _date_release = new Date(this.registerForm.controls['date_release'].value)

      const obj: Product = 
      {
        id: this.registerForm.controls['id'].value,
        name: this.registerForm.controls['name'].value,
        description: this.registerForm.controls['description'].value,
        logo: this.registerForm.controls['logo'].value,
        date_release: _date_release.toISOString().split('T')[0],
        date_revision: _date_revision.toISOString().split('T')[0],
      }
      if (this.isEditting) {this.handleUpdate(obj);}
      else {this.handleOnAdd(obj);}
    }
  }
  handleOnAdd(data: Product){
    this._servicesProduct.createProduct(data).subscribe((resp => {
      this.isSubmitting = false;
      const objResponse : ResponseSubmit= {response: resp, isSuccess: true};
      this.onSubmitEvent.emit(objResponse);
      this.registerForm.reset();
    }), error => {
      console.log(error);
      this.isSubmitting = false;
      const objResponse : ResponseSubmit= {response: {}, isSuccess: false};
      this.onSubmitEvent.emit(objResponse);
      this.registerForm.reset();
    })
  }
  handleUpdate(data: Product){
    this._servicesProduct.updateProduct(data).subscribe((resp => {
      this.isSubmitting = false;
      const objResponse : ResponseSubmit= {response: resp, isSuccess: true};
      this.onSubmitEvent.emit(objResponse);
      this.registerForm.reset();
    }), error => {
      console.log(error);
      this.isSubmitting = false;
      const objResponse : ResponseSubmit= {response: [], isSuccess: false};
      this.onSubmitEvent.emit(objResponse);
      this.registerForm.reset();
    })
  }
  //#endregion
}