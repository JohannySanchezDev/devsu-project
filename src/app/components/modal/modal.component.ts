import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  //#region Variables and Events
  sizeWindows : number = window.screen.width;
  @Input() isBtnCentered = false;
  @Input() title: string = 'Bienvenido';
  @Input() isOpenModal: boolean = false;
  @Input() width: number = this.sizeWindows < 380 ? 350 : 700;
  @Input() height: number = 400;
  @Input() labelBtnSecondary: string = 'Cancelar';
  @Input() labelBtnPrimary: string = 'Procesar';
  @Input() isShowButtons = true;
  @Input() isSubmitting = false;
  @Output() onClickSecondaryEvent = new EventEmitter();
  @Output() onClickPrimaryEvent = new EventEmitter();
  //#endregion

  //#region Methds
  onClickSecondary(){this.onClickSecondaryEvent.emit()}
  onSubmit(){this.onClickPrimaryEvent.emit()}
  //#endregion
}