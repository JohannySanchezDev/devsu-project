import { Component, OnInit } from '@angular/core';
import { SnackBar } from 'src/app/interface/common.interface';
import { Product, ResponseSubmit } from 'src/app/interface/product.interface';
import { ProductService } from '../../services/product/product.service';
import { UtilsService } from '../../services/utils/utils.service';
import { ModalTypes } from 'src/app/types/common.types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  //#region Variables and Propiedades
  listProduct: Product[] = [];
  listSearchProduct: Product[] = [];
  objProductCommand: Product = {} as Product;
  modalTypes : ModalTypes = 'form';
  isOpenModalForm : boolean = false;
  isOpenModalDelete : boolean = false;
  snackBarObj : SnackBar = {isOpen: false, isSuccess: false, message: ''};
  isSubmittingDelete : boolean =  false;
  isLoadingTable : boolean = true;
  isEditting : boolean = false;
  filterValue : number = 5;
  listFilterValue : number[] = [5,10,15,20,25];
  //#endregion
  
  //#region Constructor and ngOnInit
  constructor(
    private _services : ProductService, 
    private _utilsServices : UtilsService,
   
  ){  }
  ngOnInit(): void { this.getAllProduct()} 
  //#endregion

  //#region Getters
  getAllProduct(){
    this.isLoadingTable =  true;
    this._services.getProducts().subscribe((resp => {
      this.listProduct = resp;
      this.listSearchProduct = resp.slice(0,this.filterValue);
      this.isLoadingTable = false;
    }),error =>{
      console.log(error);
      this.listProduct = [];
      this.isLoadingTable = false;
      this.onOpenSnackBar(false,"¡Ha ocurrido un error en la Consulta de los produtos Financieros, refresque la pantalla!")
    })
  }
  //#endregion
  
  //#region Methods
  onOpenModal(_modalTypes : ModalTypes){
    switch (_modalTypes) {
      case 'form': this.isOpenModalForm = true;
      break;
      case 'delete': this.isOpenModalDelete = true;
      break;
      default:
        this.isOpenModalForm = false;
        this.isOpenModalDelete = false;
      break;
    }
  }
  onCloseModal(_modalTypes : ModalTypes){
    switch (_modalTypes) {
      case 'form': this.isOpenModalForm = false;
      break;
      case 'delete': this.isOpenModalDelete = false;
      break;
      default:
        this.isOpenModalForm = false;
        this.isOpenModalDelete = false;
      break;
    }
  }
  onClickAddProduct(){ 
    this.isEditting = false;
    this.onOpenModal('form'); 
  }
  onClickEditProduct(item: Product){ 
    if (item !== undefined) {
      this.isEditting = true;
      this.objProductCommand = item;
      this.onOpenModal('form'); 
    }
  }
  onClickDeleteProduct(item: Product){ 
    if (item !== undefined) {
      this.objProductCommand = item;
      this.onOpenModal('delete'); 
    }
  }
  onCancelForm(){ 
    this.resetObjProduct();
    this.isEditting = false;
    this.onCloseModal('form');
  }
  onSubmitForm(_response : ResponseSubmit){
    if (_response.isSuccess) {
      if (!this.isEditting) {
        let newArr = [...this.listProduct];
        newArr.unshift(_response.response)
        this.listSearchProduct = newArr.slice(0,this.filterValue);
        this.listProduct = newArr;
        this.onOpenSnackBar(true,this._utilsServices.messageSnackBar.addIsSuccess);
      } else {
        let newArr = [...this.listProduct];
        const index = newArr.findIndex(x => x.id === _response.response.id);
        newArr[index]=_response.response;
        this.listSearchProduct = newArr.slice(0,this.filterValue);
        this.listProduct = newArr;
        this.onOpenSnackBar(true,this._utilsServices.messageSnackBar.editIsSuccess);
        this.onCloseModal('form');
      }
    } else {
      this.onOpenSnackBar(
        true,
        this.isEditting 
        ? this._utilsServices.messageSnackBar.editError
        : this._utilsServices.messageSnackBar.addError
      )
    }
  }
  onCancelDelete(){
    this.resetObjProduct();
    this.onCloseModal('delete');  
  }
  onSubmitDelete(){
    this.isSubmittingDelete = true;
    this._services.deleteProduct(this.objProductCommand).subscribe((resp => {
      this.isSubmittingDelete = false;
      this.onCloseModal('delete');
      this.updateListProductAfterDelete();
      
    }), error => {
      if (error.status === 200) {
        this.isSubmittingDelete = false;
        this.onCloseModal('delete');
        this.updateListProductAfterDelete();
      } else {
        this.isSubmittingDelete = false;
        this.onCloseModal('delete');
        this.onOpenSnackBar(false, this._utilsServices.messageSnackBar.deleteError);
      }
    })
  }
  updateListProductAfterDelete(){
    let newArr = [...this.listProduct];
      newArr = this.listProduct.filter(x => x.id !== this.objProductCommand.id);
      this.listSearchProduct = newArr.slice(0,this.filterValue);
      this.listProduct = newArr;
      this.onOpenSnackBar(true, this._utilsServices.messageSnackBar.deleteIsSuccess);
  }
  resetObjProduct(){
    this.objProductCommand = {
      id:'',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    }
  }
  onOpenSnackBar(_isSuccess: boolean, _message: string){
    this.snackBarObj = {isOpen: true, message: _message, isSuccess: _isSuccess};
  }
  onCloseSnackBar(){
    this.snackBarObj = {isOpen: false, message: '', isSuccess: false};
  }
  searchProductValue(searchValue : string){
    if (searchValue === '') {
      this.listSearchProduct = [...this.listProduct]
    } else {
      let newArr = [...this.listProduct];
      newArr = newArr.filter(x => x.name.toLowerCase().startsWith(searchValue.toLocaleLowerCase()));
      this.listSearchProduct =  [...newArr];
    }
  }
  onFiilterValueTable(itemCaptured:number){
    this.filterValue = itemCaptured;
    this.listSearchProduct = this.listProduct.slice(0,this.filterValue);
  }
  //#endregion
}