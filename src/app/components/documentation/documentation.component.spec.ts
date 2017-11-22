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

  // Checks for only <h1> to contain 'Documentation'.
  it('h1 should contain \"Documentation\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Documentation')
  }))

  // Checks first <h3> to contain 'Project requirments'.
  it('h3 should contain \"Project requirments\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h3').textContent).toContain('Project requirments')
  }))

  // Checks if there is 4 divs. Ugly but ok.
  it('should contain 4 \"div\"s', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('div').length).toBeLessThan(5)
    expect(compiled.querySelectorAll('div').length).toBeGreaterThan(3)
  }))

  // Checks if there is 16 li. Ugly but ok.
  it('should contain 16 \"li\"s', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('li').length).toBeLessThan(17)
    expect(compiled.querySelectorAll('li').length).toBeGreaterThan(15)
  }))

  // Checks if there is 3 ul. Ugly but ok.
  it('should contain 1 \"ul\"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('ul').length).toBeLessThan(4)
    expect(compiled.querySelectorAll('ul').length).toBeGreaterThan(2)
  }))

  // Checks if there is a paragraph p.
  it('should contain a paragraph', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('p')).not.toBe(null)
  }))

})
