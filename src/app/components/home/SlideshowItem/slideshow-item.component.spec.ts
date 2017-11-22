import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import {SlideshowItemComponent} from './slideshow-item.component'
import { CardElement } from '../../../classes/CardElement'

describe('SlideshowItemComponent', () => {
  let component: SlideshowItemComponent
  let fixture: ComponentFixture<SlideshowItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        SlideshowItemComponent,
      ],
      providers: [
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /*
  it('should contain a "li"', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h3')).not.toBe(null)
  }))
  */

})
