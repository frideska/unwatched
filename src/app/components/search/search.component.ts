import { Component, OnInit } from '@angular/core'
import { NgModel } from '@angular/forms'

import { SearchService } from 'services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  constructor( private searchService: SearchService) { }

  ngOnInit() {}

  onChange(event) {
    this.searchService.setQuery(event)
    this.searchService.search()
  }
}
