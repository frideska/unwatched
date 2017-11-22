import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WatchlistService } from 'services/watchlist.service'

describe('WatchlistService', () => {
    let component: WatchlistService
    let fixture: ComponentFixture<WatchlistService>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
          ], declarations: [
          ], providers: [
          ]
        })
        .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(WatchlistService)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
