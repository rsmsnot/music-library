class Library {
    constructor(name, creator) {
        this.name = name
        this.creator = creator
        this.playlists = []
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist)
    }
}

class Playlist {
    constructor(name, creator) {
        this.name = name
        this.tracks = []
    }

    addTracks(track) {
        this.tracks.push(track)
    }

    overallRating(playlist) {
        let sumRatings = 0;
        for (let i = 0; i < this.tracks.length; i++ ){
            sumRatings += this.tracks[i].rating
        }
        return (sumRatings / this.tracks.length)
    }

    totalDuration(playlist) {
        let totalLength = 0
        for (let i = 0; i < this.tracks.length; i++) {
            // console.log(this.tracks.length);
            totalLength += this.tracks[i].duration
        }
        return totalLength;
    }
}

class Track {
    constructor(title, artist, rating, duration) {
        this.title = title
        this.artist = artist
        this.rating = rating
        this.duration = duration
    }
}

let newLibrary = new Library('My Music', 'Ryan');
// console.log(newLibrary);

let newPlaylist = new Playlist('Motown');
// console.log(newPlaylist);
newLibrary.addPlaylist('Motown');
// console.log(newLibrary.playlists);

let track1 = new Track ('This Old Heart of Mine', 'The Isley Brothers', 5, 166);
let track2 = new Track ('Band of Gold', 'Freda Payne', 4, 173);
let track3 = new Track ('The Tears of a Clown', 'Smokey Robinson', 4, 185);

// console.log(track1);

newPlaylist.addTracks(track1);
newPlaylist.addTracks(track2);
newPlaylist.addTracks(track3);
// console.log(newPlaylist.tracks);

console.log(newPlaylist.overallRating())
console.log(newPlaylist.totalDuration())

