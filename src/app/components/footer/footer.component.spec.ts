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

  it('p should contain \"documentation\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('p').textContent).toContain('documentation')
  }))

  it('should contain 2 \"img\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('img').length).toBeLessThan(3)
    expect(compiled.querySelectorAll('img').length).toBeGreaterThan(1)
  }))

  it('should contain 2 \"div\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('div').length).toBeLessThan(3)
    expect(compiled.querySelectorAll('div').length).toBeGreaterThan(1)
  }))

})
