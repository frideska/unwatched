import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

@Injectable()
export class WatchlistService {
  private URL = '/watchlist'

  constructor(private http: Http) {}

  public async addMovieToWatchlist(id: string) {
    try {
      const headers = new Headers()
      const response = await this.http.post(this.URL,
        JSON.stringify({id: id}), {headers: headers} ).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
}
