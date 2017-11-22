import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterComponent } from './footer.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'

describe('FooterComponent', () => {
  let component: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ], declarations: [
        FooterComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
