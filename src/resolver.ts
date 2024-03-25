export const resolvers = {
    Query:{
        featuredPlaylists:( _, _, {datasource}:any ) =>{
            return datasource.SpotifyAPI.getFeaturedPlaylists()

        }
    }
}