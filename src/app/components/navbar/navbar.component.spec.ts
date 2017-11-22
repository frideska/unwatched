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

  it('a should contain be 3 elements', async(() => {
    const compiled = fixture.debugElement.nativeElement
    const el = compiled.querySelectorAll('a')
    expect(el.length).toBeLessThan(7)
    expect(el.length).toBeGreaterThan(5)
  }))

  it('a should contain correct strings', async(() => {
    const compiled = fixture.debugElement.nativeElement
    const el = compiled.querySelectorAll('a')
    expect(el[1].textContent).toBe('Discover')
    expect(el[2].textContent).toBe('Library')
    expect(el[3].textContent).toBe('Watchlist')
    expect(el[5].textContent).toBe('\n' +
      '        \n' +
      '\n' +
      '          \n' +
      '          \n' +
      '            \n' +
      '            Log in\n' +
      '          \n' +
      '\n' +
      '        \n' +
      '      ')
  }))

  it('Search div should have textContent Search', async(() => {
    const compiled = fixture.debugElement.nativeElement
    const el = compiled.querySelectorAll('div')
    expect(el[6].textContent).toBe('Search ')
  }))
})
