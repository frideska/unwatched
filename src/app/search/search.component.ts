import { Component, OnInit } from '@angular/core'
import { SearchService } from './search.service'
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor( private searchService: SearchService) { }

  ngOnInit() {}

  onChange(event) {
    this.searchService.setQuery(event)
    this.searchService.search()
  }
}
