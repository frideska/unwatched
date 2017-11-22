import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavbarComponent } from './navbar.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { SearchService } from 'services/search/search.service'
import { UserService } from 'services/user/user.service'

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        FormsModule
      ], declarations: [
        NavbarComponent
      ], providers: [
        SearchService,
        UserService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
