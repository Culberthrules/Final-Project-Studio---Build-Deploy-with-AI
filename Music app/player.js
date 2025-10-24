const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const genreButtons = document.querySelectorAll(".quick-search button");
const trackList = document.getElementById("track-list");
const audioPlayer = document.getElementById("audio-player");

const coverImage = document.getElementById("cover-image");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");

const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const progressBar = document.getElementById("progress-bar");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const volumeBar = document.getElementById("volume-bar");

let currentTrack = null;

// 🔍 Search Deezer API
function searchTracks(query) {
  fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp`)
    .then(response => response.text())
    .then(data => {
      const json = JSON.parse(data.replace(/^jsonp\((.*)\);$/, "$1"));
      displayTracks(json.data);
    })
    .catch(error => console.error("Search error:", error));
}

// 🎵 Display search results
function displayTracks(tracks) {
  trackList.innerHTML = "";
  tracks.forEach(track => {
    const item = document.createElement("div");
    item.className = "track-item";
    item.innerHTML = `
      <img class="track-cover" src="${track.album.cover_medium}" alt="${track.title} cover">
      <div class="track-details">
        <p class="track-title">${track.title}</p>
        <p class="track-artist">${track.artist.name}</p>
      </div>
      <div class="track-duration">${formatTime(track.duration)}</div>
    `;
    item.addEventListener("click", () => playTrack(track));
    trackList.appendChild(item);
  });
}

// ▶️ Play selected track
function playTrack(track) {
  currentTrack = track;
  audioPlayer.src = track.preview;
  audioPlayer.play();

  coverImage.src = track.album.cover_medium;
  songTitle.textContent = track.title;
  artistName.textContent = track.artist.name;

  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

// ⏸️ Pause playback
pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
});

playBtn.addEventListener("click", () => {
  if (currentTrack) {
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  }
});

// 🔊 Volume control
volumeBar.addEventListener("input", () => {
  audioPlayer.volume = volumeBar.value / 100;
});

// ⏱️ Progress bar update
audioPlayer.addEventListener("timeupdate", () => {
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = percent || 0;
  currentTime.textContent = formatTime(audioPlayer.currentTime);
  duration.textContent = formatTime(audioPlayer.duration);
});

// ⏮️ Seek
progressBar.addEventListener("input", () => {
  if (audioPlayer.duration) {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
  }
});

// 🔤 Format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// 🔍 Search button
searchBtn.addEventListener("click", () => {
  const query = searchBar.value.trim();
  if (query) searchTracks(query);
});

// 🎧 Genre buttons
genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const genre = button.getAttribute("data-genre");
    searchTracks(genre);
  });
});