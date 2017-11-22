import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LibraryComponent } from './library.component'
import { LibraryService } from 'services/library/library.service'
import { RouterTestingModule } from '@angular/router/testing'
import { FilterComponent } from 'components/filter/filter.component'
import { ListViewComponent } from 'components/list-view/list-view.component'
import { HttpModule } from '@angular/http'
import {CardComponent} from '../cards/card.component'
import { FormsModule } from '@angular/forms'
import {WatchlistService} from '../../services/watchlist/watchlist.service'

describe('LibraryComponent', () => {
  let component: LibraryComponent
  let fixture: ComponentFixture<LibraryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
        FormsModule
      ],
      declarations: [
        LibraryComponent,
        FilterComponent,
        ListViewComponent,
        CardComponent
      ],
      providers: [
        LibraryService,
        WatchlistService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
