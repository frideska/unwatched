import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { CardElement } from '../../classes/CardElement'

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input('childOf') childOf: string
  @Input('getList') getList: Function
  @Input('type') type: string
  service: any

  constructor(
    private watchlistService: WatchlistService,
    private libraryService: LibraryService) { }


  ngOnInit() {
    if (this.childOf === 'Library') {
      this.service = this.libraryService
    } else if (this.childOf === 'Watchlist') {
      this.service = this.watchlistService
    }
   }
  private async reload() {
    await this.watchlistService.getWatchlist()
    await this.libraryService.getLibrary()
  }

  async addToWatchlist (element) {
    if (element.watchlist) {
      await this.watchlistService.removeFromWatchlist(element)
    } else  {
      await this.watchlistService.addToWatchlist(element)
    }
    await this.reload()
  }
  async addToLibrary(element) {
    if (element.library) {
      await this.libraryService.removeFromLibrary(element)
    } else  {
      await this.libraryService.addToLibrary(element)
    }
    await this.reload()
  }
}
