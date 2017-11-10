import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { SearchSeries } from 'classes/SearchSeries'
import { SearchMovie } from 'classes/SearchMovie'

@Injectable()
export class WatchlistService {
  private URL = '/api/watchlist'
  watchlist: any

  constructor(private http: Http) {}

  public async addMovieToWatchlist(id: string) {
    try {
      const response = await this.http.post(this.URL + '/movie/', {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async removeMovieFromWatchlist(id: string) {
    try {
      const response = await this.http.get(this.URL + '/movie/remove/' + id ).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async getWatchlist() {
    try {
      const response = await this.http.get(this.URL + '/movie').toPromise()
      if (response.status === 200) {
        console.log(response)
        this.reconfigure(response.json())
      }
    }catch (err) {
      console.error(err)
    }
  }

  private reconfigure(json) {
    this.watchlist = json.map((result) => {
      switch (result.media_type) {
        case 'movie': return new SearchMovie(result)
        case 'tv': return new SearchSeries(result)
      }
    })

    console.log(this.watchlist)
  }
}
