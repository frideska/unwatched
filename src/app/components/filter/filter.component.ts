import { Component, OnInit } from '@angular/core'

import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

}
