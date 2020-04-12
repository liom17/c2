import { Component } from "@angular/core"
import { Product } from './product';

@Component({
    selector: 'products-row',
    templateUrl: 'products-row.component.html',
    styleUrls: ['products-row.component.css'],
    inputs: ['product'],
    host: { class: 'row' }
})
export class ProductRowComponent {
    product: Product;
    constructor() {
    }
}