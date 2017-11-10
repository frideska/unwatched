import { Component, OnInit, Input } from '@angular/core'

import { DiscoverMovie } from 'classes/DicoverMovie'

@Component({
  selector: 'app-slideshow-item',
  templateUrl: './slideshow-item.component.html'
})
export class SlideshowItemComponent implements OnInit {
  @Input() movie: DiscoverMovie

  ngOnInit() {
      console.log(this.movie)
  }
}
