import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'student',
    inputs: ['name'],
    template: `<p (click)="onClicked()">{{name}}<p>`
}
)

export class Student {
    name: string;
    @Output() studentSelected: EventEmitter<string>;
    constructor() {
        this.studentSelected = new EventEmitter();
    }
    onClicked() {
        this.studentSelected.emit(this.name);
    }

}
