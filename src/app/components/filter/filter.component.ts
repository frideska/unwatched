import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input ()
  searchPlaceholder: string
  url: string
  type: string
  nameSort: string
  nameArrow: string
  ratingSort: string
  ratingArrow: string
  dateSort: string
  dateArrow: string
  searchValue: string
  currentSort: string

  constructor(
    private libraryService: LibraryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute

  ) {
    this.type = 'movie'
    }

  ngOnInit() {
    this.url = this.router.url
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
    this.searchValue = ''
    this.setQueryParms()
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
    this.currentSort = this.nameSort
    this.setQueryParms()
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
    this.currentSort = this.ratingSort
    this.setQueryParms()
  }
  /**
   * Toggeels the date button
   */
  toggleDateSort() {
    this.nameArrow = ''
    this.ratingArrow = ''
    if (this.dateSort === 'release_date') {
      this.dateSort = '-release_date'
      this.dateArrow = 'down'
    } else {
      this.dateSort = 'release_date'
      this.dateArrow = 'up'
    }
    this.currentSort = this.dateSort
    this.setQueryParms()
  }
  onSearchChange(event) {
    this.searchValue = event
    this.setQueryParms()
  }
  setQueryParms() {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams)
    queryParams['type'] = this.type
    queryParams['sortBy'] = this.currentSort
    queryParams['search'] = this.searchValue
    this.router.navigate([this.url], { queryParams: queryParams })
  }
}
