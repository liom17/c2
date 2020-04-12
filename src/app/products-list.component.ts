import { Component } from "@angular/core"
import { Product } from './product';


@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['producsts-list.component.css'],
    inputs: ['productsList']
})
export class ProductListComponent {
    productsList: Product[];
    constructor() {
    }
}