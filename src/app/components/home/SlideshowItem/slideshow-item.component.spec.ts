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

  beforeEach(async() => {
    fixture = TestBed.createComponent(SlideshowItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    const card = await new CardElement(
      {id: 268,
        title: 'Batman',
        genres: [ 'Fantasy', 'Action'],
        overview: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being ' +
        'the clownishly homicidal Joker, who has seized control of Gotham’s underworld.',
        backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
        poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
        release_date: '1989-06-23',
        vote_average: 7,
        watchlist: false,
        library: false,
        media_type: 'tv',
      })
    component.movie = card
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
