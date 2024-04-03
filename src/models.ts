// Represents a playlist object returned by the REST API
export type PlaylistModel = {
    id: string
    name: string
    description: string
    tracks: {
        items: {
            track: TrackModel;
        }[]
    }
}

export type TrackModel = {
    id: string;
    name: string
    explicit: string
    duration_ms: number
    uri: string
}