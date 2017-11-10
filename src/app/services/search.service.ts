import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { SearchSeries } from 'classes/SearchSeries'
import { SearchMovie } from 'classes/SearchMovie'
import { SearchType } from 'enums/SearchType'

@Injectable()
export class SearchService {
  private searchURL = '/api/tmdb/search'
  private searchType: SearchType
  public query: string
  public results: any

  constructor(private http: Http) {
    this.query = ''
    this.searchType = SearchType.MULTI
  }

  private getSearchType() {
    switch (this.searchType) {
      case 0: return 'multi'
      case 1: return 'movie'
      case 2: return 'tv'
    }
  }

  public async search(): Promise<any> {
    try {
      const url = `${this.searchURL}/${this.getSearchType()}?q=${this.query}`
      const response = await this.http.get(url).toPromise()
      return this.reconfigure(response.json())
    } catch (err) {
      console.error(err)
    }
  }

  public setQuery(query: string) {
    this.query = query
  }

  private reconfigure(json) {
    this.results = json.map((result) => {
      switch (result.media_type) {
        case 'movie': return new SearchMovie(result)
        case 'tv': return new SearchSeries(result)
      }
    })

    console.log(this.results)
  }
}
