import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { GoogleUser } from 'classes/user'

const URLS = {
  profile: '/auth/profile',
  login: 'auth/google',
  logout: '/auth/logout'
}

@Injectable()
export class UserService {
  public user: GoogleUser
  public loggedIn: boolean

  constructor(private http: Http) { }

  /**
   * Get the currently logged in user from the backend.
   */
  async getUser(): Promise<void> {
    const response = await this.http.get(URLS.profile).toPromise()
    const json = response.json()
    const user = json.user
    if (user) {
      this.user = new GoogleUser(user)
    }
    this.loggedIn = this.isLoggedIn()
  }

  /**
   * Returns if there is currently a user logged in to the application frontend.
   */
  isLoggedIn(): boolean {
    return this.user ? true : false
  }

  /**
   * Log out the currently logged in user.
   */
  async logout(): Promise<void> {
    await this.http.get(URLS.logout).toPromise()
    await this.getUser()
  }

  /**
   * Delete the currently logged in user.
   */
  async delete(): Promise<void> {
    await this.http.delete(URLS.profile).toPromise()
    await this.logout()
  }
}
