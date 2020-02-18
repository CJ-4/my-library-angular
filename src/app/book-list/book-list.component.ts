import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];
  @Input() name: string;

newTitle: string;
newAuthor: string;
newYear: number;

constructor() { 

}

ngOnInit() {
}

details(book: Book) {
  alert(`details for ${book.title}`);
}
addBook() {
  let book= new Book(this.newTitle, this.newAuthor, this.newYear)
  this.books.push(book);
}

}
