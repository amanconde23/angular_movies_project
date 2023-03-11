import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  getMovies(searchString: string) {
    this.movieService.getMovies(searchString).subscribe((movie: Movie[]) => {
      console.log(movie);
      this.movies = movie;
    });
  }
}
