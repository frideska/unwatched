import {Component, Input, OnInit} from '@angular/core'
import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'

import { SearchElement } from 'classes/SearchElement'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() element: SearchElement

  constructor(private watchlistService: WatchlistService, private libraryService: LibraryService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    console.log(this.watchlistService.watchlist)
    console.log(this.element.watchlist)
    if (this.element.watchlist) {
      this.watchlistService.removeMovieFromWatchlist(this.element.id)
    } else  {
      this.watchlistService.addMovieToWatchlist(this.element.id)
    }
  }
  addToLibrary() {
    if (this.inLibrary) {
      this.libraryService.removeMovieFromLibrary(this.cardMovieID)
    } else  {
      this.libraryService.addMovieToLibrary(this.cardMovieID)
    }
  }
}


