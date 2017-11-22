import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { UserService } from 'services/user/user.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin()
  }

  /**
   * Checks the if the user is logged in.
   */
  private checkLogin(): boolean {
    const isLoggedIn = this.userService.isLoggedIn()
    if (isLoggedIn) {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }
}
