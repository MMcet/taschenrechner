import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdditionService } from '../services/addition.service';

@Component({
    imports: [FormsModule],
    selector: 'taschenrechner',
    templateUrl: './taschenrechner.html'
})
export class Taschenrechner {
    public inputA: number = 0;
    public inputB: number = 0;
    public result: number = 0;

    private additionService = inject(AdditionService);

    public add(): void {
        this.result = this.additionService.add(this.inputA, this.inputB);
    }

    public subtract(): void {
        this.result = 2 * this.inputA;
    }

    public multiply(): void {
        // todo
    }
}
