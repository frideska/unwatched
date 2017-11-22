
export class HistoryElement {
    public date: Date
    public title: string
    public type: string
    public id: number

    constructor({date, Movie, Series}) {
        this.date = new Date(date)
        if (Movie) {
            this.type = 'movie'
            this.title = Movie.title
            this.id = Movie.id
        } else if (Series) {
            this.type = 'tv'
            this.title = Series.title
            this.id = Series.id
        } else {
            throw new Error('HistoryElement given no Type!')
        }
    }
}
