import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { CardElement } from '../../classes/CardElement'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() element: CardElement

  constructor(private watchlistService: WatchlistService, private libraryService: LibraryService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    if (this.element.watchlist) {
      this.watchlistService.removeMovieFromWatchlist(this.element.id)
    } else  {
      this.watchlistService.addMovieToWatchlist(this.element.id)
    }
  }
  addToLibrary() {
    if (this.element.library) {
      this.libraryService.removeMovieFromLibrary(this.element.id)
    } else  {
      this.libraryService.addMovieToLibrary(this.element.id)
    }
  }
}
