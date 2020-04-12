import { Component, Input } from "@angular/core";
@Component({
    selector: 'products-price',
    template: `
    \${{price}}    
    ` ,

})
export class ProductPriceComponent {
    @Input() price: number;

    constructor() {

    }
}