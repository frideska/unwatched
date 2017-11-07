import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class WatchlistService {
  private URL = '/api/watchlist'

  constructor(private http: Http) {}

  public async addMovieToWatchlist(id: string) {
    try {
      const response = await this.http.post(this.URL, {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async getWatchlist(): Promise<any> {
    try {
      const response = await this.http.get(this.URL).toPromise()
      console.log(response.status)
        return response.json()
    } catch (err) {
      console.error(err)
    }
  }
}
