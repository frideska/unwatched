import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class UserService {
  history: any

  constructor(private http: Http) { }

  /**
   * Add to history.
   */
  public async addToHistory(element: CardElement){

  }

  /**
   * Get the history.
   */
  public async getHistory(){

  }
  
}
