import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class HistoryService {
  private URL = '/api/history'
  history: any

  constructor(private http: Http) { }

  /**
   * Add to history.
   */
  public async addToHistory(history: string): Promise<void> {
    await this.http.post(this.URL, { history }).toPromise()
  }

  /**
   * Get the history.
   */
  public async getHistory(): Promise<void> {
    let history = await this.http.get(this.URL).toPromise()
    history = history.json()
    console.log(`[Service|History](getHistory)`)
    console.log(history)
    this.history = history
  }

  /*public async deleteFromHistory(history: string): Promise<void> {
    await this.http.delete(this.URL, { history }).toPromise()
  }*/
}
