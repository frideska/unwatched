import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

/**
 * Import Components
 */
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { CardComponent } from './card/card.component'
import { NavbarComponent } from './navbar/navbar.component'
import { LibraryComponent } from './library/library.component'
import { SearchComponent } from './search/search.component'
import { WatchlistComponent } from './watchlist/watchlist.component'

/**
 * Import Services
 */
import { UserService } from './services/user.service'
import { DiscoverService } from './home/discover.service'
import { SearchService } from './search/search.service'
import { WatchlistService } from './watchlist/watchlist.service'
import { AuthGuard } from './services/auth-guard.service'

export const initUserServiceFactory = (userService: UserService): Function => {
  return () => userService.getUser()
}

export const USER_INIT = {
  provide: APP_INITIALIZER,
  useFactory: initUserServiceFactory,
  deps: [UserService],
  multi: true
}

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CardComponent,
    NavbarComponent,
    LibraryComponent,
    SearchComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [
    DiscoverService,
    WatchlistService,
    SearchService,
    UserService,
    AuthGuard,
    USER_INIT
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
