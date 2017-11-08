import { Component, OnInit } from '@angular/core'
import { DiscoverService } from 'services/discover.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  movies: any

  constructor(private discover: DiscoverService) {
  }

  async ngOnInit() {
    this.movies = await this.discover.getDiscovery()
    console.log(this.movies)
  }
}
