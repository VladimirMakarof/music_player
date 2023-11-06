class MusicPlayer {
  constructor() {
    this.songs = [
      {
        artist: "ViZZion",
        track: "Keine Patrioten",
        audioURL: "./mp3/ViZZion - Keine Patrioten.mp3",
        artURL: "./img/ViZZion.jpg"
      },
      {
        artist: "Vizzion feat. Taktikka",
        track: "Nique la police",
        audioURL: "./mp3/ViZZion - Nique la police.mp3",
        artURL: "./img/Vizzion_Nique-la-police.jpg"
      },
      {
        artist: "ViZZion",
        track: "Unter Verdacht",
        audioURL: "./mp3/ViZZion - Unter Verdacht.mp3",
        artURL: "./img/VuZZion_Unter-Verdacht.jpg"
      },
      {
        artist: "ViZZion",
        track: "Maxime",
        audioURL: "./mp3/ViZZion - Maxime.mp3",
        artURL: "./img/ViZZion_albom.jpg"
      },
      {
        artist: "ViZZion",
        track: "Vollmond ",
        audioURL: "./mp3/ViZZion - Vollmond.mp3",
        artURL: "./img/ViZZion_albom.jpg"
      }
    ];

    this.currentSongIndex = 0;
    this.audioElement = document.getElementById('audio');

    this.displayTrack = this.displayTrack.bind(this);
    this.addTrackEndedListener = this.addTrackEndedListener.bind(this);
  }

  initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      this.renderList();
      this.displayTrack(this.currentSongIndex);
      this.addClickHandlers();
      this.addTrackEndedListener();
    });
  }

  renderList() {
    const listElement = document.getElementById('list');
    for (let i = 0; i < this.songs.length; i++) {
      const song = this.songs[i];

      const listItem = document.createElement('div');
      listItem.classList.add('item');
      listItem.dataset.index = i;

      const songNumber = i + 1;
      const songArtist = document.createTextNode(`${songNumber}: <span class="math-inline">\{song\.artist\}\`\);
const songTrack \= document\.createTextNode\(song\.track\);
const artistElement \= document\.createElement\('h3'\);
artistElement\.appendChild\(songArtist\);
const trackElement \= document\.createElement\('p'\);
trackElement\.appendChild\(songTrack\);
listItem\.appendChild\(artistElement\);
listItem\.appendChild\(trackElement\);
listElement\.appendChild\(listItem\);
\}
\}
addClickHandlers\(\) \{
const listItems \= document\.querySelectorAll\('\.item'\);
listItems\.forEach\(el \=\> \{
el\.onclick \= \(\) \=\> \{
this\.displayTrack\(parseInt\(el\.dataset\.index\)\);
\};
\}\);
\}
displayTrack\(index\) \{
const activeElement \= document\.querySelector\('\.is\-active'\);
if \(activeElement\) \{
activeElement\.classList\.remove\('is\-active'\);
\}
const selectedSong \= this\.songs\[index\];
const selectedItem \= document\.getElementById\('list'\)\.children\[index\];
selectedItem\.classList\.add\('is\-active'\);
document\.getElementById\('title'\)\.innerText \= \`</span>{index + 1}: <span class="math-inline">\{selectedSong\.artist\}\`;
document\.getElementById\('song\_title'\)\.innerText \= selectedSong\.track;
const albumArt \= document\.getElementById\('art'\);
albumArt\.src \= selectedSong\.artURL;
albumArt\.alt \= \`</span>{selectedSong.artist} ${selectedSong.track}`;

    document.getElementById('audio').src = selectedSong.audioURL;
    this.audioElement.addEventListener('ended', this.addTrackEndedListener);
  }

  addTrackEndedListener() {
    this.audioElement.addEventListener('ended', () => {
      const nextIndex = (this.currentSongIndex + 1) % this.songs.length;
      this.displayTrack(nextIndex);
    });
  }
}

const musicPlayer = new MusicPlayer();
musicPlayer.
