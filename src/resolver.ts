import { Resolvers } from "./types"

export const resolvers: Resolvers = {
    Query:{
        featuredPlaylists:( _, _, {datasource}) =>{
            return datasource.SpotifyAPI.getFeaturedPlaylists()

        }
    }
}