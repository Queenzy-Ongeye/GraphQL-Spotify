import { Resolvers } from "./types"

export const resolvers: Resolvers = {
    Query: {
        featuredPlaylists: (_, __, { dataSource }) => {
            return dataSource.spotifyAPI.getFeaturedPlaylists();
        },
        playlist : (_, {id}, {dataSource}) => {
            return dataSource.spotifyAPI.getPlaylist(id)
        },
    }
}