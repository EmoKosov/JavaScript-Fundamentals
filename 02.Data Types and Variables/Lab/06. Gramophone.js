function solve(band, album, song)
{
    let songDuratoin = (album.length * band.length) * song.length / 2

    console.log(`The plate was rotated ${Math.ceil(songDuratoin / 2.5)} times.`);
}