import { TestBed, inject } from '@angular/core/testing'

import { WatchlistService } from 'services/watchlist/watchlist.service'
import { HttpModule } from '@angular/http'
import {CardElement} from "../../classes/CardElement"

class MockWatchlistService {
  card = new CardElement(
    {id: 268,
    title: 'Batman',
    genres: [ 'Fantasy', 'Action'],
    overview: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being ' +
    'the clownishly homicidal Joker, who has seized control of Gotham’s underworld.',
    backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
    poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
    release_date: '1989-06-23',
    vote_average: 7,
    watchlist: false,
    library: false,
    media_type: 'tv',
  })
}

describe('WatchlistService', () => {
  let service: WatchlistService
  let htmlElement: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], providers: [[{
        provide: WatchlistService,
        userClass: MockWatchlistService
      }]]
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
