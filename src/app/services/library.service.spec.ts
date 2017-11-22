import { TestBed, inject } from '@angular/core/testing'

import { LibraryService } from 'services/library.service'
import { HttpModule } from '@angular/http'

describe('LibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        LibraryService
      ]
    })
  })

  it('should be created', inject([LibraryService], (service: LibraryService) => {
    expect(service).toBeTruthy()
  }))
})
