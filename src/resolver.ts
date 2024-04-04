import { Resolvers, Tracks } from "./types"

export const resolvers: Resolvers = {
    Query: {
        featuredPlaylists: (_, __, { dataSource }) => {
            return dataSource.spotifyAPI.getFeaturedPlaylists();
        },
        playlist: async (_, { id }, { dataSource }) => {
            // const {
            //   id: playlistId,
            //   name,
            //   description,
            //   tracks: { items = [] } = {},
            // } = await dataSource.spotifyAPI.getPlaylist(id);
          
            // const newTrackItems = items.map(({ track }: { track: Tracks }) => {
            //   const { id, name, durationMs, explicit, url } = track;
            //   return { id, name, durationMs: durationMs, explicit, url };
            // });
          
            return dataSource.spotifyAPI.getPlaylist(id);
          },
    },
    Playlist: {
        tracks: ({tracks}) => {
            const {items = [] } = tracks
            return items.map(({track}) => track);
        }
    },
    Tracks :{
        duration_ms: (parent) => parent.duration_ms
    }
}