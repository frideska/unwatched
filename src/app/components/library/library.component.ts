import { Component, OnInit, OnDestroy } from '@angular/core'
import { LibraryService } from 'services/library.service'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy {
  type: string
  order: string
  orderBy: string
  search: string
  private sub: any
  getListElements: Function

  constructor(public libraryService: LibraryService,
              private route: ActivatedRoute,
              private router: Router
              ) {}

  async ngOnInit() {
    this.libraryService.getLibrary()
    this.sub = this.route.queryParams.subscribe(params => {
        this.type = params['type'] || 'movie'
        this.orderBy = params['orderBy'] || 'title'
        this.search = params['search'] || ''
        this.libraryService.getLibrary(this.order, this.orderBy, this.search)
      })
    this.getListElements = this.getList.bind(this)
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  /**
   * Gets list with movies and tv from libraryService.
   */
  getList() {
    if (this.type === 'movie') {
      return this.libraryService.libraryMovie
    } else if (this.type === 'tv') {
      return this.libraryService.libraryTv
    }
  }
}
