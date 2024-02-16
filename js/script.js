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
    this.songs.forEach((song, i) => {
      const listItem = document.createElement('div');
      listItem.className = 'item';
      listItem.dataset.index = i;

      listItem.innerHTML = `
        <h3>${i + 1}: ${song.artist}</h3>
        <p>${song.track}</p>
      `;

      listElement.appendChild(listItem);
    });
  }

  addClickHandlers() {
    const listItems = document.querySelectorAll('.item');
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        this.displayTrack(index);
      });
    });
  }

  displayTrack(index) {
    if (this.currentSongIndex !== index) {
      this.currentSongIndex = index;
      const selectedSong = this.songs[index];

      document.querySelector('.is-active')?.classList.remove('is-active');
      document.getElementById('list').children[index].classList.add('is-active');

      document.getElementById('title').innerText = `${index + 1}: ${selectedSong.artist}`;
      document.getElementById('song_title').innerText = selectedSong.track;
      document.getElementById('art').src = selectedSong.artURL;
      document.getElementById('art').alt = `${selectedSong.artist} ${selectedSong.track}`;
      this.audioElement.src = selectedSong.audioURL;
    }
  }

  addTrackEndedListener() {
    this.audioElement.onended = () => {
      const nextIndex = (this.currentSongIndex + 1) % this.songs.length;
      this.displayTrack(nextIndex);
    };
  }
}

const musicPlayer = new MusicPlayer();
musicPlayer.initialize();
