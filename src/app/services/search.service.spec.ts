import { TestBed, inject } from '@angular/core/testing'

import { SearchService } from 'services/search.service'
import { HttpModule } from '@angular/http'

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], providers: [
        SearchService
      ]
    })
  })

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy()
  }))
})
