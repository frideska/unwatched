import { Component, OnInit } from '@angular/core'
import { WatchlistService } from 'services/watchlist.service'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(public watchlistService: WatchlistService) {}

  async ngOnInit() {
    this.watchlistService.getWatchlist()
  }


}
