var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("playPauseButton");
var albumCover = document.getElementById("albumCover");

var audioFiles = [
    {
        src: "songs/weekend.mp3",
        artist: "Feng",
        song: "Weekend",
        image: "pfps/weekend.png"
    },
    {
        src: "songs/walk.mp3",
        artist: "Feng",
        song: "Walk In The Park",
        image: "pfps/walk.png"
    },
    {
        src: "songs/mia.mp3",
        artist: "Feng",
        song: "M.I.A",
        image: "pfps/mia.png"
    },
    {
        src: "songs/girl.mp3",
        artist: "Feng",
        song: "Girl",
        image: "pfps/girl.png"
    },
    {
        src: "songs/kids.mp3",
        artist: "Feng",
        song: "kids from the west",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/soul.mp3",
        artist: "Feng",
        song: "Soul 2 soul",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/memories.mp3",
        artist: "Feng",
        song: "Memories",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/yolo.mp3",
        artist: "Feng",
        song: "YOLO",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/aiya.mp3",
        artist: "Feng",
        song: "Aiya Napa",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/xy2.mp3",
        artist: "Feng",
        song: "XY",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/USA.mp3",
        artist: "Feng",
        song: "Left for USA",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/wanna.mp3",
        artist: "Feng",
        song: "Who do u wanna be",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/mum.mp3",
        artist: "Feng",
        song: "Mum, im an artist",
        image: "pfps/wtfeng.png"
    },
    {
        src: "songs/world.mp3",
        artist: "Feng",
        song: "Me vs the world",
        image: "pfps/wtfeng.png"
    },
];

var artist = document.getElementById("artist");
var songTitle = document.getElementById("songTitle");

var shuffledAudioFiles = shuffleArray(audioFiles);
var currentAudioIndex = 0;

audio.addEventListener("ended", function() {
    nextAudio();
});

function playMedia() {
    audio.play();
    document.getElementById("overlays").classList.add("fade-out");
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<img src='icons/pause.png'>";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "<img src='icons/play.png'>";
    }
}

function nextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % shuffledAudioFiles.length;
    loadAudio(currentAudioIndex);
}

function previousAudio() {
    if (audio.currentTime <= 3) {
        currentAudioIndex = (currentAudioIndex - 1 + shuffledAudioFiles.length) % shuffledAudioFiles.length;
    } else {
        audio.currentTime = 0;
    }
    loadAudio(currentAudioIndex);
}

function loadAudio(index) {
    var audioFile = shuffledAudioFiles[index];
    audio.src = audioFile.src;
    artist.textContent = audioFile.artist;
    songTitle.textContent = audioFile.song;
    albumCover.src = audioFile.image;
    audio.play();
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

audio.src = shuffledAudioFiles[0].src;
audio.play();
loadAudio(0);
