import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import { CardElement } from 'classes/CardElement'


const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280/'
const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'

@Injectable()
export class LibraryService {
  private URL = '/api/library'
  library: any

  constructor(private http: Http) {
  }

  public async addMovieToLibrary(id: string) {
    try {
      const response = await this.http.post(this.URL + '/movie', {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }

  public async removeMovieFromLibrary(id: string) {
    try {
      const response = await this.http.get(this.URL + '/movie/remove/' + id).toPromise()
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
    } catch (err) {
      console.error(err)
    }
  }

  private reconfigure(json) {
    this.library = json.map((result) => new CardElement(result))
  }
}
