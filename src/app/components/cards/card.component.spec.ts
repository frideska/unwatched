import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'
import { WatchlistService } from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { HistoryService } from 'services/history.service'
import { SearchService } from 'services/search.service'
import { UserService } from 'services/user.service'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ], declarations: [
        CardComponent,
      ], providers: [
        WatchlistService,
        LibraryService,
        HistoryService,
        SearchService,
        UserService
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
