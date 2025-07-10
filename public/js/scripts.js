// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Logic
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal iframe');
const closeModal = document.querySelector('.close');

function openModal(videoId) {
    modalContent.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
}

closeModal?.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.src = '';
});

// Playlist Data (manually curated to prevent external videos)
const playlists = [
    {
        id: 'PLem8JT3VgC9pV7pxl2hLpPEjLXA4WZt_c',
        title: 'A/L ICT Playlist 1',
        videos: [
            { id: 'video_id_1', thumbnail: 'https://img.youtube.com/vi/video_id_1/mqdefault.jpg', title: 'Video 1' },
            // Add more video IDs and thumbnails as needed
        ]
    },
    {
        id: 'PLem8JT3VgC9rUJRb7DIEJ1wKE2zv5ioEB',
        title: 'A/L ICT Playlist 2',
        videos: [
            { id: 'video_id_2', thumbnail: 'https://img.youtube.com/vi/video_id_2/mqdefault.jpg', title: 'Video 2' },
            // Add more video IDs and thumbnails as needed
        ]
    }
];

// Render Playlists
function renderPlaylists() {
    const grid = document.querySelector('.playlist-grid');
    if (!grid) return;

    playlists.forEach(playlist => {
        playlist.videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'playlist-card';
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
            `;
            card.addEventListener('click', () => openModal(video.id));
            grid.appendChild(card);
        });
    });
}

document.addEventListener('DOMContentLoaded', renderPlaylists);

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Smooth Scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

