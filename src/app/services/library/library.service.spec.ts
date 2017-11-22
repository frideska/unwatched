import { TestBed, inject } from '@angular/core/testing'

import { LibraryService } from 'services/library/library.service'
import { HttpModule } from '@angular/http'

describe('LibraryService', () => {
  let service: LibraryService;
  let htmlElement: HTMLElement;

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

  it('should toggle list view button', () => {
   expect(service.listView).toBeFalsy()
   service.toggleListView()
   expect(service.listView).toBeTruthy()
 })
})
