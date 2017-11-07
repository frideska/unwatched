export class GoogleUser {
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
