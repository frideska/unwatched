import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

class GoogleUser {
    image: string
    name: string
    admin: boolean
    id: string
    date: string
    updated: string
    email: string
    token: string

    constructor(user) {
        this.image = user.google.image
        this.name = user.google.name
        this.admin = user.admin
        this.id = user.google.id
        this.date = user.date
        this.updated = user.updated
        this.email = user.google.email
        this.token = user.google.token
    }
}



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    private user: GoogleUser

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
       this.http.get('/auth/profile').subscribe((data) => {
           this.user = new GoogleUser(data)
           console.log(this.user)
       })
    }
}
