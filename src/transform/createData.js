export const createData = ( param ) => {
    return {
        img: param.data[0].album.cover,
        album: param.data[0].album.title,
        artist: param.data[0].artist.name,
        idartist: param.data[0].artist.id,
        song: param.data[0].title,
        preview: param.data[0].preview,
        duration: param.data[0].duration
    }
}

export const selectMusic = (param) => {
    return {
        img: param.album.cover,
        album: param.album.title,
        artist: param.artist.name,
        idartist: param.artist.id,
        song: param.title,
        preview: param.preview,
        duration: param.duration
    }
}