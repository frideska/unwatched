import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FilterComponent } from './filter.component'
import { RouterTestingModule } from '@angular/router/testing'
import { LibraryService } from '../../services/library.service'
import { HttpModule } from '@angular/http'

describe('FilterComponent', () => {
  let component: FilterComponent
  let fixture: ComponentFixture<FilterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ], declarations: [ FilterComponent ],
      providers: [
        LibraryService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
