import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListViewComponent } from './list-view.component'
import { CardComponent } from 'components/cards/card.component'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { LibraryService } from 'services/library/library.service'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'

const libraryService = {
  listview: true
}
const watchlistService = {
  listview: true
}

describe('ListViewComponent', () => {
  let component: ListViewComponent
  let fixture: ComponentFixture<ListViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ], declarations: [
        ListViewComponent,
        CardComponent
      ], providers: [
        {provide: LibraryService, useValue: libraryService },
        {provide: WatchlistService, useValue: watchlistService }
      ]
    })
    .compileComponents()
  }))

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    component.childOf = 'library'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
