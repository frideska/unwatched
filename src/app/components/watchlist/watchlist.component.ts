import { Component, OnInit, OnDestroy } from '@angular/core'
import { WatchlistService } from 'services/watchlist.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit, OnDestroy {
  type: string
  sortBy: string
  private sub: any

  constructor(public watchlistService: WatchlistService, private route: ActivatedRoute, private router: Router) {}


  async ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.type = params['type'] || 'movie'
      this.sortBy = params['sort_by'] || 'standard'
      this.watchlistService.getWatchlist(this.sortBy)
    })
    this.watchlistService.getWatchlist(this.sortBy)
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
