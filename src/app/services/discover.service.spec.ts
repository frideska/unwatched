import { TestBed, inject } from '@angular/core/testing'

import { DiscoverService } from 'services/discover.service'

describe('DiscoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoverService]
    })
  })

  it('should be created', inject([DiscoverService], (service: DiscoverService) => {
    expect(service).toBeTruthy()
  }))
})
