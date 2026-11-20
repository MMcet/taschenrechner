import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Taschenrechner } from '../component/taschenrechner';

@Component({
  imports: [RouterOutlet, Taschenrechner],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('taschenrechner');
}
