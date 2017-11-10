import {Component, Input, OnInit} from '@angular/core'
import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardMovieID: string
  @Input() cardTitle: string
  @Input() cardDesc: string
  @Input() cardPreviewSrc: string
  @Input() cardPosterSrc: string
  @Input() cardMovieRating: string
  @Input() cardMovieYear: string
  @Input() cardInWatchlist: boolean
  @Input() cardMovieGenre: string
  @Input() inWatchlist: boolean
  @Input() inLibrary: boolean

  constructor(private watchlistService: WatchlistService, private libraryService: LibraryService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    if (this.cardInWatchlist) {
      this.watchlistService.removeMovieFromWatchlist(this.cardMovieID)
    } else  {
      this.watchlistService.addMovieToWatchlist(this.cardMovieID)
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


