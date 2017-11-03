import { Component, OnInit } from '@angular/core'
import { DiscoverService } from './discover.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
