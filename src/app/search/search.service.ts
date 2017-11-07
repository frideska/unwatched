import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280/'

@Injectable()
export class SearchService {
  private searchURL = '/api/tmdb/search/'
  public query: string
  public results: any

  constructor(private http: Http) {
    this.query = ''
  }

  public async search(): Promise<any> {
    try {
      const response = await this.http.get(this.searchURL + this.query).toPromise()
      return this.reconfigure(response.json())
    } catch (err) {
      console.error(err)
    }
  }

  public setQuery(query: string) {
    this.query = query
  }

  private reconfigure(json) {
      this.results = json.results.map((result) => {
        const overview = result.overview || 'No description'

        return {
          movieID: result.id,
          mediaType: result.media_type,
          video: result.video || false,
          title: result.title || result.name,
          content: (overview.length <= 30) ? overview : overview.substring(0, 150).concat(' (...)'),
          imgSrc: result.poster_path ? POSTER_PATH.concat(result.poster_path) : MISSING_PATH,
          rating: result.vote_average,
          genre: result.genre_ids,
          year: result.release_date ? '(' + result.release_date.substring(0, 4) + ')' : result.release_date
        }})

      console.log(this.results)
  }
}
