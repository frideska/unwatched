import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WordCloudWishComponent } from './word-cloud-wish.component'

describe('WordCloudWishComponent', () => {
  let component: WordCloudWishComponent
  let fixture: ComponentFixture<WordCloudWishComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCloudWishComponent ]
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
