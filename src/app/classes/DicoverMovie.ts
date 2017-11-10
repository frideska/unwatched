
const POSTER_URL = 'https://image.tmdb.org/t/p/w1280/'

export class DiscoverMovie {
    public genres: number[]
    public overview: string
    public overview2: string
    public poster: string
    public poster2: string
    public releaseDate: string
    public title: string
    public score: number

    constructor({ genre_ids, overview, backdrop_path, poster_path, release_date, title, vote_average }) {
        this.genres = genre_ids
        this.overview2 = (overview.length <= 30) ? overview : overview.substring(0, 150).concat(' (...)')
        this.overview = overview    
        this.poster = POSTER_URL + backdrop_path
        this.poster2 = POSTER_URL + poster_path
        this.releaseDate = release_date ? '(' + release_date.substring(0, 4) + ')' : release_date
        this.title = title
        this.score = vote_average
    }
}
