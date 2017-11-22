import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListViewComponent } from './list-view.component'
import { CardComponent } from 'components/cards/card.component'
import { WatchlistService } from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'

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
        LibraryService,
        WatchlistService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
