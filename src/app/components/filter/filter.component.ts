import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  url: string
  type: string
  nameSort: string
  nameArrow: string
  ratingSort: string
  ratingArrow: string
  dateSort: string
  dateArrow: string

  constructor(
    private libraryService: LibraryService,
    private router: Router
  ) {
    this.type = 'movie'
    }

  ngOnInit() {
    this.url = this.router.url
    console.log(this.url)
    this.dateSort = 'release_date'
    this.ratingSort = 'vote_average'
    this.nameSort = 'title'
  }

  /**
   * Sets the stype, move or tv.
   * @param type
   */
  setType(type) {
    this.type = type
    this.nameSort = 'title'
    this.nameArrow = ''
    this.ratingSort = 'vote_average'
    this.ratingArrow = ''
    this.dateSort = 'release_date'
    this.dateArrow = ''
  }

  /**
   * Toggeels the name button
   */
  toggleNameSort() {
    this.dateArrow = ''
    this.ratingArrow = ''
    if (this.nameSort === 'title') {
      this.nameArrow = 'down'
      this.nameSort = '-title'
    } else {
      this.nameSort = 'title'
      this.nameArrow = 'up'
    }
  }

  /**
   * Toggeels the rating button
   */
  toggleRatingSort() {
    this.nameArrow = ''
    this.dateArrow = ''
    if (this.ratingSort === 'vote_average') {
      this.ratingSort = '-vote_average'
      this.ratingArrow = 'down'
    } else {
      this.ratingSort = 'vote_average'
      this.ratingArrow = 'up'
    }
  }
  /**
   * Toggeels the date button
   */
  toggleDateSort() {
    this.dateArrow = ''
    this.ratingArrow = ''
    if (this.dateSort === 'release_date') {
      this.dateSort = '-release_date'
      this.dateArrow = 'down'
    } else {
      this.dateSort = 'release_date'
      this.dateArrow = 'up'
    }
  }
}
