
import { SearchElement } from 'classes/SearchElement'

const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'
const PREVIEW_IMG_PATH = 'https://image.tmdb.org/t/p/w185'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280'

export class CardElement {
    public id: string
    public title: string
    public genres: string[]
    public overview: string
    public backdropPath: string
    public poster: string
    public rating: number
    public watchlist: boolean
    public library: boolean
    public date: Date
    public type: string

    constructor({id, title, overview, poster, backdrop_path, vote_average, genres, release_date, watchlist, library, media_type}) {

        const o = overview || 'No description'

        this.id = id
        this.title = title
        this.overview = (o.length <= 30) ? o : o.substring(0, 150).concat(' (...)')
        this.poster = poster ? PREVIEW_IMG_PATH.concat(poster) : MISSING_PATH
        this.backdropPath = backdrop_path ? POSTER_PATH.concat(poster) : MISSING_PATH
        this.rating = vote_average
        this.genres = genres
        this.watchlist = watchlist
        this.library = library
        this.date = new Date(release_date)
        this.type = media_type
    }
}
