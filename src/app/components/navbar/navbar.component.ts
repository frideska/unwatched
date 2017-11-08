import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { SearchService } from 'services/search.service'
import { UserService } from 'services/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private previous: string

  constructor(
    private searchService: SearchService,
    private userService: UserService,
    private router: Router
  ) {
    this.previous = '/home'
  }

  ngOnInit() {}

  onSearchChange(event) {
    this.searchService.setQuery(event)
    this.searchService.search()
    if (event.length) {
      if (this.router.url !== '/search') {
        console.log(this.router.url)
        this.previous = this.router.url
      }
      this.router.navigate(['/search'])
    } else {
      this.router.navigate([this.previous])
    }
  }

  cleanSearchField() {
    this.searchService.setQuery('')
  }
}
