import {Component, Input, OnInit} from '@angular/core'
import { WatchlistService} from 'services/watchlist.service'

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

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    console.log(this.watchlistService.watchlist)
    console.log(this.cardInWatchlist)
    if (this.cardInWatchlist) {
      this.watchlistService.removeMovieFromWatchlist(this.cardMovieID)
    } else  {
      this.watchlistService.addMovieToWatchlist(this.cardMovieID)
    }
  }
}


