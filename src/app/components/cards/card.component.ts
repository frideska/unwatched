import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { HistoryService } from 'services/history.service'
import { SearchService } from 'services/search.service'
import { CardElement } from 'classes/CardElement'
import { UserService } from 'services/user.service'
import { DetailsService } from 'services/details.service'


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
    private userService: UserService,
    private detailsService: DetailsService
  ) {}

  ngOnInit() {
  }

  private async reload() {
    this.element =  await this.detailsService.getDetails(this.element)
  }

  /**
   * Adds the element to the watchlist if its not allready there.
   * If its in the list it removes the element from the watchlist.
   */
  async addToWatchlist () {
    if (this.element.watchlist) {
      await this.watchlistService.removeFromWatchlist(this.element)
    } else  {
      await this.watchlistService.addToWatchlist(this.element)
    }
    await this.reload()
  }

  /**
   * Adds the element to the library if its not allready there.
   * If its in the list it removes the element from the library.
   */
  async addToLibrary() {
    if (this.element.library) {
      await this.libraryService.removeFromLibrary(this.element)
    } else  {
      await this.libraryService.addToLibrary(this.element)
    }
    await this.reload()
  }

  /**
   * Adds the element to the history, when clicking on a card.
   */
  addToHistory() {
    this.historyService.addToHistory(this.element)
  }
}
