import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280/'
const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'

@Injectable()
export class LibraryService {
  private URL = '/api/library'
  library: any

  constructor(private http: Http) {}

  public async addMovieToLibrary(id: string) {
    try {
      const response = await this.http.post(this.URL + '/movie', {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async removeMovieFromLibrary(id: string) {
    try {
      const response = await this.http.get(this.URL + '/movie/remove/' + id ).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async getLibrary() {
    try {
      const response = await this.http.get(this.URL + '/movie/').toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json())
      }
    }catch (err) {
      console.error(err)
    }
  }

  private reconfigure(json) {
    this.library =  json.map((result) => {
      const overview = result.overview || 'No description'

      return {
        movieID: result.id,
        mediaType: 'Tv-show',
        video: result.video || false,
        title: result.title || result.name,
        content: (overview.length <= 30) ? overview : overview.substring(0, 150).concat(' (...)'),
        imgSrc: result.poster_path ? POSTER_PATH.concat(result.poster_path) : MISSING_PATH,
        rating: result.vote_average,
        genre: 'none',
        inWatchlist: false,
        inLibrary: true,
        year: result.release_date ? '(' + result.release_date.substring(0, 4) + ')' : result.release_date
      }
    })
  }
}
