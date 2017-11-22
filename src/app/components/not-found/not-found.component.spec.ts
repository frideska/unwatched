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

  it('h1 should contain \"404\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('404')
  }))

  it('h3 should contain \"Line not found\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h3').textContent).toContain('Line not found')
  }))

  it('should contain 2 \"div\"s', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('div').length).toBeLessThan(3)
    expect(compiled.querySelectorAll('div').length).toBeGreaterThan(1)
  }))
})
