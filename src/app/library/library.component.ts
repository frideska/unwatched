import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  titles: string[] = ['title1', 'title2', 'title3']
  constructor() { }

  ngOnInit() {
  }

}
