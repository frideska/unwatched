import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WordCloudWishComponent } from './word-cloud-wish.component'
import { AgWordCloudModule } from 'angular4-word-cloud'
import { LibraryService } from '../../services/library/library.service'
import { WatchlistService } from '../../services/watchlist/watchlist.service'
import { HttpModule } from '@angular/http'

describe('WordCloudWishComponent', () => {
  let component: WordCloudWishComponent
  let fixture: ComponentFixture<WordCloudWishComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgWordCloudModule,
        HttpModule
      ],
      declarations: [
        WordCloudWishComponent
      ],
      providers: [
        LibraryService,
        WatchlistService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudWishComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
