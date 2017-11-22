import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WordCloudComponent } from './word-cloud.component'
import { AgWordCloudModule } from 'angular4-word-cloud'
import { LibraryService } from '../../services/library.service'
import { HttpModule } from '@angular/http'

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
        LibraryService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
