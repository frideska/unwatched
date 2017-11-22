import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AverageRatingComponent } from './average-rating.component'
import { LibraryService } from '../../services/library.service'
import { HttpModule } from '@angular/http'

describe('AverageRatingComponent', () => {
  let component: AverageRatingComponent
  let fixture: ComponentFixture<AverageRatingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], declarations: [
        AverageRatingComponent
      ], providers: [
        LibraryService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageRatingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
