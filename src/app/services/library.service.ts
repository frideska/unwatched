import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import { CardElement } from 'classes/CardElement'
import {isNullOrUndefined} from "util";


const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280/'
const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'

@Injectable()
export class LibraryService {
  public listView = false
  private URL = '/api/library'
  libraryMovie: any
  libraryTv: any

  constructor(private http: Http) {
  }


  public async addMovieToLibrary(id: string) {
    try {
      const response = await this.http.post(this.URL + '/movie', {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async addTvToLibrary(id: string) {
    try {
      const response = await this.http.post(this.URL + '/tv', {id: id}).toPromise()
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
        this.reconfigure(response.json(), 'movie')
      }
    } catch (err) {
      console.error(err)
    }

    try {
      const response = await this.http.get(this.URL + '/tv/').toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'tv')
      }
    } catch (err) {
      console.error(err)
    }
  }

  private reconfigure(json, type) {
    switch (type) {
      case('movie'):
        this.libraryMovie = json.map((result) => new CardElement(result))
        break
      case('tv'):
        this.libraryTv = json.map((result) => new CardElement(result))
        break
    }

  }

  public isEmpty(type): boolean{
    switch(type){
      case 'movie':{

        if ( isNullOrUndefined(this.libraryMovie) ) return true
        if (this.libraryMovie.length == 0) return true
        else false

      }
      case 'tv':{

        if ( isNullOrUndefined(this.libraryTv) ) return true
        if (this.libraryTv.length == 0) return true
        else false

      }

      default:{
        return false
      }
    }

  }

  private toggleListView(){
    this.listView = !this.listView
  }

}
