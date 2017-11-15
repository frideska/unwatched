import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { CardElement } from 'classes/CardElement'

@Injectable()
export class DiscoverService {
  private discoveryURLmovie = '/api/tmdb/discover/movie'
  private discoveryURLtv = '/api/tmdb/discover/tv'

  constructor(private http: Http) {}

  public async getDiscoveryMovie(): Promise<any> {
    try {
      const response = await this.http.get(this.discoveryURLmovie).toPromise()
      return response.json().map((movie) => new CardElement(movie))
    } catch (err) {
      console.error(err)
    }
  }

  public async getDiscoveryTV(): Promise<any> {
    try {
      const response = await this.http.get(this.discoveryURLtv).toPromise()
      return response.json().map((tv) => new CardElement(tv))
    } catch (err) {
      console.error(err)
    }
  }
}
