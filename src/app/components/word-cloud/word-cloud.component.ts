import { Component, OnInit, ViewChild } from '@angular/core'
import { AgWordCloudData, AgWordCloudDirective } from 'angular4-word-cloud'

import { LibraryService } from 'services/library.service'


@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})

export class WordCloudComponent implements OnInit {

  @ViewChild('word_cloud_chart') word_cloud_chart: AgWordCloudDirective;

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

  colors = ['#653399', '#982d84', '#b5d83c', '#e3d83f', '#22BAA0']


  constructor(public libraryService: LibraryService) {

  }

  async ngOnInit() {
    await this.libraryService.getLibrary()
    let library = this.libraryService.library
    let genres = library.map(movie => movie.genres)
    this.countGenres(genres, String)
    this.word_cloud_chart.color = this.colors
    this.word_cloud_chart.update()
  }


  countGenres(genres, classifier) {
    var arr = genres.reduce((a, b) => a.concat(b), [])
    let counted = this.countEm(arr, String)
     for (var key in counted) {
      this.wordData.push({size: counted[key], text: key})
     }
    console.log(this.wordData)
  }

  countEm(ary, classifier) {
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
      var p = classifier(item)
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1
      return counter
    }, {})
  }


}
