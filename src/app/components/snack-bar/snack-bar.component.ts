import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SnackBar } from 'src/app/interface/common.interface';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnChanges {
  //#region Variables
  @Input() snackBarObj : SnackBar = {isOpen: false, isSuccess: false, message: ''};
  @Output() onCloseSnackBarEvent = new EventEmitter();
  isOpening : boolean = false;
  //#endregion

  //#region ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isOpening && this.snackBarObj.isOpen) {
      this.isOpening = true;
     
      setTimeout(() => {
        this.onSnackBar();
      }, 3000);
    }
  }
  //#endregion

  //#region Methods
  onSnackBar(){
    this.isOpening = false;
    this.onCloseSnackBarEvent.emit()
  }
  //#endregion
}