import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UserService } from 'services/user.service'
import { HistoryService } from 'services/history.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private historyService: HistoryService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    await this.userService.getUser()
    await this.historyService.getHistory()
  }

  /**
   * Deletes the user profile when clicking the delete-button and navigates
   * the user back to the discover page.
   */
  public async delete() {
    console.log(`[Component|User](delete) Triggered delete()`)
    await this.userService.delete()
    this.router.navigate(['/'])
    console.log(`[Component|User](delete) Finished delete()`)
  }

  /**
   * Gets the updates date for displaying on profile-page.
   */
  getUpdated() {
    const day = this.userService.user.updated.getDate()
    const month = this.userService.user.updated.getMonth() + 1
    const year = this.userService.user.updated.getFullYear()
    return day.toString() + '.' + month.toString() + '.' + year.toString()
  }

  /**
   * Gets the date when the user-profile was made.
   */
  getDate() {
    const day = this.userService.user.date.getDate()
    const month = this.userService.user.date.getMonth() + 1
    const year = this.userService.user.date.getFullYear()
    return day.toString() + '.' + month.toString() + '.' + year.toString()
  }

}
