import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { CardElement } from 'classes/CardElement'


@Injectable()
export class WatchlistService {
  private URL = '/api/watchlist'
  public listView = false
  watchlistMovie: CardElement[]
  watchlistTv: CardElement[]
  moviePageID: number
  currentMoviePageID: number
  movieMaxPageID: number

  constructor(private http: Http) {
    this.moviePageID = 1
    this.watchlistMovie = []
    this.currentMoviePageID = 1
  }

  public async addToWatchlist(element: CardElement) {
    const type = element.type
    const id = element.id
    try {
      const response = await this.http.post(this.URL + '/' + type, {id: id}).toPromise()
      console.log(`[Service|WatchList](addToWatchList) Got response`)
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Removes the choosen CardElement from the watchlist.
   */
  public async removeFromWatchlist(element: CardElement) {
    const type = element.type
    const id = element.id
    try {
      const response = await this.http.delete(this.URL + '/' + type, { body: {id: id} }).toPromise()
      if (element.type === 'movie') {
        const index = this.watchlistMovie.indexOf(element)
        if (index >= 0) {
          this.watchlistMovie.splice(index, 1)
        }
      } else {
        const index = this.watchlistTv.indexOf(element)
        if (index >= 0) {
          this.watchlistTv.splice(index, 1)
        }
      }
      console.log(`[Service|WatchList](removeFromWatchList) Got response`)

    } catch (err) {
      console.error(err)
    }
  }
  public async getWatchlist(order = '', orderBy = '', search = '', reset= false) {
    if (reset) {
      this.currentMoviePageID = 1
    }
    await this.getWatchlistServerCall(order, orderBy, search)
    while (this.moviePageID < this.currentMoviePageID) {
      this.moviePageID++
      await this.getWatchlistServerCall(order, orderBy, search, this.moviePageID , true )
    }
  }
  private async getWatchlistServerCall(order = '', orderBy = '', search = '', page = 1, append = false ) {
    try {
      const response = await this.http.get(this.URL + '/movie', { params: {
        page: page,
        order: order,
        orderBy: orderBy,
        search: search
      }}).toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'movie', append)
      }
    } catch (err) {
      console.error(err)
    }
    try {
      const response = await this.http.get(this.URL + '/tv', { params: {
        order: order,
        orderBy: orderBy,
        search: search
      }}).toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'tv')
      }
    } catch (err) {
      console.error(err)
    }
  }

  private reconfigure(json, type, append = false) {
    switch (type) {
      case('movie'):
        this.moviePageID = json.page
        console.log(json.page , 'json')
        this.movieMaxPageID = json.size
        const watchlistMovie = json.docs.map((result) => {
          result.media_type = 'movie'
          result.watchlist = true
          return new CardElement(result)
        })
        if (append) {
          this.watchlistMovie = this.watchlistMovie.concat(watchlistMovie)
          console.log(this.watchlistMovie)
          } else {
          this.watchlistMovie = watchlistMovie
        }
        break
      case('tv'):
        this.watchlistTv = json.docs.map((result) => {
          result.media_type = 'tv'
          result.watchlist = true
          return new CardElement(result)
        })
        break
    }
  }
  public getNext(order = '', orderBy = '', search = '') {
    this.moviePageID++
    this.currentMoviePageID++
    this.getWatchlistServerCall(order, orderBy, search, this.moviePageID , true )
  }
  public getPrev(order = '', orderBy = '', search = '') {
    this.moviePageID--
    this.currentMoviePageID--
    this.getWatchlistServerCall(order, orderBy, search, this.moviePageID , true )
  }

  public isEmpty(type): boolean {
    switch (type) {
      case 'movie': {
        if (!this.watchlistMovie) { return true }
        if (!this.watchlistMovie.length) { return true }
        return false
      }
      case 'tv': {
        if (!this.watchlistTv) { return true }
        if (!this.watchlistTv.length) { return true }
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
