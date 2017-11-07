import { Http } from '@angular/http'

export abstract class PaginatedHTTPService {
  abstract BASE_URL: string
  abstract http: Http
  private page = 0
  private hasNext: boolean
  private counter = 0

  public async get(): Promise<any> {
    try {
      const c = this.counter++
      const URL = this.createURL()
      const response = await this.http.get(URL).toPromise()
      const json = response.json()
      this.hasNext = json.next ? true : false
      if (c === this.counter) {
        return json
      }
      return
    } catch (err) {
      console.error(err)
    }
  }

  private createURL(): string {
    return `${this.BASE_URL}?page=${this.page}`
  }

  private increment(): void {
    this.hasNext ? this.page++ : this.reset()
  }

  private decrement(): void {
    this.page > 0 ? this.page-- : this.reset()
  }

  public reset(): void {
    this.page = 0
  }

  public async next(): Promise<any> {
    this.increment()
    return await this.get()
  }

  public async previous(): Promise<any> {
    this.decrement()
    return await this.get()
  }
}
