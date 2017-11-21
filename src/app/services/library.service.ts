import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import { CardElement } from 'classes/CardElement'
import { isNullOrUndefined } from 'util'


@Injectable()
export class LibraryService {
  public listView = false
  private URL = '/api/library'
  libraryMovie: any
  libraryTv: any

  constructor(private http: Http) { }

  /**
   * Adds the choosen CardElement to the library.
   */
  public async addToLibrary(element: CardElement) {
    const type = element.type
    const id = element.id
    try {
      const response = await this.http.post(this.URL + '/' + type, {id: id}).toPromise()
      console.log(`[Service|Library](addToLibrary) Got response`)
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Removes the choosen CardElement from the library.
   */
  public async removeFromLibrary(element: CardElement) {
    const type = element.type
    const id = element.id
    try {

      const response = await this.http.delete(this.URL + '/' + type + '/remove/' + id).toPromise()
      console.log(`[Service|Library](removeFromLibrary) Got response`)

    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Gets the movies and the tv-series for the library as json objects and then
   * maps them as CardElements.
   */
  public async getLibrary(sortBy= 'standard', search = '') {
    try {
      const response = await this.http.get(this.URL + '/movie', {params: {sort_by: sortBy, search: search}}).toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'movie')
      }
      console.log(`[Service|Library](getLibrary) Got library, movies: ${this.libraryMovie.length}`)
    } catch (err) {
      console.error(err)
    }

    try {
      const response = await this.http.get(this.URL + '/tv' , {params: {sort_by: sortBy, search: search}}).toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'tv')
      }
      console.log(`[Service|Library](getLibrary) Got library, tv: ${this.libraryTv.length}`)
    } catch (err) {
      console.error(err)
    }
  }
  private reconfigure(json, type) {
    switch (type) {
      case('movie'):
        this.libraryMovie = json.docs.map((result) => new CardElement(result))
        break
      case('tv'):
        this.libraryTv = json.docs.map((result) => new CardElement(result))
        break
    }
  }

  /**
   * Checks if the library lists are empty.
   */
  public isEmpty(type): boolean {
    switch (type) {
      case 'movie': {
        if (!this.libraryMovie) { return true }
        if (!this.libraryMovie.length) { return true }
        return false
      }
      case 'tv': {
        if (!this.libraryTv) { return true }
        if (!this.libraryTv.length) { return true }
        return false
      }
      default: {
        return false
      }
    }
  }

  /**
   * Toggles between listView and gridView.
   */
  private toggleListView() {
    this.listView = !this.listView
  }

}
