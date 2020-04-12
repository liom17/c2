import { Component, Input } from "@angular/core";
@Component({
    selector: 'products-image',
    template: `<img [src]="url" class="image-thumbnail">
    `,

})
export class ProductImageComponent {
    @Input() url: string;
}