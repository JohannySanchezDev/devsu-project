import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent {
  @Input() control : string = 'myName';
  @Input() label : string = 'Nombre: ';
  @Input() textError : string = '(*)Complete este Campo...';
  @Input() isError : boolean = false;
}