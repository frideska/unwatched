import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LibraryComponent } from './library.component'
import { LibraryService } from 'services/library.service'
import { RouterTestingModule } from '@angular/router/testing'
import { FilterComponent } from 'components/filter/filter.component'
import { ListViewComponent } from 'components/list-view/list-view.component'
import { HttpModule } from '@angular/http'

describe('LibraryComponent', () => {
  let component: LibraryComponent
  let fixture: ComponentFixture<LibraryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        LibraryComponent,
        FilterComponent,
        ListViewComponent
      ], providers: [
        LibraryService
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
