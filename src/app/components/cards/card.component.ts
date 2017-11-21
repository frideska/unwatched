import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { HistoryService } from 'services/history.service'
import { SearchService } from 'services/search.service'
import { CardElement } from 'classes/CardElement'
import { UserService } from '../../services/user.service'

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
    private historyService: HistoryService,
    private searchService: SearchService,
    private userService: UserService
  ) {}

  ngOnInit() {

  }

  private async reload() {
    await this.watchlistService.getWatchlist()
    await this.libraryService.getLibrary()
    // await this.searchService.search()
  }

  async addToWatchlist () {
    if (this.element.watchlist) {
      await this.watchlistService.removeFromWatchlist(this.element)
    } else  {
      await this.watchlistService.addToWatchlist(this.element)
    }
    await this.reload()
  }
  async addToLibrary() {
    if (this.element.library) {
      await this.libraryService.removeFromLibrary(this.element)
    } else  {
      await this.libraryService.addToLibrary(this.element)
    }
    await this.reload()
  }

  addToHistory() {
    this.historyService.addToHistory(this.element.title)
  }
}
