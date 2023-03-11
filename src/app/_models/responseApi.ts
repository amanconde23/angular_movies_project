import { Movie } from './movie';

export interface ResponseApi {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
