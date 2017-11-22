import { TestBed, inject } from '@angular/core/testing'

import { HistoryService } from 'services/history/history.service'
import { HttpModule } from '@angular/http'

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], providers: [
        HistoryService
      ]
    })
  })

  it('should be created', inject([HistoryService], (service: HistoryService) => {
    expect(service).toBeTruthy()
  }))
})
