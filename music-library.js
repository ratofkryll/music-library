function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

Library.prototype.addPlaylist = function(playlist) {
 this.playlists.push(playlist);
}


function Playlist(name) {
  this.name = name,
  this.tracks = []
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let overallRating = 0;
  this.tracks.forEach((track) => {
    overallRating += track.rating;
  });
  return overallRating / this.tracks.length;
}

Playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach((track) => {
    totalDuration += track.duration;
  });
  return totalDuration / 60;
}


function Track(artist, title, rating, duration) {
  this.artist = artist,
  this.title = title,
  this.rating = rating,
  this.duration = duration
}

const track1 = new Track('Arctic Monkeys', 'You Probably Couldn\'t See For the Lights but You Were Staring Straight at Me', 5, 130);
const track2 = new Track('The Dreadnoughts', 'Mary the One-Eyed Prostitute, Who Fought the Colossal Squid and Saved Us from Certain Death on the High Seas, God Rest Her One-Eyed Soul', 4, 306);
const track3 = new Track('NoFX', 'The Decline', 3, 1100);
const track4 = new Track('Gio', 'Can You See the Theme?', 1, 1400);

const codingTunes = new Playlist('Coding Tunes');
codingTunes.addTrack(track1);
codingTunes.addTrack(track2);
codingTunes.addTrack(track3);
codingTunes.addTrack(track4);

console.log('Coding Tunes Overall Rating:', codingTunes.overallRating(), 'stars.');
console.log('Coding Tunes Total Duration:', codingTunes.totalDuration(), 'minutes.');

const lighthouse = new Library('Lighthouse Labs', 'Gio');
lighthouse.addPlaylist(codingTunes);
console.log('Music Library:', lighthouse);
console.log('Music Library Playlists:', lighthouse.playlists);
console.log('Music Library Playlist Tracks:', lighthouse.playlists[0].tracks);
