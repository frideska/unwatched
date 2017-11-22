const POSTER_URL = 'https://image.tmdb.org/t/p/w1280/'
const POSTER_URL_PREVIEW = 'https://image.tmdb.org/t/p/w185'
const MISSING_PATH_POSTER = 'https://i.imgur.com/TqNNtWX.png'
const MISSING_PATH_PREVIEW = 'https://i.imgur.com/yuEGTgZ.png'


export class CardElement {
    public id: string
    public title: string
    public genres: string[]
    public slicedGenres: string[]
    public overview: string
    public overview2: string
    public backdropPath: string
    public image: string
    public poster: string
    public rating: number
    public watchlist: boolean
    public library: boolean
    public date: Date
    public type: string

    constructor({id, title, overview, poster_path, backdrop_path, vote_average, genres, release_date, watchlist, library, media_type}) {

        const o = overview || 'No description'
        const t = title || 'No description'

        this.id = id
        this.title = title
        this.overview = o
        this.image = poster_path ? POSTER_URL_PREVIEW.concat(poster_path) : MISSING_PATH_PREVIEW
        this.overview2 = o
        this.poster = poster_path? POSTER_URL + poster_path : MISSING_PATH_POSTER
        this.backdropPath = POSTER_URL + backdrop_path
        this.rating = vote_average
        this.genres = genres
        this.slicedGenres = this.genres.slice(0, 2)
        this.watchlist = watchlist
        this.library = library
        this.date = new Date(release_date)
        this.type = media_type
    }

}
