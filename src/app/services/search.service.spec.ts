import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchService } from 'services/search.service'

describe('SearchService', () => {
    let component: SearchService
    let fixture: ComponentFixture<SearchService>

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
        fixture = TestBed.createComponent(SearchService)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
