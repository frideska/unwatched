import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as moment from 'moment'
import 'moment/locale/nb'
moment.locale('nb')

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
    return moment(this.userService.user.updatedAt).format('Do MMMM YYYY')
  }

  /**
   * Gets the date when the user-profile was made.
   */
  getDate() {
    return moment(this.userService.user.createdAt).format('Do MMMM YYYY')
  }

}
