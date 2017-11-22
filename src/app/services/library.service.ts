import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { CardElement } from 'classes/CardElement'
import { isNullOrUndefined } from 'util'

@Injectable()
export class LibraryService {
  public listView = false
  private URL = '/api/library'
  libraryMovie: CardElement[]
  libraryTv: CardElement[]

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

      const response = await this.http.delete(this.URL + '/' + type, { body: {id: id} }).toPromise()
      if (element.type === 'movie') {
        const index = this.libraryMovie.indexOf(element)
        if (index >= 0) {
          this.libraryMovie.splice(index, 1)
        }
      } else {
        const index = this.libraryTv.indexOf(element)
        if (index >= 0) {
          this.libraryTv.splice(index, 1)
        }
      }

    } catch (err) {
      console.error(err)
    }
  }

  public async getLibrary(order = '', orderBy = '', search = '') {

    try {
      const response = await this.http.get(this.URL + '/movie', { params: {
        order: order,
        orderBy: orderBy,
        search: search
      }}).toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'movie')
      }
      console.log(`[Service|Library](getLibrary) Got library, movies: ${this.libraryMovie.length}`)
    } catch (err) {
      console.error(err)
    }

    try {
      const response = await this.http.get(this.URL + '/tv' , { params: {
        order: order,
        orderBy: orderBy,
        search: search
      }}).toPromise()
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
        this.libraryMovie = json.docs.map((result) => {
          result.media_type = 'movie'
          result.library = true
          return new CardElement(result)
        })
        break
      case('tv'):
        this.libraryTv = json.docs.map((result) => {
          result.media_type = 'tv'
          result.library = true
          return new CardElement(result)
        })
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
