import { Component, OnInit, ViewChild } from '@angular/core'
import { AgWordCloudData, AgWordCloudDirective } from 'angular4-word-cloud'

import { LibraryService } from 'services/library.service'


@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})

export class WordCloudComponent implements OnInit {

  // WordCloudDirective
  @ViewChild('word_cloud_chart') wordCloudChart: AgWordCloudDirective;

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
  colors = ['#653399', '#982d84', '#b5d83c', '#e3d83f', '#22BAA0']


  constructor(public libraryService: LibraryService) {

  }

  async ngOnInit() {
    /**
     * On init, we will fetch the users
     * library and every instance of a genre.
     */
    await this.libraryService.getLibrary()
    let library = this.libraryService.library
    let genres = library.map(movie => movie.genres)
    this.countGenres(genres)

    // Set cloud colors and update cloud.
    this.wordCloudChart.color = this.colors
    this.wordCloudChart.update()
  }

  countGenres(genres) {
    /**
     * Genres will look like genres = [[drama, crime], [comedy, action], ... ]
     * where every array in the genre array is a specific movie.
     * We want to concat this array as one array, and then count instances in countEm.
     * After counting we push the AgWordCloudData dictionary,
     * {size: counted_number, text: genre}, into the wordData.
     * @param {genres}: Array<Array> Genres list of lists.
     */
    var arr = genres.reduce((a, b) => a.concat(b), [])
    let counted = this.countEm(arr, String)
     for (var key in counted) {
      this.wordData.push({size: counted[key], text: key})
     }
    console.log(this.wordData)
  }

  countEm(ary, classifier) {
    /**
     * Main counter. Counts instances of each String (classifier) genre,
     * and returns number of instances.
     * @param {ary}: Array<String> Array to count.
     * @param {classifier}: Type Classifier.
     */
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
      var p = classifier(item)
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1
      return counter
    }, {})
  }


}
