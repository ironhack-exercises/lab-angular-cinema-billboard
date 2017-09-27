import { Injectable } from '@angular/core';
import movies from '../sample-movies'

interface Movie {
  id: number
  title: string
  poster: string
  synopsis: string
  genres: Array<string>
  year: number
  director: string
  actors: Array<string>
  hours: Array<string>
  room: number
}

@Injectable()
export class CinemaService {
  movies:Array<Movie>

  constructor() {
    this.movies = movies
  }

  getMovies():Array<Movie>{
    return this.movies
  }

  getMovie(id:number):Movie{
    return this.movies.filter(m => m.id==id)[0]
  }

}
