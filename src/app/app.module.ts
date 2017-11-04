import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {Routes, RouterModule, Router} from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { UserModule } from './user/user.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { CardComponent } from './card/card.component'
import { NavbarComponent } from './navbar/navbar.component'
import { LibraryComponent } from './library/library.component'
import { SearchComponent } from './search/search.component'
import { DiscoverService } from './home/discover.service'
import { SearchService } from './search/search.service'
import { WatchlistComponent } from './watchlist/watchlist.component'
import {WatchlistService} from './watchlist/watchlist.service'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    LibraryComponent,
    SearchComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [
    DiscoverService,
    WatchlistService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
