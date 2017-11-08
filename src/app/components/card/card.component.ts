import {Component, Input, OnInit} from '@angular/core'
import { WatchlistService} from 'services/watchlist.service'

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
  @Input() movieGenre: string

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    console.log(this.watchlistService.watchlist)
    console.log(this.inWatchlist)
    if (this.inWatchlist) {
      this.watchlistService.removeMovieFromWatchlist(this.movieID)
    } else  {
      this.watchlistService.addMovieToWatchlist(this.movieID)
    }
  }
}


