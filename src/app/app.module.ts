import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AgWordCloudModule} from 'angular4-word-cloud'

/**
 * Import Components
 */
import { AppComponent } from 'app.component'
import { HomeComponent } from 'components/home/home.component'
import { UserComponent } from 'components/user/user.component'
import { CardComponent } from 'components/cards/card.component'
import { NavbarComponent } from 'components/navbar/navbar.component'
import { FooterComponent } from 'components/footer/footer.component'
import { LibraryComponent } from 'components/library/library.component'
import { SearchComponent } from 'components/search/search.component'
import { WatchlistComponent } from 'components/watchlist/watchlist.component'
import { SlideshowItemComponent } from 'components/home/SlideshowItem/slideshow-item.component'
import { NotFoundComponent } from 'components/not-found/not-found.component'
import { FilterComponent } from 'components/filter/filter.component'
import { WordCloudComponent } from 'components/word-cloud/word-cloud.component'
import { WordCloudWishComponent } from './components/word-cloud-wish/word-cloud-wish.component'
import { ListViewComponent } from 'components/list-view/list-view.component'
import { AverageRatingComponent } from 'components/average-rating/average-rating.component'
import { DocumentationComponent } from 'components/documentation/documentation.component'


/**
 * Import Services
 */
import { UserService } from 'services/user.service'
import { DiscoverService } from 'services/discover.service'
import { SearchService } from 'services/search.service'
import { WatchlistService } from 'services/watchlist.service'
import { LibraryService } from 'services/library.service'
import { AuthGuard } from 'services/auth-guard.service'
import { HistoryService } from 'services/history.service'
import {DetailsService} from 'services/details.service'


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
  {path: 'library', component: LibraryComponent, canActivate: [AuthGuard]},
  {path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuard]},
  {path: 'documentation', component: DocumentationComponent },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavbarComponent,
    LibraryComponent,
    SearchComponent,
    WatchlistComponent,
    SlideshowItemComponent,
    NotFoundComponent,
    FilterComponent,
    WordCloudComponent,
    FooterComponent,
    ListViewComponent,
    CardComponent,
    WordCloudWishComponent,
    AverageRatingComponent,
    DocumentationComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false}),
    AgWordCloudModule.forRoot()
  ],
  providers: [
    DiscoverService,
    WatchlistService,
    SearchService,
    UserService,
    LibraryService,
    AuthGuard,
    HistoryService,
    DetailsService,
    USER_INIT
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
