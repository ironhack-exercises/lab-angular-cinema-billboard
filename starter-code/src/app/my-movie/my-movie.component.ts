import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CinemaService } from '../services/cinema.service'
import { Movie } from '../sample-movies'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId: Number
  movie:Movie
  constructor(private route: ActivatedRoute, private cinema: CinemaService) {
    this.movie = cinema.getMovie(this.movieId)
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']))
  }
}
