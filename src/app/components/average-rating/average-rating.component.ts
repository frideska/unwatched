import { Component, OnInit, Input } from '@angular/core'

import { LibraryService } from '../../services/library/library.service'

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {

  @Input() rating: string
  @Input() interval: string

  constructor(public libraryService: LibraryService) { }

  /**
   * Initializes the component. Calculates average from library movies and series.
   * Sets this.rating to calculated rating, and this.interval to the classified interval
   * the rating belongs to. Interval is used in the CSS to show correct colors.
   * @returns {Promise<void>}
   */
  async ngOnInit() {
    await this.libraryService.getLibrary()
    const libraryMov = this.libraryService.libraryMovie.map(movie => movie.rating)
    const libraryTV = this.libraryService.libraryTv.map(show => show.rating)
    const library = libraryMov.concat(libraryTV)

    // If library is empty, give default string back.
    // Else calculate average.
    if (library.length === 0) {
      this.rating = 'N/A'
      this.interval = 'empty'
    } else {
      let zeros = 0
      let sum = 0
      for (let i = 0; i < library.length; i++) {
        if (library[i] === 0) { zeros++ }
        sum += library[i]
      }
      const r = (sum / (library.length - zeros)).toFixed(2)
      this.rating = r.toString()
      this.interval = this.roundToInterval(r)
    }
  }

  /**
   * Locates number in correct interval [0, 10].
   * @param number
   * @returns {string}
   */
  private roundToInterval(number) {
    if ( number <= 5.0) {
      return 'bad'
    } else if ( number <= 7.0 ) {
      return 'ok'
    } else {
      return 'good'
    }
  }

}
