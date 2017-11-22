import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { SearchService } from 'services/search/search.service'
import { UserService } from 'services/user/user.service'

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
        this.previous = this.router.url
      }
      this.router.navigate(['/search'])
    } else {
      this.router.navigate([this.previous])
    }
  }

  /**
   * Clears the search field when the field is crossed away.
   */
  cleanSearchField() {
    this.searchService.setQuery('')
    this.router.navigate([this.previous || '/'])
  }

  /**
   *Loggs out the user when the user clicks the log-out button.
   */
  public async logout() {
    await this.userService.logout()
    this.router.navigate(['/'])
  }
}
