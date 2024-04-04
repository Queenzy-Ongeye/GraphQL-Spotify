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
        tracks: ({ tracks }) => {
            const { items = [] } = tracks
            return items.map(({ track }) => track);
        }
    },
    Tracks: {
        duration_ms: (parent) => parent.duration_ms
    },
    Mutation: {
        addItemsToPlaylist: async (_, { input }, { dataSource }) => {
            try {
                const response = await dataSource.spotifyAPI.addItemsToPlaylist(input);
                if (response.snapshot_id) {
                    return {
                        code: 200,
                        success: true,
                        message: "Tracks added to playlist!",
                        playlistId: response.snapshot_id,
                    };
                } else {
                    throw Error("snapshot_id property not found");
                }
            } catch (e) {
                return {
                    code: 500,
                    success: false,
                    message: `Something went wrong: ${e}`,
                    playlistId: null,
                };
            }
        },
    },
    AddItemsToPlaylistPayload: {
        playlist: ({playlistId}, _, {dataSource}) => {
            return dataSource.spotifyAPI.getPlaylist(playlistId)
        }
    }
}