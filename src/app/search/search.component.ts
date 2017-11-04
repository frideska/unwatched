import { Component, OnInit } from '@angular/core'
import { SearchService } from './search.service'
import { NgModel } from '@angular/forms'
import {isNullOrUndefined, isUndefined} from 'util'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  JSONresult: any
  searchResult: string
  keyword: string
  constructor( private searchService: SearchService) { }

  ngOnInit() {

  }


  async onChange(event) {
    this.keyword = event
    let missingPosterSrc = "http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png"
    let posterPath = "https://image.tmdb.org/t/p/w1280/"
    if (this.keyword) {
      this.JSONresult = await this.searchService.getSearch(this.keyword)

      //JSON for searchResult
      this.searchResult = this.JSONresult.results.map((result) => (
        {
          movieID: result.id,
          mediaType: result.media_type,
          video: isNullOrUndefined(result.video) ? false : result.video,
          title: isNullOrUndefined(result.title) ? result.name : result.title,
          content: isNullOrUndefined(result.overview) ? "No description" : ((result.overview.length <= 30) ? result.overview : result.overview.substring(0, 150).concat(" (...)")),
          imgSrc: isNullOrUndefined(result.poster_path) ? (missingPosterSrc) : (posterPath).concat(result.poster_path),
          rating: result.vote_average,
          genre: result.genre_ids,
          year: isNullOrUndefined(result.release_date) ? result.release_date : "("+result.release_date.substring(0, 4)+")"
        }))

      console.log(this.searchResult)
    }
  }
}
