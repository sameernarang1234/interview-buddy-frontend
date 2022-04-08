import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-column',
  templateUrl: './rating-column.component.html',
  styleUrls: ['./rating-column.component.scss']
})
export class RatingColumnComponent implements OnInit {

  @Output() rating: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  returnRating(rating: string) {
    this.rating.emit(rating);
  }

}
