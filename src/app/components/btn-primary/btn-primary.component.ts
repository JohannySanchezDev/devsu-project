import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VarianteButton } from 'src/app/types/common.types';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.css']
})
export class BtnPrimaryComponent {

  @Input() label : string = 'AGREGAR';
  @Input() variant : VarianteButton = 'primary';
  @Input() disabled : boolean = false;
  @Input() isSubmitting : boolean = false;
  @Output() onClickEvent = new EventEmitter();

  handleClick(){this.onClickEvent.emit();}

}
