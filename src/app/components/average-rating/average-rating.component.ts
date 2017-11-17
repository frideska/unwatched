import { Component, OnInit, Input } from '@angular/core'

import { LibraryService } from '../../services/library.service'

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {

  @Input() rating: string
  @Input() interval: string

  constructor(public libraryService: LibraryService) { }

  async ngOnInit() {
    await this.libraryService.getLibrary()
    const libraryMov = this.libraryService.libraryMovie.map(movie => movie.rating)
    const libraryTV = this.libraryService.libraryTv.map(show => show.rating)
    const library = libraryMov.concat(libraryTV)

    const sum = library.reduce(function(a, b) { return a + b })
    const r = (sum / library.length).toFixed(2)
    this.rating = r.toString()
    this.interval = this.roundToInterval(r)
    console.log('inter', this.interval)
  }

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
