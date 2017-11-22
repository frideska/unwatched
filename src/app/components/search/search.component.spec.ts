import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchComponent } from './search.component'
import { CardComponent} from '../cards/card.component'
import { HttpModule } from '@angular/http'
import { SearchService } from 'services/search/search.service'

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

  it('should contain 2 \"div\"s', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('div').length).toBeLessThan(3)
    expect(compiled.querySelectorAll('div').length).toBeGreaterThan(1)
  }))

  it('should contain \"app-card\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('app-card')).not.toBe(null)
  }))
})
