import {Component, Input, OnInit} from '@angular/core'

import { WatchlistService} from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { DiscoverElement } from 'classes/DiscoverElement'

@Component({
  selector: 'app-discover-card',
  templateUrl: './discover-card.component.html',
  styleUrls: ['../card.component.css']
})
export class DiscoverCardComponent implements OnInit {
  @Input() element: DiscoverElement

  constructor(private watchlistService: WatchlistService, private libraryService: LibraryService) { }

  ngOnInit() {
    console.log(this.element.title)
  }
}
