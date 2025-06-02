import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyComponent } from '@tesla/design-angular';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'tds-example-angular';
}
