import { Component, OnInit, Input } from '@angular/core'

import { CardElement } from '../../classes/CardElement'

@Component({
  selector: 'app-card-light',
  templateUrl: './card-light.component.html',
  styleUrls: ['./card-light.component.css']
})
export class CardLightComponent implements OnInit {
  @Input() element: CardElement
  constructor() { }

  ngOnInit() {
  }

}
