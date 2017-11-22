import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WatchlistComponent } from 'components/watchlist/watchlist.component'
import { CardComponent} from '../cards/card.component'
import { ListViewComponent } from '../list-view/list-view.component'
import { FilterComponent } from '../filter/filter.component'
import { WatchlistService } from 'services/watchlist/watchlist.service'
import { LibraryService } from 'services/library/library.service'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

describe('WatchlistComponent', () => {
  let component: WatchlistComponent
  let fixture: ComponentFixture<WatchlistComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        FormsModule
      ], declarations: [
        WatchlistComponent,
        CardComponent,
        ListViewComponent,
        FilterComponent
      ], providers: [
        WatchlistService,
        LibraryService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain a app-card', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('app-card')).not.toBe(null)
  }))

  it('should contain a app-list-view', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('app-list-view')).not.toBe(null)
  }))
})
