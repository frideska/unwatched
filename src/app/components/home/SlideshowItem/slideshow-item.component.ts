import { Component, OnInit, Input } from '@angular/core'

import { CardElement } from 'classes/CardElement'

@Component({
  selector: 'app-slideshow-item',
  templateUrl: './slideshow-item.component.html'
})
export class SlideshowItemComponent implements OnInit {
  @Input() movie: CardElement

  ngOnInit() {
      console.log(this.movie)
  }
}
