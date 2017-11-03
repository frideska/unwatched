import { Component, OnInit } from '@angular/core'
import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: any
  keyword: String
  constructor( private searchService: SearchService) { }

  ngOnInit() {

  }
  async onChange() {
    this.result = await this.searchService.getSearch(this.keyword)
  }

}
