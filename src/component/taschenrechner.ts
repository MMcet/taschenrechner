import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Taschenrechner Component
 */
@Component({
    imports: [FormsModule],
    selector: 'taschenrechner',
    templateUrl: './taschenrechner.html'
})
export class Taschenrechner {
    public inputA: number = 0;
    public inputB: number = 0;
    public result: number = 0;

    /**
     * Adds inputA and inputB and stores the result in result.
     */
    public add(): void {
        this.result = this.inputA + this.inputB;
    }

    /**
     * Subtracts inputB from inputA and stores the result in result.
     */
    public subtract(): void {
        this.result = 2 * this.inputA - this.inputB;
    }

    /**
     * Multiplies inputA and inputB and stores the result in result.
     */
    public multiply(): void {
        // todo
    }
}
