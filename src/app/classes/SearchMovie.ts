
import { SearchElement } from 'classes/SearchElement'

const MISSING_PATH = 'http://www.latorredelsol.com/press/components/com_easyblog/themes/wireframe/images/placeholder-image.png'
const PREVIEW_IMG_PATH = 'https://image.tmdb.org/t/p/w185'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w1280'

export class SearchMovie implements SearchElement {
    public id: string
    public video: string
    public title: string
    public content: string
    public image: string
    public poster: string
    public rating: number
    public genres: number[]
    public watchlist: boolean
    public library: boolean
    public date: Date
    public media_type: string

    constructor({id, video, title, name, overview, poster_path, vote_average, genre_ids, release_date, media_type}) {

        const o = overview || 'No description'

        this.id = id
        this.video = video || false
        this.title = title || name
        this.content = (o.length <= 30) ? o : o.substring(0, 150).concat(' (...)')
        this.image = poster_path ? PREVIEW_IMG_PATH.concat(poster_path) : MISSING_PATH
        this.poster = poster_path ? POSTER_PATH.concat(poster_path) : MISSING_PATH
        this.rating = vote_average
        this.genres = genre_ids
        this.watchlist = false
        this.library = false
        this.date = new Date(release_date)
        this.media_type = media_type

    }
}
