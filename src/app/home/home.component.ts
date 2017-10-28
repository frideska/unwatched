import { Component, OnInit } from '@angular/core'

enum FooBar {
  FOO, BAR
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = FooBar[FooBar.FOO]
  constructor() {}

  ngOnInit() {
  }

  onClick() {
    this.title = FooBar[FooBar.BAR]
  }

}
