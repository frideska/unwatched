import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'
import { SearchService } from './services/search.service'
import { HttpModule } from '@angular/http'
import { UserService } from 'services/user.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ], providers: [
        SearchService,
        UserService
      ]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
