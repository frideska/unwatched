export class GoogleUser {
    image: string
    name: string
    admin: boolean
    id: string
    date: string
    updated: string
    email: string
    token: string
    firstName: string
    lastName: string

    constructor(user) {
        this.image = user.image
        this.name = user.name
        this.admin = user.admin
        this.id = user.id
        this.date = user.date
        this.updated = user.updated
        this.email = user.email
        this.token = user.token
        this.firstName = user.firstName
        this.lastName = user.lastName
    }
}
