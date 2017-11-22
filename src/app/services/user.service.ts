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
    } else {
      this.user = null
    }
    this.loggedIn = this.isLoggedIn()
    this.user
      ? console.log(`[Service|User](getUser) Got user: ${this.user.name}`)
      : console.log(`[Service|User](getUser) Not logged in... `)
  }

  /**
   * Returns if there is currently a user logged in to the application frontend.
   */
  isLoggedIn(): boolean {
    console.log(`[Service|User](isLoggedIn) Triggered isLoggedIn(): ${this.user ? true : false}`)
    return this.user ? true : false
  }

  /**
   * Log out the currently logged in user.
   */
  async logout(): Promise<void> {
    console.log(`[Service|User](logout) Triggered logout()`)
    await this.http.get(URLS.logout).toPromise()
    await this.getUser()
    console.log(`[Service|User](logout) Finished logout()`)
  }

  /**
   * Delete the currently logged in user.
   */
  async delete(): Promise<void> {
    console.log(`[Service|User](delete) Triggered delete()`)
    await this.http.delete(URLS.profile).toPromise()
    await this.logout()
    console.log(`[Service|User](delete) Triggered delete()`)
  }
}
