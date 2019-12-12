import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { BookAddReviewComponent } from './book-add-review/book-add-review.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [BookListComponent,  BookDetailComponent, BookReviewComponent, BookAddReviewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  providers:[BookService]
})
export class BookModule { }
