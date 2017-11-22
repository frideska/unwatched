import { Component, OnInit } from '@angular/core'

import { DiscoverService } from 'services/discover/discover.service'
import { CardElement } from 'classes/CardElement'
import { UserService } from 'services/user/user.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: CardElement[]
  public moviesSliced: CardElement[]
  public tv: CardElement[]
  public tvSliced: CardElement[]
  public value1: number
  public value2: number
  public movieCard: any
  public tvCard: any

  constructor(
    private userService: UserService,
    private discover: DiscoverService) {
  }

  async ngOnInit() {
    this.movies = await this.discover.getDiscoveryMovie()
    this.tv = await this.discover.getDiscoveryTV()
    this.value1 = 0
    this.value2 = 2
    this.showMovies(this.value1, this.value2)
    this.showTV(this.value1, this.value2)
  }

  /**
   * Showes movies from a sliced list with two elements
   */
  showMovies(value1, value2) {
    this.moviesSliced = this.movies.slice(value1, value2)
  }

  /**
   * Showes tv-series from a sliced list with two elemets.
   */
  showTV(value1, value2) {
    this.tvSliced = this.tv.slice(value1, value2)
  }

  /**
   * Next and previous functions for updating slideshow with new movies and tv-series.
   * The value, for the slices list, is updated when the next and prev buttons are clicked.
   */
  nextMovie() {
    this.value1 < this.movies.length - 3 ? this.value1 += 2 : this.value1 = 0
    this.value2 < this.movies.length - 1 ? this.value2 += 2 : this.value2 = 2
    this.showMovies(this.value1, this.value2)
  }

  prevMovie() {
    this.value1 > 0 ? this.value1 -= 2 : this.value1 = this.movies.length - 4
    this.value2 > 2 ? this.value2 -= 2 : this.value2 = this.movies.length - 2
    this.showMovies(this.value1, this.value2)
  }

  nextTv() {
    this.value1 < this.movies.length - 3 ? this.value1 += 2 : this.value1 = 0
    this.value2 < this.movies.length - 1 ? this.value2 += 2 : this.value2 = 2
    this.showTV(this.value1, this.value2)
  }

  prevTv() {
    this.value1 > 0 ? this.value1 -= 2 : this.value1 = this.movies.length - 4
    this.value2 > 2 ? this.value2 -= 2 : this.value2 = this.movies.length - 2
    this.showTV(this.value1, this.value2)
  }

}
