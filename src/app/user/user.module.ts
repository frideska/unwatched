import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HttpClientModule} from '@angular/common/http'

import { UserComponent } from './user.component'

import { UserRoutingModule } from './user-routing.module'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
