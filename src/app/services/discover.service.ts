import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { DiscoverMovie } from 'classes/DicoverMovie'

@Injectable()
export class DiscoverService {
  private discoveryURL = '/api/tmdb/discover/movie'

  constructor(private http: Http) {}

  public async getDiscovery(): Promise<any> {
    try {
      const response = await this.http.get(this.discoveryURL).toPromise()
      return response.json().results.map((movie) => new DiscoverMovie(movie))
    } catch (err) {
      console.error(err)
    }
  }
}
