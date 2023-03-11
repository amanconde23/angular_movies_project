import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ResponseApi } from '../_models/responseApi';
import { Movie } from '../_models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = environment.API_URL;
  private API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getMovies(searchString: string): Observable<Movie[]> {
    return this.http
      .get<ResponseApi>(`${this.API_URL}&s=${searchString}${this.API_KEY}`)
      .pipe(
        map((response) => {
          return response.Search;
        })
      );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.API_URL}i=${id}${this.API_KEY}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
