import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css']
})
export class FormDeleteComponent{
    
  @Input() objProductCommand: Product = {
    id: '',
    name: 'Tarjeta Multipoints',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  }
}
