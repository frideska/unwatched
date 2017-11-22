import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FilterComponent } from  './Filter.component'
import { RouterTestingModule } from '@angular/router/testing'
import { LibraryService } from 'services/library/library.service'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

const libraryService = {
  listview: true
}
const watchlistService = {
  listview: true

}

describe('FilterComponent', () => {
  let component: FilterComponent
  let fixture: ComponentFixture<FilterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule
      ], declarations: [
         FilterComponent
       ], providers: [
        {provide: LibraryService, useValue: libraryService },
        {provide: WatchlistService, useValue: watchlistService }
      ]
    })
    .compileComponents()
  }))

  beforeEach(async () => {
    fixture = TestBed.createComponent(FilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    component.childOf = 'watchlist'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
