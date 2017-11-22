import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { LibraryService } from 'services/library/library.service'
import { DetailsService } from 'services/details/details.service'
import { HistoryService } from 'services/history/history.service'
import { SearchService } from 'services/search/search.service'
import { UserService } from 'services/user/user.service'
import { HttpModule } from '@angular/http'
import {CardElement} from "../../classes/CardElement";

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], declarations: [
        CardComponent,
      ], providers: [
        WatchlistService,
        LibraryService,
        HistoryService,
        SearchService,
        UserService,
        DetailsService
      ]
    })
    .compileComponents()
  }))

  beforeEach( async () => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    const card = await new CardElement(
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
    component.element = card
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
