import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class WatchlistService {
  private URL = '/watchlist'

  constructor(private http: Http) {}

  public async addMovieToWatchlist(id: string) {
    try {
      const response = await this.http.post(this.URL, {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
}
