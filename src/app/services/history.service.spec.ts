import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HistoryService } from 'services/history.service'

describe('HistoryService', () => {
    let component: HistoryService
    let fixture: ComponentFixture<HistoryService>

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
        fixture = TestBed.createComponent(HistoryService)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
