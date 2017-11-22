import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NotFoundComponent } from './not-found.component'
import { AgWordCloudModule } from 'angular4-word-cloud'
import { RouterTestingModule } from '@angular/router/testing'


describe('NotFoundComponent', () => {
  let component: NotFoundComponent
  let fixture: ComponentFixture<NotFoundComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgWordCloudModule,
        RouterTestingModule
      ],
      declarations: [
        NotFoundComponent
      ],
      providers: [

      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
