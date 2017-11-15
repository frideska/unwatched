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
  @Input() element: CardElement

  constructor(
    private watchlistService: WatchlistService,
    private libraryService: LibraryService) { }

  ngOnInit() {
  }

}
