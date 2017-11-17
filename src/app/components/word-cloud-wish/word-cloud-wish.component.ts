import { Component, OnInit, ViewChild } from '@angular/core'
import { AgWordCloudData, AgWordCloudDirective } from 'angular4-word-cloud'

import {WordCloudComponent} from '../word-cloud/word-cloud.component'
import { LibraryService } from 'services/library.service'
import { WatchlistService} from '../../services/watchlist.service'

@Component({
  selector: 'app-word-cloud-wish',
  templateUrl: '../word-cloud/word-cloud.component.html',
  styleUrls: ['../word-cloud/word-cloud.component.css']
})

export class WordCloudWishComponent implements OnInit {

  // WordCloudDirective
  @ViewChild('word_cloud_chart') wordCloudChart: AgWordCloudDirective

  // Main word cloud.
  wordData: Array<AgWordCloudData> = []

  options = {
    settings: {
      minFontSize: 70,
      maxFontSize: 150,
    },
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    labels: false // false to hide hover labels
  }

  // Colors to use in cloud.
  colors = ['#653399', '#982d84', '#b5d83c', '#e3d83f', '#00D377']

  emptyLib = [
    {size: 2, text: 'LIBRARY'},
    {size: 1, text: ' '},
    {size: 2, text: 'EMPTY'}
  ]

  addMore = [
    {size: 2, text: 'LIBRARY NEEDS'},
    {size: 1, text: ' '},
    {size: 2, text: 'MORE CONTENT'}
  ]

  constructor(public libraryService: LibraryService, public watchlistService: WatchlistService) { }

  async ngOnInit() {
    /**
     * On init, we will fetch the users
     * library and every instance of a genre.
     * Generate words and update cloud.
     */

    this.wordCloudChart.color = this.colors

    // Fetch movies and TV shows from Library.
    await this.libraryService.getLibrary()
    let libraryMov = this.libraryService.libraryMovie
    let libraryTV = this.libraryService.libraryTv
    let tvs = libraryTV.map(movie => movie.genres)
    let movs = libraryMov.map(movie => movie.genres)
    let libraryGens = tvs.concat(movs)

    // Fetch movies and TV shows from Watchlist.
    await this.watchlistService.getWatchlist()
    let watchlist = this.watchlistService.watchlistMovie
    let watchGens = watchlist.map(movie => movie.genres)

    // Slap them together as one array.
    let genres = watchGens.concat(libraryGens)

    // Generate cloud data update cloud.
    this.generateCloudWords(genres)
    this.wordCloudChart.update()
  }

  private generateCloudWords(genres) {
    /**
     * Generates cloud if there are more than 4 movies in the library.
     * If there are zero or less than 5 movies there, it shows a custom word cloud.
     * Else it will push two empty strings to the word cloud, with different weights.
     * This will make the cloud generate in 99.99 % of instances.
     * @param {genres} Array<Array> Genres list of lists.
     */
    if (genres.length == 0) {
      this.wordData = this.emptyLib
    } else if (genres.length < 5) {
      this.wordData = this.addMore
    } else {
      this.countGenres(genres)
      this.wordData.push({size: 1, text: ' '})
      this.wordData.push({size: 2, text: ' '})
    }
  }

  private countGenres(genres) {
    /**
     * Genres will look like genres = [[drama, crime], [comedy, action], ... ]
     * where every array in the genre array is a specific movie.
     * We want to concat this array as one array, and then count instances in countEm.
     * After counting we push the AgWordCloudData dictionary,
     * {size: counted_number, text: genre}, into the wordData.
     * @param {genres} Array<Array> Genres list of lists.
     */
    var arr = genres.reduce((a, b) => a.concat(b), [])
    let counted = this.countEm(arr, String)
    for (var key in counted) {
      this.wordData.push({size: counted[key], text: key})
    }
  }

  private countEm(ary, classifier) {
    /**
     * Main counter. Counts instances of each String (classifier) genre,
     * and returns number of instances.
     * @param {ary} Array<String> Array to count.
     * @param {classifier} Type Classifier.
     */
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
      var p = classifier(item)
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1
      return counter
    }, {})
  }

}
