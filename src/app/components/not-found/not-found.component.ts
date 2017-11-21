import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { AgWordCloudData, AgWordCloudDirective } from 'angular4-word-cloud'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  // WordCloudDirective
  @ViewChild('word_cloud_chart') wordCloudChart: AgWordCloudDirective

  // Main word cloud.
  wordData: Array<AgWordCloudData> = [
    {size: 2, text: 'NOT FOUND'},
    {size: 1, text: ' '},
    {size: 1, text: ' '},
    {size: 3, text: ' '},
    {size: 3, text: '404'}
  ]

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

  constructor( private router: Router ) { }

  ngOnInit() {
    this.wordData.push({size: 2, text: this.router.url})
    this.wordCloudChart.color = this.colors
    this.wordCloudChart.update()
  }

}
