import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  //#region Variables
  @Input() listProduct: Product[] = [];
  @Input() isLoadingTable : boolean = true;
  @Input() listFilterValue : number[] = [5,10,15,20,25];
  @Output() onClickAddEvent = new EventEmitter();
  @Output() onClickEditEvent = new EventEmitter<Product>();
  @Output() onClickDeleteEvent = new EventEmitter<Product>();
  @Output() searchValueEvent = new EventEmitter<string>();
  @Output() filterValueEvent = new EventEmitter<number>();
  itemCaptured : number = 5;
  sizeWindows : number = window.screen.width;
  //#endregion

  //#region Methods
  onClickAdd(){this.onClickAddEvent.emit();}
  onClickDelete(item: Product){this.onClickDeleteEvent.emit(item)}
  onClickEdit(item: Product){this.onClickEditEvent.emit(item)}
  searchProduct(searchValue: string){this.searchValueEvent.emit(searchValue);}
  oncaptureElement(){this.filterValueEvent.emit(this.itemCaptured);}
  //#endregion
}