import { CurrencyPipe } from '@angular/common';
import { Component, signal, input } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  imports: [CurrencyPipe],
  selector: 'bot-product-details',
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {

  product = input.required<IProduct>();
  availableInventory = signal(3);

  getImageUrl() {
    return 'images/robot-parts/' + this.product().imageName;
  }

  addToCart(event: MouseEvent) {
    this.product().name += '(Added to cart)';
    console.log('Adding to cart', event);
  }
}
