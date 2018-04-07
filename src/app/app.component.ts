import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// this is where the logic resides for the ng5 application
export class AppComponent {
  title = 'app';
}
