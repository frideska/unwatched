import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchComponent } from './search.component'
import { CardComponent} from '../cards/card.component'
import { HttpModule } from '@angular/http'
import { SearchService } from 'services/search.service'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], declarations: [
        SearchComponent,
        CardComponent
      ], providers: [
        SearchService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
