import {Component, Input, OnInit} from '@angular/core'
import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movieID: string
  @Input() cardTitle: string
  @Input() cardDesc: string
  @Input() cardImgSrc: string
  @Input() movieRating: string
  @Input() movieYear: string
  @Input() inWatchlist: boolean
  @Input() inLibrary: boolean
  @Input() movieGenre: string

  constructor(private watchlistService: WatchlistService, private libraryService: LibraryService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    if (this.inWatchlist) {
      this.watchlistService.removeMovieFromWatchlist(this.movieID)
    } else  {
      this.watchlistService.addMovieToWatchlist(this.movieID)
    }
  }
  addToLibrary() {
    if (this.inLibrary) {
      this.libraryService.removeMovieFromLibrary(this.movieID)
    } else  {
      this.libraryService.addMovieToLibrary(this.movieID)
    }
  }
}


