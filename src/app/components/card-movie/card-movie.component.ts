import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie: any;
  constructor() {}

  ngOnInit(): void {}

  getImage() {
    if (this.movie.Poster == 'N/A') {
      return 'https://via.placeholder.com/300x400';
    } else {
      return this.movie.Poster;
    }
  }
}
