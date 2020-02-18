import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-library';

  toRead = [
    new Book("Delirium", " Lauren Oliver", 2018)
  ];

  haveRead = [
    new Book("Harry Potter", "J.K. Rowling",1997)
  ];
}