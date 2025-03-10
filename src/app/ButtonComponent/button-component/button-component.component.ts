import { Component, Input, output} from '@angular/core';
import { Product } from '../../Models/productModel/product';
import { emit } from 'node:process';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.css',
  standalone:true
})
export class ButtonComponentComponent{
  action=output<void>()
  executeAction() {
    this.action.emit()
  }
}
