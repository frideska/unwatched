import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { SlideshowItemComponent } from './SlideshowItem/slideshow-item.component'
import { CardComponent} from '../cards/card.component'
import { DiscoverService } from '../../services/discover.service'
import { HttpModule } from '@angular/http'

describe('HomeComponent', () => {
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
              HttpModule], declarations: [
              HomeComponent,
              SlideshowItemComponent,
              CardComponent
            ], providers: [
              DiscoverService
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
