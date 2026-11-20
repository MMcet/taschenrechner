import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'taschenrechner',
    templateUrl: './taschenrechner.html'
})
export class Taschenrechner {
    public inputA: number = 0;
    public inputB: number = 0;
    public result: number = 0;

    public add(): void {
        this.result = this.inputA + this.inputB;
    }

    public subtract(): void {
        this.result = 2 * this.inputA - this.inputB;
    }

    public multiply(): void {
        // todo
    }
}
