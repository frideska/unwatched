export class GoogleUser {
    image: string
    name: string
    admin: boolean
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    token: string
    firstName: string
    lastName: string

    constructor(user) {
        this.image = user.image
        this.name = user.name
        this.admin = user.admin
        this.id = user.id
        this.createdAt = new Date(user.createdAt)
        this.updatedAt = new Date(user.updatedAt)
        this.email = user.email
        this.token = user.token
        this.firstName = user.firstName
        this.lastName = user.lastName
    }
}
