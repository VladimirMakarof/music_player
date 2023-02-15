class MusicPlayer {
  constructor() {

    this.src = [
      [
        "ViZZion",
        "Keine Patrioten",
        "./ViZZion - Keine Patrioten.mp3",
        "./ViZZion.jpg"
      ],
      [
        "Vizzion feat. Taktikka",
        "Nique la police",
        "./ViZZion - Nique la police.mp3",
        "./Vizzion_Nique-la-police.jpg"
      ],
      [
        "ViZZion",
        "Unter Verdacht",
        "./ViZZion - Unter Verdacht.mp3",
        "./VuZZion_Unter-Verdacht.jpg"
      ],
      [
        "ViZZion",
        "Maxime",
        "./ViZZion - Maxime.mp3",
        "./ViZZion_albom.jpg"
      ],
      [
        "ViZZion",
        "Vollmond ",
        "./ViZZion - Vollmond.mp3",
        "./ViZZion_albom.jpg"
      ]
    ];
    this.displayTrack = this.displayTrack.bind(this);
    this.addTrackEndedListener = this.addTrackEndedListener.bind(this);
  }

  initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      this.renderList();
      this.displayTrack(0);
      this.addClickHandlers();

      this.audioElement = document.getElementById('audio');
      this.addTrackEndedListener();
      this.audioElement.addEventListener('ended', this.addTrackEndedListener);
    });
  }

  renderList() {
    for (let x = 0; x < this.src.length; x++) {
      let s = this.src[x];
      let number = parseInt(x) + 1;
      let artist = document.createTextNode(number + ": " + s[0]);
      let track_name = document.createTextNode(s[1]);
      let listItem = document.createElement('div');
      let artist_text = document.createElement('h3');
      let track_text = document.createElement('p');

      artist_text.appendChild(artist);
      track_text.appendChild(track_name);

      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);

      listItem.classList.add('item');
      listItem.dataset.index = x;

      document.getElementById('list').appendChild(listItem);
    }
  }

  addClickHandlers() {
    let listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
      el.onclick = () => {
        this.displayTrack(el.dataset.index);
      };
    });
  }

  displayTrack(x) {
    let active = document.querySelector('.is-active');
    if (active) {
      active.classList.remove('is-active');
    }
    let el = document.getElementById('list').children[x];
    el.classList.add('is-active');
    let s = this.src[x],
      artist = s[0],
      track = s[1],
      audio = s[2],
      img = s[3],
      number = parseInt(x) + 1;
    document.getElementById('title').innerText = number + ": " + artist;
    document.getElementById('song_title').innerText = track;
    let albumArt = document.getElementById('art');
    albumArt.src = img;
    albumArt.alt = artist + " " + track;
    document.getElementById('audio').src = audio;

    let audioElement = document.getElementById('audio');
    // audioElement.addEventListener('ended', () => {

    audioElement.removeEventListener('ended', this.addTrackEndedListener);
    // let currentIndex = parseInt(document.querySelector('.is-active').dataset.index);
    // let nextIndex = (currentIndex + 1) % this.src.length;
    // console.log('new Date.now()');
    // this.displayTrack(nextIndex);
    // });
  }

  addTrackEndedListener() {
    const audioElement = document.getElementById('audio');
    audioElement.addEventListener('ended', () => {
      let currentIndex = parseInt(document.querySelector('.is-active').dataset.index);
      let nextIndex = (currentIndex + 1) % this.src.length;
      this.displayTrack(nextIndex);
    });
  }


}

const musicPlayer = new MusicPlayer();
musicPlayer.initialize();