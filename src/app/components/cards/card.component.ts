import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { HistoryService } from 'services/history.service'
import { CardElement } from '../../classes/CardElement'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() element: CardElement

  constructor(private watchlistService: WatchlistService, private libraryService: LibraryService, private historyService: HistoryService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    if (this.element.watchlist) {
      this.watchlistService.removeFromWatchlist(this.element)
    } else  {
      this.watchlistService.addToWatchlist(this.element)
    }
  }
  addToLibrary() {
    if (this.element.library) {
      this.libraryService.removeFromLibrary(this.element)
    } else  {
      this.libraryService.addToLibrary(this.element)
    }
  }

  addToHistory(){
    this.historyService.addToHistory(this.element)
  }
}
