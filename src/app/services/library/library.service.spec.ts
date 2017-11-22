import { TestBed, inject } from '@angular/core/testing'

import { LibraryService } from 'services/library/library.service'
import { HttpModule } from '@angular/http'

class MockLibraryService {
  
}

describe('LibraryService', () => {
  let service: LibraryService
  let htmlElement: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ], providers: [[{
        provide: LibraryService,
        userClass: MockLibraryService
      }]]
    })
  })

  it('should be created', inject([LibraryService], (service: LibraryService) => {
    expect(service).toBeTruthy()
  }))

  it('should toggle list view button', () => {
   expect(service.listView).toBeFalsy()
   service.toggleListView()
   expect(service.listView).toBeTruthy()
 })
})
