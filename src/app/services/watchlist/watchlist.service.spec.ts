import { TestBed, inject } from '@angular/core/testing'

import { WatchlistService } from 'services/watchlist/watchlist.service'
import { HttpModule } from '@angular/http'

describe('UserService', () => {
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
})
