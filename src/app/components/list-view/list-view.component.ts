import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist/watchlist.service'
import { LibraryService } from 'services/library/library.service'
import { CardElement } from '../../classes/CardElement'
import {DetailsService} from 'services/details.service'

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
    private libraryService: LibraryService
    private detailsService: DetailsService) { }


  ngOnInit() {
    if (this.childOf === 'Library') {
      this.service = this.libraryService
    } else if (this.childOf === 'Watchlist') {
      this.service = this.watchlistService
    }
   }

  private async reload() {
      this.element =  await this.detailsService.getDetails(this.element)
    }



  /**
   * Adds the element to the watchlist if its not allready there.
   * If its in the list it removes the element from the watchlist.
   */
  async addToWatchlist (element) {
    if (element.watchlist) {
      await this.watchlistService.removeFromWatchlist(element)
    } else  {
      await this.watchlistService.addToWatchlist(element)
    }
    await this.reload()
  }

  /**
   * Adds the element to the library if its not allready there.
   * If its in the list it removes the element from the library.
   */
  async addToLibrary(element) {
    if (element.library) {
      await this.libraryService.removeFromLibrary(element)
    } else  {
      await this.libraryService.addToLibrary(element)
    }
    await this.reload()
  }

  public roundToInterval(number): string {
    console.log(number)
    if ( number === 0) {
      return 'null'
    } else if ( number <= 5.0) {
      return 'bad'
    } else if ( number <= 7.0 ) {
      return 'ok'
    } else {
      return 'good'
    }
  }
}
