import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { SlideshowItemComponent } from './SlideshowItem/slideshow-item.component'
import { CardComponent} from '../cards/card.component'
import { LibraryComponent } from '../library/library.component'
import { WatchlistComponent } from '../watchlist/watchlist.component'
import { ListViewComponent } from '../list-view/list-view.component'
import { FilterComponent } from '../filter/filter.component'
import { DiscoverService } from 'services/discover.service'
import { UserService } from 'services/user.service'
import { HttpModule } from '@angular/http'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'

describe('HomeComponent', () => {
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            HttpModule,
            RouterTestingModule,
            FormsModule
          ], declarations: [
            HomeComponent,
            SlideshowItemComponent,
            CardComponent,
            LibraryComponent,
            WatchlistComponent,
            ListViewComponent,
            FilterComponent
          ], providers: [
            DiscoverService,
            UserService
          ]
        })
        .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
