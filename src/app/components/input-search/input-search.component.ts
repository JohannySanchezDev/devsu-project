import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  @Output() searchValueEvent = new EventEmitter<string>();
  searchValue: string = '';
  returnValue(){this.searchValueEvent.emit(this.searchValue);}
}
