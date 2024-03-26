import { SpotifyAPI } from "./datasource/spotify-api"

export type DataSourceContext = {
    dataSource : {
        spotifyAPI: SpotifyAPI
    }
}