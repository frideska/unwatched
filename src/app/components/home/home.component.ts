import { Component, OnInit } from '@angular/core'

import { DiscoverService } from 'services/discover.service'
import { DiscoverMovie } from 'classes/DicoverMovie'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public movies: DiscoverMovie[]

  constructor(private discover: DiscoverService) {
  }

  async ngOnInit() {
    this.movies = await this.discover.getDiscovery()
    console.log(this.movies)
  }
}
