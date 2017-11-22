import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { CardElement } from 'classes/CardElement'


@Injectable()
export class DetailsService {
  private URL = '/api/tmdb/details'


  constructor(
    private http: Http
  ) {}

  async getDetails(card) {
    try {
      const response = await this.http.get(this.URL + '/' + card.type + '/' + card.id).toPromise()
      if (response.status === 200) {
        return new CardElement(response.json())
      }
    } catch (err) {
      console.error(err)
    }
  }
}
