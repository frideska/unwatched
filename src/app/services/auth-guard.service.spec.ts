import { TestBed, inject } from '@angular/core/testing'

import { AuthGuard } from './auth-guard.service'
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from './user.service'
import { HttpModule } from '@angular/http'

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        AuthGuard,
        UserService
      ]
    })
  })

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy()
  }))
})
