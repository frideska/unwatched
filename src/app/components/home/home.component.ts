import { Component, OnInit } from '@angular/core'

import { DiscoverService } from 'services/discover.service'
import { DiscoverMovie } from 'classes/DicoverMovie'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: DiscoverMovie[]
  public moviesSliced: DiscoverMovie[]
  public value1: number
  public value2: number
  public movieCard: any
  public tvCard: any

  constructor(private discover: DiscoverService) {
    //this.movieCard = document.getElementById("movieCard")
    //this.tvCard = document.getElementById("tvCard")
  }

  async ngOnInit() {
    this.movies = await this.discover.getDiscovery()
    this.value1 = 0
    this.value2 = 2
    this.showObjects(this.value1, this.value2)
  }

  showObjects(value1, value2) {
    this.moviesSliced = this.movies.slice(value1, value2)
  }

  nextObject() {
    this.value1 < this.movies.length - 3 ? this.value1 += 2 : this.value1 = 0
    this.value2 < this.movies.length - 1 ? this.value2 += 2 : this.value2 = 2
    this.showObjects(this.value1, this.value2)
  }

  prevObject() {
    this.value1 > 0 ? this.value1 -= 2 : this.value1 = this.movies.length - 3
    this.value2 > 2 ? this.value2 -= 2 : this.value2 = this.movies.length - 1
    this.showObjects(this.value1, this.value2)
  }

}
