import { Component, OnInit } from '@angular/core'
import { LibraryService } from 'services/library.service'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {

  constructor(public libraryService: LibraryService) {}

  async ngOnInit() {
    this.libraryService.getLibrary()
  }


}
