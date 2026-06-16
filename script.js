// =====================================================
// WAVIFY — script.js
// Complete music player functionality
// =====================================================

// ── Sample Data ──────────────────────────────────────

const SONGS = [
  {
    id: 1,
    title: "Midnight Echoes",
    artist: "Luna Voss",
    album: "Celestial Dreams",
    cover: "https://picsum.photos/seed/midnight/300/300",
    duration: 215,
    color: "#1a1a2e"
  },
  {
    id: 2,
    title: "Neon Lights",
    artist: "The Arcade",
    album: "Synthwave Nights",
    cover: "https://picsum.photos/seed/neon/300/300",
    duration: 189,
    color: "#2d1b3d"
  },
  {
    id: 3,
    title: "Ocean Drive",
    artist: "Maya Blue",
    album: "Coastal Vibes",
    cover: "https://picsum.photos/seed/ocean/300/300",
    duration: 243,
    color: "#0d2b3e"
  },
  {
    id: 4,
    title: "Golden Hour",
    artist: "The Velvet",
    album: "Sunset Sessions",
    cover: "https://picsum.photos/seed/golden/300/300",
    duration: 198,
    color: "#3d2b1f"
  },
  {
    id: 5,
    title: "Starlight",
    artist: "Nova Echo",
    album: "Astral Projection",
    cover: "https://picsum.photos/seed/starlight/300/300",
    duration: 267,
    color: "#1a1a3e"
  },
  {
    id: 6,
    title: "Electric Dreams",
    artist: "Pulse Wave",
    album: "Future Retro",
    cover: "https://picsum.photos/seed/electric/300/300",
    duration: 224,
    color: "#1e2a3a"
  },
  {
    id: 7,
    title: "Soulful Strut",
    artist: "Jazz Collective",
    album: "Night Grooves",
    cover: "https://picsum.photos/seed/soulful/300/300",
    duration: 312,
    color: "#2a1a1a"
  },
  {
    id: 8,
    title: "Lost in Tokyo",
    artist: "Sakura Beats",
    album: "City Lights",
    cover: "https://picsum.photos/seed/tokyo/300/300",
    duration: 256,
    color: "#1a1a2a"
  },
  {
    id: 9,
    title: "Waves of Change",
    artist: "Indigo Sky",
    album: "Horizons",
    cover: "https://picsum.photos/seed/waves/300/300",
    duration: 278,
    color: "#0d2a2a"
  },
  {
    id: 10,
    title: "Midnight Drive",
    artist: "Crimson Sound",
    album: "Nocturnal",
    cover: "https://picsum.photos/seed/midnightdrive/300/300",
    duration: 234,
    color: "#2a0d1a"
  },
  {
    id: 11,
    title: "Sunset Boulevard",
    artist: "Coastline",
    album: "West Coast",
    cover: "https://picsum.photos/seed/sunsetblvd/300/300",
    duration: 198,
    color: "#2a1a0d"
  },
  {
    id: 12,
    title: "Echo Park",
    artist: "Urban Soul",
    album: "City Stories",
    cover: "https://picsum.photos/seed/echopark/300/300",
    duration: 245,
    color: "#1a1a1a"
  },
  {
    id: 13,
    title: "Mountain High",
    artist: "Alpine Echo",
    album: "Wilderness",
    cover: "https://picsum.photos/seed/mountain/300/300",
    duration: 289,
    color: "#0d1a0d"
  },
  {
    id: 14,
    title: "Nightfall",
    artist: "Shadow Project",
    album: "Dusk Till Dawn",
    cover: "https://picsum.photos/seed/nightfall/300/300",
    duration: 302,
    color: "#1a0d0d"
  },
  {
    id: 15,
    title: "Rising Sun",
    artist: "Solar Flare",
    album: "New Dawn",
    cover: "https://picsum.photos/seed/risingsun/300/300",
    duration: 267,
    color: "#2a1a0d"
  },
  {
    id: 16,
    title: "Urban Jungle",
    artist: "Metro Beats",
    album: "Concrete Dreams",
    cover: "https://picsum.photos/seed/urban/300/300",
    duration: 213,
    color: "#1a1a2d"
  }
];

const ARTISTS = [
  { id: 1, name: "Luna Voss", followers: "2.4M", cover: "https://picsum.photos/seed/luna/300/300" },
  { id: 2, name: "The Arcade", followers: "1.8M", cover: "https://picsum.photos/seed/arcade/300/300" },
  { id: 3, name: "Maya Blue", followers: "3.1M", cover: "https://picsum.photos/seed/mayablue/300/300" },
  { id: 4, name: "Nova Echo", followers: "1.2M", cover: "https://picsum.photos/seed/nova/300/300" },
  { id: 5, name: "Pulse Wave", followers: "2.7M", cover: "https://picsum.photos/seed/pulse/300/300" },
  { id: 6, name: "Jazz Collective", followers: "890K", cover: "https://picsum.photos/seed/jazz/300/300" }
];

const GENRES = [
  { name: "Pop", color: "#1db954" },
  { name: "Rock", color: "#e74c3c" },
  { name: "Electronic", color: "#3498db" },
  { name: "Jazz", color: "#f39c12" },
  { name: "Classical", color: "#9b59b6" },
  { name: "Hip Hop", color: "#e67e22" },
  { name: "R&B", color: "#1abc9c" },
  { name: "Country", color: "#2ecc71" }
];

const PLAYLISTS = [
  { id: 1, name: "Chill Vibes", songs: [1, 4, 7, 11, 15] },
  { id: 2, name: "Workout Mix", songs: [2, 5, 9, 12, 16] },
  { id: 3, name: "Study Session", songs: [3, 6, 8, 10, 14] },
  { id: 4, name: "Party Anthems", songs: [2, 5, 8, 13, 16] },
  { id: 5, name: "Acoustic Nights", songs: [1, 4, 7, 11, 15] }
];

// ── State ─────────────────────────────────────────────

const state = {
  currentSong: null,
  currentIndex: -1,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  queue: [],
  queueIndex: -1,
  shuffle: false,
  repeat: false,
  likedSongs: JSON.parse(localStorage.getItem('wavify_liked') || '[]'),
  playlists: JSON.parse(localStorage.getItem('wavify_playlists') || JSON.stringify(PLAYLISTS)),
  recentlyPlayed: JSON.parse(localStorage.getItem('wavify_recent') || '[]'),
  searchHistory: JSON.parse(localStorage.getItem('wavify_search') || '[]'),
  currentSection: 'home',
  audio: new Audio()
};

// ── DOM References ────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  loading: $('#loading-screen'),
  app: $('#app'),
  sidebar: $('#sidebar'),
  overlay: $('#sidebar-overlay'),
  menuToggle: $('#menu-toggle'),
  sidebarClose: $('#sidebar-close'),
  navItems: $$('.nav-item'),
  sections: {
    home: $('#section-home'),
    search: $('#section-search'),
    library: $('#section-library'),
    liked: $('#section-liked'),
    playlist: $('#section-playlist')
  },
  player: {
    thumb: $('#player-thumb-img'),
    thumbOverlay: $('.thumb-overlay'),
    trackName: $('#player-track-name'),
    artistName: $('#player-artist-name'),
    playBtn: $('#play-pause-btn'),
    prevBtn: $('#prev-btn'),
    nextBtn: $('#next-btn'),
    shuffleBtn: $('#shuffle-btn'),
    repeatBtn: $('#repeat-btn'),
    progressFill: $('#progress-fill'),
    progressThumb: $('#progress-thumb'),
    progressWrap: $('#progress-bar-wrap'),
    currentTime: $('#current-time'),
    totalTime: $('#total-time'),
    volumeFill: $('#volume-fill'),
    volumeWrap: $('#volume-slider-wrap'),
    muteBtn: $('#mute-btn'),
    likeBtn: $('#player-like-btn'),
    visualizer: $('#mini-visualizer')
  },
  search: {
    input: $('#search-input'),
    inputMain: $('#search-input-main'),
    suggestions: $('#search-suggestions'),
    results: $('#search-results-container')
  },
  hero: {
    title: $('#hero-title'),
    artist: $('#hero-artist'),
    playBtn: $('#hero-play-btn')
  },
  recentlyPlayed: $('#recently-played'),
  trending: $('#trending-songs'),
  artists: $('#popular-artists'),
  playlists: $('#featured-playlists'),
  newReleases: $('#new-releases'),
  recommended: $('#recommended'),
  genreGrid: $('#genre-grid'),
  libraryPlaylists: $('#library-playlists'),
  likedSongsList: $('#liked-songs-list'),
  likedCount: $('#liked-count'),
  likedEmpty: $('#liked-empty'),
  playlistSongsList: $('#playlist-songs-list'),
  playlistHeader: $('#playlist-detail-header'),
  createPlaylistBtn: $('#create-playlist-btn'),
  modal: $('#playlist-modal'),
  modalName: $('#playlist-name-input'),
  modalCreate: $('#modal-create'),
  modalCancel: $('#modal-cancel'),
  modalClose: $('#modal-close'),
  sidebarPlaylists: $('#sidebar-playlists'),
  backBtn: $('#back-btn'),
  fwdBtn: $('#fwd-btn')
};

// ── Utility Functions ────────────────────────────────

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getSongById(id) {
  return SONGS.find(s => s.id === id);
}

function getSongsByIds(ids) {
  return ids.map(id => getSongById(id)).filter(Boolean);
}

function saveLiked() {
  localStorage.setItem('wavify_liked', JSON.stringify(state.likedSongs));
}

function savePlaylists() {
  localStorage.setItem('wavify_playlists', JSON.stringify(state.playlists));
}

function saveRecentlyPlayed() {
  localStorage.setItem('wavify_recent', JSON.stringify(state.recentlyPlayed));
}

function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

// ── Audio Player ──────────────────────────────────────

function loadSong(song, autoPlay = true) {
  if (!song) return;
  
  state.currentSong = song;
  state.audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Math.floor(Math.random() * 10) + 1}.mp3`;
  state.audio.load();
  
  // Update UI
  dom.player.thumb.src = song.cover;
  dom.player.thumbOverlay.classList.add('hidden-overlay');
  dom.player.trackName.textContent = song.title;
  dom.player.artistName.textContent = song.artist;
  
  // Update hero if on home
  if (state.currentSection === 'home') {
    dom.hero.title.textContent = song.title;
    dom.hero.artist.textContent = `by ${song.artist}`;
  }
  
  // Update like button
  updateLikeButton();
  
  // Mark as playing in cards
  $$('.music-card').forEach(c => c.classList.remove('playing'));
  const card = document.querySelector(`.music-card[data-id="${song.id}"]`);
  if (card) card.classList.add('playing');
  
  // Update song rows
  $$('.song-row').forEach(r => r.classList.remove('playing'));
  const row = document.querySelector(`.song-row[data-id="${song.id}"]`);
  if (row) row.classList.add('playing');
  
  if (autoPlay) {
    state.audio.play().catch(() => {});
    state.isPlaying = true;
    updatePlayButton();
  }
  
  // Update recently played
  updateRecentlyPlayed(song);
}

function togglePlay() {
  if (!state.currentSong) {
    // Start with first song
    const firstSong = SONGS[0];
    state.queue = [...SONGS];
    state.queueIndex = 0;
    loadSong(firstSong, true);
    return;
  }
  
  if (state.isPlaying) {
    state.audio.pause();
    state.isPlaying = false;
  } else {
    state.audio.play().catch(() => {});
    state.isPlaying = true;
  }
  updatePlayButton();
}

function updatePlayButton() {
  const icon = dom.player.playBtn.querySelector('i');
  if (state.isPlaying) {
    icon.className = 'fa-solid fa-pause';
    dom.player.visualizer.classList.add('playing');
  } else {
    icon.className = 'fa-solid fa-play';
    dom.player.visualizer.classList.remove('playing');
  }
}

function playNext() {
  if (state.shuffle) {
    const available = state.queue.filter(s => s.id !== state.currentSong?.id);
    if (available.length === 0) {
      state.queue = shuffleArray([...SONGS]);
      state.queueIndex = 0;
    } else {
      const next = available[Math.floor(Math.random() * available.length)];
      const idx = state.queue.findIndex(s => s.id === next.id);
      if (idx !== -1) state.queueIndex = idx;
    }
    loadSong(state.queue[state.queueIndex] || SONGS[0]);
    return;
  }
  
  if (state.repeat && state.currentSong) {
    loadSong(state.currentSong, true);
    return;
  }
  
  if (state.queueIndex < state.queue.length - 1) {
    state.queueIndex++;
    loadSong(state.queue[state.queueIndex], true);
  } else if (state.repeat) {
    state.queueIndex = 0;
    loadSong(state.queue[0], true);
  } else {
    // Stop at end
    state.isPlaying = false;
    updatePlayButton();
  }
}

function playPrevious() {
  if (state.audio.currentTime > 3) {
    state.audio.currentTime = 0;
    return;
  }
  
  if (state.queueIndex > 0) {
    state.queueIndex--;
    loadSong(state.queue[state.queueIndex], true);
  } else {
    state.audio.currentTime = 0;
  }
}

function updateLikeButton() {
  const isLiked = state.currentSong && state.likedSongs.includes(state.currentSong.id);
  const icon = dom.player.likeBtn.querySelector('i');
  if (isLiked) {
    icon.className = 'fa-solid fa-heart';
    dom.player.likeBtn.classList.add('liked');
  } else {
    icon.className = 'fa-regular fa-heart';
    dom.player.likeBtn.classList.remove('liked');
  }
}

function toggleLike() {
  if (!state.currentSong) return;
  const id = state.currentSong.id;
  const idx = state.likedSongs.indexOf(id);
  if (idx === -1) {
    state.likedSongs.push(id);
  } else {
    state.likedSongs.splice(idx, 1);
  }
  saveLiked();
  updateLikeButton();
  renderLikedSongs();
}

function updateRecentlyPlayed(song) {
  const idx = state.recentlyPlayed.indexOf(song.id);
  if (idx !== -1) state.recentlyPlayed.splice(idx, 1);
  state.recentlyPlayed.unshift(song.id);
  if (state.recentlyPlayed.length > 20) state.recentlyPlayed.pop();
  saveRecentlyPlayed();
  renderRecentlyPlayed();
}

// ── Render Functions ─────────────────────────────────

function renderMusicCard(song, type = 'song') {
  const isPlaying = state.currentSong?.id === song.id && state.isPlaying;
  return `
    <div class="music-card ${type}-card ${isPlaying ? 'playing' : ''}" data-id="${song.id}" data-type="${type}">
      <div class="card-art">
        <img src="${song.cover}" alt="${song.title}" loading="lazy" />
        <span class="now-playing-badge">Now Playing</span>
        <button class="card-play-btn" data-id="${song.id}">
          <i class="fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}"></i>
        </button>
      </div>
      <div class="card-title">${song.title}</div>
      <div class="card-subtitle">${song.artist}</div>
    </div>
  `;
}

function renderArtistCard(artist) {
  return `
    <div class="artist-card" data-id="${artist.id}">
      <div class="card-art">
        <img src="${artist.cover}" alt="${artist.name}" loading="lazy" />
      </div>
      <div class="card-title">${artist.name}</div>
      <div class="card-subtitle">${artist.followers} followers</div>
    </div>
  `;
}

function renderSongRow(song, index) {
  const isPlaying = state.currentSong?.id === song.id && state.isPlaying;
  return `
    <div class="song-row ${isPlaying ? 'playing' : ''}" data-id="${song.id}" data-index="${index}">
      <span class="song-num">${isPlaying ? '<i class="fa-solid fa-volume-low"></i>' : index + 1}</span>
      <div class="song-title-cell">
        <div class="song-thumb"><img src="${song.cover}" alt="${song.title}" loading="lazy" /></div>
        <div>
          <div class="song-name">${song.title}</div>
          <div class="song-artist">${song.artist}</div>
        </div>
      </div>
      <span class="song-album">${song.album}</span>
      <span class="song-duration">${formatTime(song.duration)}</span>
    </div>
  `;
}

function renderRecentlyPlayed() {
  const ids = state.recentlyPlayed.slice(0, 6);
  const songs = getSongsByIds(ids);
  if (songs.length === 0) {
    dom.recentlyPlayed.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; padding: 20px;">
        <i class="fa-regular fa-clock" style="font-size:1.5rem;"></i>
        <p style="font-size:0.85rem;">Songs you play will appear here</p>
      </div>
    `;
    return;
  }
  dom.recentlyPlayed.innerHTML = songs.map(s => renderMusicCard(s)).join('');
}

function renderTrending() {
  const trending = shuffleArray([...SONGS]).slice(0, 6);
  dom.trending.innerHTML = trending.map(s => renderMusicCard(s)).join('');
}

function renderArtists() {
  dom.artists.innerHTML = ARTISTS.map(a => renderArtistCard(a)).join('');
}

function renderFeaturedPlaylists() {
  const featured = state.playlists.slice(0, 4);
  dom.playlists.innerHTML = featured.map(p => {
    const firstSong = getSongById(p.songs[0]);
    return `
      <div class="music-card playlist-card" data-playlist-id="${p.id}">
        <div class="card-art">
          <img src="${firstSong?.cover || 'https://picsum.photos/seed/playlist/300/300'}" alt="${p.name}" loading="lazy" />
          <button class="card-play-btn" data-playlist-id="${p.id}">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
        <div class="card-title">${p.name}</div>
        <div class="card-subtitle">${p.songs.length} songs</div>
      </div>
    `;
  }).join('');
}

function renderNewReleases() {
  const releases = [...SONGS].reverse().slice(0, 5);
  dom.newReleases.innerHTML = releases.map(s => renderMusicCard(s)).join('');
}

function renderRecommended() {
  const recommended = shuffleArray([...SONGS]).slice(0, 5);
  dom.recommended.innerHTML = recommended.map(s => renderMusicCard(s)).join('');
}

function renderGenres() {
  dom.genreGrid.innerHTML = GENRES.map(g => `
    <div class="genre-card" style="background: ${g.color};" data-genre="${g.name}">
      <span>${g.name}</span>
    </div>
  `).join('');
}

function renderLibraryPlaylists() {
  dom.libraryPlaylists.innerHTML = state.playlists.map(p => `
    <div class="library-item" data-playlist-id="${p.id}">
      <div class="library-item-art">
        <i class="fa-solid fa-list-ul"></i>
      </div>
      <div class="library-item-info">
        <div class="lib-title">${p.name}</div>
        <div class="lib-subtitle">${p.songs.length} songs</div>
      </div>
    </div>
  `).join('');
}

function renderSidebarPlaylists() {
  dom.sidebarPlaylists.innerHTML = `
    <p class="playlist-list-header">YOUR PLAYLISTS</p>
    ${state.playlists.map(p => `
      <div class="playlist-list-item" data-playlist-id="${p.id}">${p.name}</div>
    `).join('')}
  `;
}

function renderLikedSongs() {
  const songs = getSongsByIds(state.likedSongs);
  dom.likedCount.textContent = `${songs.length} songs`;
  
  if (songs.length === 0) {
    dom.likedSongsList.innerHTML = '';
    dom.likedEmpty.classList.remove('hidden');
    return;
  }
  dom.likedEmpty.classList.add('hidden');
  dom.likedSongsList.innerHTML = songs.map((s, i) => renderSongRow(s, i)).join('');
}

function renderPlaylistDetail(playlistId) {
  const playlist = state.playlists.find(p => p.id === playlistId);
  if (!playlist) return;
  
  const songs = getSongsByIds(playlist.songs);
  const firstSong = songs[0];
  
  dom.playlistHeader.innerHTML = `
    <div class="playlist-header-art" style="background: linear-gradient(135deg, #1db954, #0d7a3a); display:flex; align-items:center; justify-content:center; font-size:3rem; color:white;">
      <i class="fa-solid fa-list-ul"></i>
    </div>
    <div class="playlist-header-info">
      <span class="playlist-type">Playlist</span>
      <h1>${playlist.name}</h1>
      <p>${songs.length} songs</p>
    </div>
  `;
  
  if (songs.length === 0) {
    dom.playlistSongsList.innerHTML = `
      <div class="empty-state" style="padding: 32px;">
        <i class="fa-regular fa-music"></i>
        <p>No songs in this playlist yet</p>
      </div>
    `;
    return;
  }
  
  dom.playlistSongsList.innerHTML = songs.map((s, i) => renderSongRow(s, i)).join('');
}

// ── Search ────────────────────────────────────────────

function performSearch(query) {
  if (!query.trim()) {
    dom.search.results.innerHTML = `
      <p class="search-empty-state"><i class="fa-solid fa-music"></i><br/>Start typing to find music</p>
    `;
    return;
  }
  
  const q = query.toLowerCase().trim();
  const results = SONGS.filter(s => 
    s.title.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q) ||
    s.album.toLowerCase().includes(q)
  );
  
  if (results.length === 0) {
    dom.search.results.innerHTML = `
      <p class="search-empty-state"><i class="fa-regular fa-face-frown"></i><br/>No results found for "${q}"</p>
    `;
    return;
  }
  
  dom.search.results.innerHTML = `
    <div class="search-results-grid">
      ${results.map(s => renderMusicCard(s)).join('')}
    </div>
  `;
}

function updateSearchSuggestions(query) {
  if (!query.trim()) {
    dom.search.suggestions.classList.remove('open');
    return;
  }
  
  const q = query.toLowerCase().trim();
  const matches = SONGS.filter(s => 
    s.title.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q)
  ).slice(0, 5);
  
  if (matches.length === 0) {
    dom.search.suggestions.classList.remove('open');
    return;
  }
  
  dom.search.suggestions.innerHTML = matches.map(s => `
    <div class="suggestion-item" data-id="${s.id}">
      <i class="fa-solid fa-music"></i>
      <span>${s.title} — ${s.artist}</span>
    </div>
  `).join('');
  dom.search.suggestions.classList.add('open');
}

// ── Navigation ────────────────────────────────────────

function showSection(section, data = null) {
  state.currentSection = section;
  
  // Update nav
  dom.navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  
  // Hide all sections
  Object.values(dom.sections).forEach(el => el.classList.remove('active'));
  
  // Show target
  if (section === 'home') dom.sections.home.classList.add('active');
  else if (section === 'search') dom.sections.search.classList.add('active');
  else if (section === 'library') dom.sections.library.classList.add('active');
  else if (section === 'liked') {
    dom.sections.liked.classList.add('active');
    renderLikedSongs();
  } else if (section === 'playlist' && data) {
    dom.sections.playlist.classList.add('active');
    renderPlaylistDetail(data);
  }
  
  // Close sidebar on mobile
  closeSidebar();
}

// ── Sidebar ────────────────────────────────────────────

function openSidebar() {
  dom.sidebar.classList.add('open');
  dom.overlay.classList.add('open');
}

function closeSidebar() {
  dom.sidebar.classList.remove('open');
  dom.overlay.classList.remove('open');
}

// ── Modal ─────────────────────────────────────────────

function openModal() {
  dom.modal.classList.remove('hidden');
  dom.modalName.value = '';
  dom.modalName.focus();
}

function closeModal() {
  dom.modal.classList.add('hidden');
}

function createPlaylist() {
  const name = dom.modalName.value.trim() || 'My Playlist #' + (state.playlists.length + 1);
  const newPlaylist = {
    id: generateId(),
    name: name,
    songs: []
  };
  state.playlists.push(newPlaylist);
  savePlaylists();
  renderSidebarPlaylists();
  renderLibraryPlaylists();
  closeModal();
  showSection('playlist', newPlaylist.id);
}

// ── Event Handlers ────────────────────────────────────

// Audio events
state.audio.addEventListener('loadedmetadata', () => {
  state.duration = state.audio.duration;
  dom.player.totalTime.textContent = formatTime(state.duration);
});

state.audio.addEventListener('timeupdate', () => {
  if (state.audio.duration) {
    const progress = (state.audio.currentTime / state.audio.duration) * 100;
    dom.player.progressFill.style.width = `${progress}%`;
    dom.player.currentTime.textContent = formatTime(state.audio.currentTime);
  }
});

state.audio.addEventListener('ended', () => {
  playNext();
});

state.audio.addEventListener('play', () => {
  state.isPlaying = true;
  updatePlayButton();
});

state.audio.addEventListener('pause', () => {
  state.isPlaying = false;
  updatePlayButton();
});

// Volume
state.audio.volume = state.volume;
dom.player.volumeFill.style.width = `${state.volume * 100}%`;

// ── Player Controls ──────────────────────────────────

// Play/Pause
dom.player.playBtn.addEventListener('click', togglePlay);

// Next
dom.player.nextBtn.addEventListener('click', playNext);

// Previous
dom.player.prevBtn.addEventListener('click', playPrevious);

// Shuffle
dom.player.shuffleBtn.addEventListener('click', () => {
  state.shuffle = !state.shuffle;
  dom.player.shuffleBtn.classList.toggle('active', state.shuffle);
  if (state.shuffle && state.currentSong) {
    state.queue = shuffleArray([...SONGS]);
    state.queueIndex = state.queue.findIndex(s => s.id === state.currentSong.id);
    if (state.queueIndex === -1) {
      state.queueIndex = 0;
    }
  }
});

// Repeat
dom.player.repeatBtn.addEventListener('click', () => {
  state.repeat = !state.repeat;
  dom.player.repeatBtn.classList.toggle('active', state.repeat);
});

// Progress seek
dom.player.progressWrap.addEventListener('click', (e) => {
  if (!state.currentSong) return;
  const rect = dom.player.progressWrap.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  state.audio.currentTime = x * state.audio.duration;
});

// Volume seek
dom.player.volumeWrap.addEventListener('click', (e) => {
  const rect = dom.player.volumeWrap.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  state.volume = x;
  state.audio.volume = x;
  dom.player.volumeFill.style.width = `${x * 100}%`;
  updateVolumeIcon();
});

// Mute
dom.player.muteBtn.addEventListener('click', () => {
  if (state.audio.volume > 0) {
    state.audio.volume = 0;
    dom.player.volumeFill.style.width = '0%';
  } else {
    state.audio.volume = state.volume || 0.7;
    dom.player.volumeFill.style.width = `${state.audio.volume * 100}%`;
  }
  updateVolumeIcon();
});

function updateVolumeIcon() {
  const icon = dom.player.muteBtn.querySelector('i');
  if (state.audio.volume === 0) {
    icon.className = 'fa-solid fa-volume-xmark';
  } else if (state.audio.volume < 0.3) {
    icon.className = 'fa-solid fa-volume-low';
  } else if (state.audio.volume < 0.7) {
    icon.className = 'fa-solid fa-volume-down';
  } else {
    icon.className = 'fa-solid fa-volume-high';
  }
}

// Like
dom.player.likeBtn.addEventListener('click', toggleLike);

// Hero play
dom.hero.playBtn.addEventListener('click', () => {
  if (state.currentSong) {
    togglePlay();
  } else {
    const firstSong = SONGS[0];
    state.queue = [...SONGS];
    state.queueIndex = 0;
    loadSong(firstSong, true);
  }
});

// ── Navigation ──────────────────────────────────────

dom.navItems.forEach(item => {
  item.addEventListener('click', () => {
    showSection(item.dataset.section);
  });
});

// Library tab switching
$$('.lib-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.lib-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // Simple tab switching — just re-render
    renderLibraryPlaylists();
  });
});

// Playlist creation
dom.createPlaylistBtn.addEventListener('click', openModal);
dom.modalClose.addEventListener('click', closeModal);
dom.modalCancel.addEventListener('click', closeModal);
dom.modalCreate.addEventListener('click', createPlaylist);

dom.modalName.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') createPlaylist();
  if (e.key === 'Escape') closeModal();
});

// Search
dom.search.input.addEventListener('input', (e) => {
  updateSearchSuggestions(e.target.value);
});

dom.search.inputMain.addEventListener('input', (e) => {
  performSearch(e.target.value);
});

dom.search.input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    dom.search.suggestions.classList.remove('open');
    const q = e.target.value;
    if (q.trim()) {
      showSection('search');
      dom.search.inputMain.value = q;
      performSearch(q);
    }
  }
});

// Search suggestions click
dom.search.suggestions.addEventListener('click', (e) => {
  const item = e.target.closest('.suggestion-item');
  if (!item) return;
  const id = parseInt(item.dataset.id);
  const song = getSongById(id);
  if (song) {
    dom.search.input.value = song.title;
    dom.search.inputMain.value = song.title;
    dom.search.suggestions.classList.remove('open');
    state.queue = [...SONGS];
    state.queueIndex = state.queue.findIndex(s => s.id === id);
    if (state.queueIndex === -1) state.queueIndex = 0;
    loadSong(song, true);
  }
});

// ── Card Click Handling ──────────────────────────────

document.addEventListener('click', (e) => {
  // Music card click
  const card = e.target.closest('.music-card');
  if (card) {
    const id = parseInt(card.dataset.id);
    const playlistId = parseInt(card.dataset.playlistId);
    
    if (playlistId) {
      showSection('playlist', playlistId);
      return;
    }
    
    const song = getSongById(id);
    if (song) {
      state.queue = [...SONGS];
      state.queueIndex = state.queue.findIndex(s => s.id === id);
      if (state.queueIndex === -1) state.queueIndex = 0;
      loadSong(song, true);
    }
  }
  
  // Play button on card
  const playBtn = e.target.closest('.card-play-btn');
  if (playBtn) {
    e.stopPropagation();
    const card = playBtn.closest('.music-card');
    if (card) {
      const id = parseInt(card.dataset.id);
      const song = getSongById(id);
      if (song) {
        if (state.currentSong?.id === song.id && state.isPlaying) {
          togglePlay();
        } else {
          state.queue = [...SONGS];
          state.queueIndex = state.queue.findIndex(s => s.id === id);
          if (state.queueIndex === -1) state.queueIndex = 0;
          loadSong(song, true);
        }
      }
    }
  }
  
  // Song row click
  const row = e.target.closest('.song-row');
  if (row) {
    const id = parseInt(row.dataset.id);
    const song = getSongById(id);
    if (song) {
      if (state.currentSong?.id === song.id) {
        togglePlay();
      } else {
        const parent = row.closest('.song-list');
        let songs = [];
        if (parent?.id === 'liked-songs-list') {
          songs = getSongsByIds(state.likedSongs);
        } else if (parent?.id === 'playlist-songs-list') {
          // Get current playlist
          const playlistId = state.currentPlaylistId;
          const playlist = state.playlists.find(p => p.id === playlistId);
          if (playlist) songs = getSongsByIds(playlist.songs);
        } else {
          songs = [...SONGS];
        }
        state.queue = songs.length > 0 ? songs : [...SONGS];
        state.queueIndex = state.queue.findIndex(s => s.id === id);
        if (state.queueIndex === -1) state.queueIndex = 0;
        loadSong(song, true);
      }
    }
  }
  
  // Playlist item click
  const plItem = e.target.closest('.playlist-list-item');
  if (plItem) {
    const id = parseInt(plItem.dataset.playlistId);
    showSection('playlist', id);
  }
  
  const libItem = e.target.closest('.library-item');
  if (libItem) {
    const id = parseInt(libItem.dataset.playlistId);
    showSection('playlist', id);
  }
  
  // Artist card click
  const artistCard = e.target.closest('.artist-card');
  if (artistCard) {
    const artistName = artistCard.querySelector('.card-title')?.textContent;
    if (artistName) {
      dom.search.input.value = artistName;
      dom.search.inputMain.value = artistName;
      showSection('search');
      performSearch(artistName);
    }
  }
  
  // Genre card click
  const genreCard = e.target.closest('.genre-card');
  if (genreCard) {
    const genre = genreCard.dataset.genre;
    if (genre) {
      dom.search.input.value = genre;
      dom.search.inputMain.value = genre;
      showSection('search');
      performSearch(genre);
    }
  }
  
  // Liked songs button
  const likedBtn = e.target.closest('.liked-btn');
  if (likedBtn) {
    showSection('liked');
  }
});

// ── Mobile Sidebar ────────────────────────────────────

dom.menuToggle.addEventListener('click', openSidebar);
dom.sidebarClose.addEventListener('click', closeSidebar);
dom.overlay.addEventListener('click', closeSidebar);

// ── Keyboard Shortcuts ───────────────────────────────

document.addEventListener('keydown', (e) => {
  // Space: Play/Pause
  if (e.target.tagName !== 'INPUT' && e.key === ' ') {
    e.preventDefault();
    togglePlay();
  }
  // Arrow right: Next
  if (e.target.tagName !== 'INPUT' && e.key === 'ArrowRight') {
    e.preventDefault();
    playNext();
  }
  // Arrow left: Previous
  if (e.target.tagName !== 'INPUT' && e.key === 'ArrowLeft') {
    e.preventDefault();
    playPrevious();
  }
  // Ctrl+F: Focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault();
    dom.search.input.focus();
  }
  // Escape: Close modals
  if (e.key === 'Escape') {
    closeModal();
    dom.search.suggestions.classList.remove('open');
    closeSidebar();
  }
});

// ── Initialization ────────────────────────────────────

function init() {
  // Simulate loading
  setTimeout(() => {
    dom.loading.classList.add('fade-out');
    dom.app.classList.remove('hidden');
    
    // Render everything
    renderRecentlyPlayed();
    renderTrending();
    renderArtists();
    renderFeaturedPlaylists();
    renderNewReleases();
    renderRecommended();
    renderGenres();
    renderLibraryPlaylists();
    renderSidebarPlaylists();
    renderLikedSongs();
    
    // Set initial state
    state.queue = [...SONGS];
    state.queueIndex = 0;
    
    // Load first song
    const firstSong = SONGS[0];
    state.currentSong = firstSong;
    dom.player.thumb.src = firstSong.cover;
    dom.player.thumbOverlay.classList.add('hidden-overlay');
    dom.player.trackName.textContent = firstSong.title;
    dom.player.artistName.textContent = firstSong.artist;
    dom.hero.title.textContent = firstSong.title;
    dom.hero.artist.textContent = `by ${firstSong.artist}`;
    dom.player.totalTime.textContent = formatTime(firstSong.duration);
    updateLikeButton();
    
    // Preload audio
    state.audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`;
    state.audio.load();
    
    // Show home
    showSection('home');
    
    // Add click to background to close suggestions
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-bar') && !e.target.closest('.search-bar-large')) {
        dom.search.suggestions.classList.remove('open');
      }
    });
    
  }, 1500);
}

// ── Start ─────────────────────────────────────────────

init();

// ── Cleanup ───────────────────────────────────────────

window.addEventListener('beforeunload', () => {
  state.audio.pause();
});

console.log('🎵 Wavify — Music Player Loaded');
console.log(`📀 ${SONGS.length} songs, ${ARTISTS.length} artists, ${state.playlists.length} playlists`);