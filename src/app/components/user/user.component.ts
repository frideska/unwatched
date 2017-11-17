import { Component, OnInit } from '@angular/core'

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
    private historyService: HistoryService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.userService.getUser()
    await this.historyService.getHistory()
  }
}
