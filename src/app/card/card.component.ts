import {Component, Input, OnInit} from '@angular/core'
import { WatchlistService} from "../watchlist/watchlist.service";

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
  @Input() movieGenre: string


  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
  }

  addToWatchlist() {
    this.watchlistService.addMovieToWatchlist(this.movieID)
  }

}
