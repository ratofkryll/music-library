function Library(name, creator) {
  name: this.name,
  creator: this.creator,
  playlists: []
}

Library.prototype.addPlaylist() {

}


function Playlist(name) {
  name: this.name,
  tracks: []
}

Playlist.prototype.addTracks() {

}

Playlist.prototype.overallRating() {

}

Playlist.prototype.totalDuration() {

}


function Track(title, rating, length) {
  title: this.title,
  rating: this.rating,
  length: this.length
}
