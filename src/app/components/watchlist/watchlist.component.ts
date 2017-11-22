import { Component, OnInit, OnDestroy } from '@angular/core'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit, OnDestroy {
  type: string
  order: string
  orderBy: string
  search: string
  private sub: any
  public getListElements: Function

  constructor(public watchlistService: WatchlistService, private route: ActivatedRoute, private router: Router) {}


  async ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.type = params['type'] || 'movie'
      this.orderBy = params['orderBy'] || 'title'
      this.search = params['search'] || ''
      this.watchlistService.getWatchlist(this.order, this.orderBy, this.search, true)
    })
    this.watchlistService.getWatchlist(this.order, this.orderBy, this.search, true)
    this.getListElements = this.getList.bind(this)
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  /**
   * Gets the lists with movie and tv-series from WatchlistService.
   */
  public getList() {
    if (this.type === 'movie') {
      return this.watchlistService.watchlistMovie
    } else if (this.type === 'tv') {
      return this.watchlistService.watchlistTv
    }
  }

  appendWatchlist() {
    this.watchlistService.getNext(this.order, this.orderBy, this.search)
  }
}
