import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  url: string
  type: string

  constructor(
    private libraryService: LibraryService,
    private router: Router
  ) {
    this.type = 'movie'
    }

  ngOnInit() {
    this.url = this.router.url
    console.log(this.url)
  }

  setType(type) {
    this.type = type
  }

}
