import { Component, OnInit } from '@angular/core'
import { WatchlistService } from './watchlist.service'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  movies: any

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.watchlistService.getWatchlist()
  }


}
