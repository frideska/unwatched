import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DocumentationComponent } from './documentation.component'
import { HttpModule } from '@angular/http'

describe('DocumentationComponent', () => {
  let component: DocumentationComponent
  let fixture: ComponentFixture<DocumentationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], declarations: [
        DocumentationComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
