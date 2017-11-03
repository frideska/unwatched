import { Component, OnInit } from '@angular/core'
import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: any
  titles: string[]
  keyword: string
  constructor( private searchService: SearchService) { }

  ngOnInit() {

  }
  async onChange() {
    this.keyword = 'The dark night'
    this.result = await this.searchService.getSearch(this.keyword)
    this.titles = this.result.results.map((result) => result.title)
  }
}
