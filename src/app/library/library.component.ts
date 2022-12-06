import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  totalBookCount: number = 0;
  allBooks: Book[] = [];
  branch: string = 'Midtown';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllBooks()
      .subscribe(
        books => {
          this.allBooks = books;
          this.totalBookCount = books.length;
        });
  }

  onIncrease(amount: number) {
    this.totalBookCount += amount;
  }

}
