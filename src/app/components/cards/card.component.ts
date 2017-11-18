import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { SearchService } from 'services/search.service'
import { CardElement } from 'classes/CardElement'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() element: CardElement

  constructor(
    private watchlistService: WatchlistService,
    private libraryService: LibraryService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  private async reload() {
    console.log(`[Component|Card](reload) Reload started`)
    await this.watchlistService.getWatchlist()
    await this.libraryService.getLibrary()
    // await this.searchService.search()
    console.log(`[Component|Card](reload) Reload ended`)
  }

  async addToWatchlist () {
    console.log(`[Component|Card](addToWatchlist) Clicked add to watchlist`)
    if (this.element.watchlist) {
      await this.watchlistService.removeFromWatchlist(this.element)
    } else  {
      await this.watchlistService.addToWatchlist(this.element)
    }
    await this.reload()
    console.log(`[Component|Card](addToWatchlist) Add to library completed`)
  }
  async addToLibrary() {
    console.log(`[Component|Card](addToLibrary) Clicked add to library`)
    if (this.element.library) {
      await this.libraryService.removeFromLibrary(this.element)
    } else  {
      await this.libraryService.addToLibrary(this.element)
    }
    await this.reload()
    console.log(`[Component|Card](addToLibrary) Add to library completed`)
  }
}
