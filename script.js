// home-page-carousel//

const carousel = document.querySelectorAll('.carousel img');

let carouselImageIndex = 0;

const changeCarousel = () => {
  carousel[carouselImageIndex].classList.toggle('active');
  if (carouselImageIndex >= carousel.length - 1 ) {
     carouselImageIndex = 0;
  } else {
     carouselImageIndex++
  }
}
carousel[carouselImageIndex].classList.toggle('active');

setInterval(() => {
  changeCarousel();
}, 3000)

// navigate//*//player//

const musicPlayer = document.querySelector('.music-player');

let countPress = 1;

musicPlayer.addEventListener('click', () =>{
  if (countPress >= 2) {
     musicPlayer.classList.add('active');
     countPress = 1;
     return;
  }
  countPress++;
  setTimeout(() =>{
    countPress = 1
  },250);
});

//back btn///

const homeBtn = document.querySelector('.music-player .back-btn');

homeBtn.addEventListener('click', () => {
  musicPlayer.classList.remove('active');
});

//Enable playlists//

const playlistSection = document.querySelector('.playlists');
const navBtn = document.querySelector('.music-player .menu-btn');

navBtn.addEventListener('click', () => {
  playlistSection.classList.add('active');
})

//play-list to music player//

const playlistReturn = document.querySelector('.playlists .back-btn');

playlistReturn.addEventListener('click', () => {
  playlistSection.classList.remove('active');
})

//End-nav//

let currentMusic = 0;

const music = document.querySelector('#audio-src');
const seekBar = document.querySelector('.music-bar');
const songName = document.querySelector('.current-Sname');
const artistName = document.querySelector('.artist');
const coverImage = document.querySelector('.cover');
const queue = document.querySelectorAll('.queue');

//all buttons-selector //

const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlide = document.querySelector('.vloum-slide');

//playBtn-action//

playBtn.addEventListener('click', () => {
  music.play();
  playBtn.classList.remove('active');
  pauseBtn.classList.add('active');
});

//pauseBtn-action//

pauseBtn.addEventListener('click', () => {
  music.pause();
  pauseBtn.classList.remove('active');
  playBtn.classList.add('active');
});

//volume settings//

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;

  music.src = song.path;

  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  coverImage.src = song.cover;

  setTimeout(() => {
     seekBar.max = music.duration;
  },300);
  queue.forEach(item => item.classList.remove('active'));
  queue[currentMusic].classList.add('active');
}

setMusic(0);

//forward Btn//

forwardBtn.addEventListener('click', () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playBtn.click();
});

//backwardBtn//

backwardBtn.addEventListener('click', () => {
  if (currentMusic <= 0) {
    currentMusic = songs.lenght -1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playBtn.click();
});

//Reapeat//

repeatBtn.addEventListener('click', () => {
  repeatBtn.classList.toggle('active');
});

//volume//

volumeBtn.addEventListener('click', () => {
  volumeBtn.classList.toggle('active');
  volumeSlide.classList.toggle('active');
});

volumeSlide.addEventListener('input', () => {
  music.volume = volumeSlide.value;
});

queue.forEach((item, i) => {
  item.addEventListener('click', () => {
    setMusic(i);
    playBtn.click();
  });
});
