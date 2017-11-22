import { TestBed, inject } from '@angular/core/testing'

import { DetailsService } from 'services/details/details.service'
import { HttpModule } from '@angular/http'

describe('DetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        DetailsService
      ]
    })
  })

  it('should be created', inject([DetailsService], (service: DetailsService) => {
    expect(service).toBeTruthy()
  }))
})
