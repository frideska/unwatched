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
  public value1: number
  public value2: number

  constructor(private discover: DiscoverService) {
  }

  async ngOnInit() {
    this.movies = await this.discover.getDiscovery()
    console.log(this.movies)
  }

  nextObject(value) {
    console.log("next")
  }

  prevObject() {
    console.log("prev")
  }

}
