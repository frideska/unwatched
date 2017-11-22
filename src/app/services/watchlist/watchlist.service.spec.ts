import { TestBed, inject } from '@angular/core/testing'

import { WatchlistService } from 'services/watchlist/watchlist.service'
import { HttpModule } from '@angular/http'

describe('WatchlistService', () => {
  let service: WatchlistService;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], providers: [
        WatchlistService
      ]
    })
  })

  it('should be created', inject([WatchlistService], (service: WatchlistService) => {
    expect(service).toBeTruthy()
  }))

  it('should toggle list view button', () => {
   expect(service.listView).toBeFalsy()
   service.toggleListView()
   expect(service.listView).toBeTruthy()
 })
})
