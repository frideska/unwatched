import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {Routes, RouterModule, Router} from '@angular/router'

import { UserModule } from './user/user.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { CardComponent } from './card/card.component'
import { NavbarComponent } from './navbar/navbar.component'
import { LibraryComponent } from './library/library.component'
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: CardComponent},
  {path: 'library', component: CardComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    LibraryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
