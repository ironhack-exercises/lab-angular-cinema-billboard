import { Injectable } from '@angular/core';
import movies from '../sample-movies'
import { Movie } from '../sample-movies'

@Injectable()
export class CinemaService {
  movies:Array<Movie>

  constructor() {
    this.movies = movies
  }

  getMovies():Array<Movie>{
    return this.movies
  }

  getMovie(id:Number):Movie{
    return this.movies.filter(m => m.id==id)[0]
  }
}
