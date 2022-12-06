import { Component, OnInit } from '@angular/core';

import { Book } from "src/app/models/book";
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: []
})
export class AddBookComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  saveBook(formValues: any): void {
    let newBook: Book = <Book>formValues;
    newBook.bookID = 0;

    this.dataService.addBook(newBook)
      .subscribe({
        next: console.log,
        error: console.error
    });
  }

}
