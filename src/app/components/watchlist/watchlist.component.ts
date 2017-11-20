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
  search: string
  private sub: any
  public getListElements: Function

  constructor(public watchlistService: WatchlistService, private route: ActivatedRoute, private router: Router) {}


  async ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.type = params['type'] || 'movie'
      this.sortBy = params['sort_by'] || 'standard'
      this.search = params['search'] || ''
      this.watchlistService.getWatchlist(this.sortBy, this.search)
    })
    this.watchlistService.getWatchlist(this.sortBy, this.search)
    this.getListElements = this.getList.bind(this)
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  public getList() {
    if (this.type === 'movie') {
      return this.watchlistService.watchlistMovie
    } else if (this.type === 'tv') {
      return this.watchlistService.watchlistTv
    }
  }
}
