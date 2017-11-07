import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280/'
const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'


@Injectable()
export class WatchlistService {
  private URL = '/api/watchlist'
  watchlist: any

  constructor(private http: Http) {}

  public async addMovieToWatchlist(id: string) {
    try {
      const response = await this.http.post(this.URL, {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async removeMovieFromWatchlist(id: string) {
    try {
      const response = await this.http.get(this.URL + '/remove/' + id ).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async getWatchlist() {
    try {
      const response = await this.http.get(this.URL).toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json())
      }
    }catch (err) {
      console.error(err)
    }
  }

  private reconfigure(json) {
    this.watchlist =  json.map((result) => {
      const overview = result.overview || 'No description'

      return {
        movieID: result.id,
        mediaType: 'Movie',
        video: result.video || false,
        title: result.title || result.name,
        content: (overview.length <= 30) ? overview : overview.substring(0, 150).concat(' (...)'),
        imgSrc: result.poster_path ? POSTER_PATH.concat(result.poster_path) : MISSING_PATH,
        rating: result.vote_average,
        genre: 'none',
        inWatchlist: true,
        year: result.release_date ? '(' + result.release_date.substring(0, 4) + ')' : result.release_date
      }
    })
  }
}
