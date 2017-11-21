import { Component, Input } from '@angular/core'

import { CardElement } from 'classes/CardElement'

@Component({
  selector: 'app-slideshow-item',
  templateUrl: './slideshow-item.component.html'
})
export class SlideshowItemComponent {
  @Input() movie: CardElement
}
