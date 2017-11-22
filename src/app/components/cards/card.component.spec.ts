import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { LibraryService } from 'services/library/library.service'
import { DetailsService } from 'services/details/details.service'
import { HistoryService } from 'services/history/history.service'
import { SearchService } from 'services/search/search.service'
import { UserService } from 'services/user/user.service'
import { HttpModule } from '@angular/http'

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

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
