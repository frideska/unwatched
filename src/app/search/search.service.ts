import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class SearchService {
  private searchURL = '/api/tmdb/search/'

  constructor(private http: Http) {}

  public async getSearch(keyword: String): Promise<any> {
    try {
      const response = await this.http.get(this.searchURL + keyword).toPromise()
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }
}
