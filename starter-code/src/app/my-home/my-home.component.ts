import { Component, OnInit } from '@angular/core'
import { CinemaService } from '../services/cinema.service'
import { Movie } from '../sample-movies'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies:Array<Movie>
  constructor(private cinema: CinemaService) {
    this.movies = cinema.getMovies()

  }

  ngOnInit() {
    console.log(this.movies)
  }

}
