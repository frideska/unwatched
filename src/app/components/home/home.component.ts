import { Component, OnInit } from '@angular/core'

import { DiscoverService } from 'services/discover.service'
import { CardElement } from 'classes/CardElement'

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

  constructor(private discover: DiscoverService) {
  }

  async ngOnInit() {
    this.movies = await this.discover.getDiscoveryMovie()
    this.tv = await this.discover.getDiscoveryTV()
    console.log(this.movies)
    console.log(this.tv)
    this.value1 = 0
    this.value2 = 2
    this.showMovies(this.value1, this.value2)
    this.showTV(this.value1, this.value2)
  }

  showMovies(value1, value2) {
    this.moviesSliced = this.movies.slice(value1, value2)
  }

  showTV(value1, value2){
    this.tvSliced = this.tv.slice(value1, value2)
  }

  nextObject(condition) {
    this.value1 < this.movies.length - 3 ? this.value1 += 2 : this.value1 = 0
    this.value2 < this.movies.length - 1 ? this.value2 += 2 : this.value2 = 2
    if(condition='movie'){
      this.showMovies(this.value1, this.value2)
    }else if(condition='movie'){
      this.showTV(this.value1, this.value2)
    }
  }

  prevObject(condition) {
    this.value1 > 0 ? this.value1 -= 2 : this.value1 = this.movies.length - 4
    this.value2 > 2 ? this.value2 -= 2 : this.value2 = this.movies.length - 2
    if(condition='tv'){
      this.showMovies(this.value1, this.value2)
    }else if(condition='tv'){
      this.showTV(this.value1, this.value2)
    }
  }

}
