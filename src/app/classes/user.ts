export class GoogleUser {
    image: string
    name: string
    admin: boolean
    id: string
    date: Date
    updated: Date
    email: string
    token: string
    firstName: string
    lastName: string

    constructor(user) {
        this.image = user.image
        this.name = user.name
        this.admin = user.admin
        this.id = user.id
        this.date = new Date(user.date)
        this.updated = new Date(user.updated)
        this.email = user.email
        this.token = user.token
        this.firstName = user.firstName
        this.lastName = user.lastName
    }
}
