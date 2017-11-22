import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { CardElement } from 'classes/CardElement'
import { HistoryElement } from 'classes/HistoryElement'

@Injectable()
export class HistoryService {
  private URL = '/api/history'
  history: HistoryElement[]

  constructor(private http: Http) { }

  /**
   * Add to history.
   */
  public async addToHistory(history: CardElement): Promise<void> {
    await this.http.post(this.URL, { history }).toPromise()
  }

  /**
   * Get the history.
   */
  public async getHistory(): Promise<void> {
    const response = await this.http.get(this.URL).toPromise()
    const history = response.json()
    this.history = history.map((h) => new HistoryElement(h))
  }

  /*public async deleteFromHistory(history: string): Promise<void> {
    await this.http.delete(this.URL, { history }).toPromise()
  }*/

  /**
   * Checks if the history list is empty.
   */
  public isEmpty(): boolean {
    if (!this.history) { return true }
    if (!this.history.length) { return true }
    return false
  }
}
