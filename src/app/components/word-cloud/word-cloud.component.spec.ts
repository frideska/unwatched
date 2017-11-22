import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WordCloudComponent } from './word-cloud.component'
import { AgWordCloudModule, AgWordCloudData } from 'angular4-word-cloud'
import { LibraryService } from '../../services/library/library.service'
import { HttpModule } from '@angular/http'

import 'rxjs/add/operator/toPromise'

class MockWordcloudService {
  constructor() {}
  getWordcloud() {
    const mockData = {
      'Action': 4,
      'Crime': 7,
      'Documentary': 1
    }
    return mockData
  }
}

describe('WordCloudComponent', () => {
  let component: WordCloudComponent
  let fixture: ComponentFixture<WordCloudComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgWordCloudModule,
        HttpModule
      ],
      declarations: [
        WordCloudComponent
      ],
      providers: [
        [{ provide: LibraryService, useClass: MockWordcloudService}]
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have no wordData at initial render', () => {
    const mockData: AgWordCloudData[] = []
    expect(component.wordData).toEqual(mockData)
  })

})
