let currentSong = new Audio();
let songs;
let currFolder; 
let currentSongIndex = 0; // Track current song index


function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

async function getSongs(folder) {
    currFolder = folder;
    // Fetch info.json instead of directory listing
    let a = await fetch(`${window.location.origin}/${currFolder}/info.json`);
    let response = await a.json();
    songs = response.songs || [];
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""; // Clear the existing list
    for (const element of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img src="svg/music.svg" alt="">
                  <div class="info">
                    <div>${element.replaceAll("%20", " ")}</div>
                    <div></div>
                  </div>
                  <div style="display: flex; justify-content: center; align-items: center;"><img class="playglo" src = "svg/playicon.svg" alt = ""></div></li>`
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e, index) => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim(), false, index);
        })
    }) 
}
const playMusic = (track, pause=false, songIndex=0)=>{
    currentSong.src =  `/${currFolder}/` + track;
    currentSongIndex = songIndex; // Set the current song index
    if (!pause){
        currentSong.play();
        play.src = "/svg/pauseicon.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function displayAlbums(){
    let a = await fetch(`${window.location.origin}/songs/index.json`);
    let response = await a.json();
    let cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = ""; // Clear existing content
    
    for (const album of response.albums) {
        cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${album.folder}" class="card ">
              <div class="play" data-folder="${album.folder}">
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#1DB954"/>
                    <polygon points="26,20 26,44 46,32" fill="black"/>
                  </svg>
              </div>
              <img src="/songs/${album.folder}/cover.jpeg" alt="">
              <h2>${album.title}</h2>
              <p>${album.description}</p>
            </div>`
    }

    Array.from(document.getElementsByClassName("card")).forEach((e) => {
        e.addEventListener("click", async item=>{
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
        });
    });

    Array.from(document.getElementsByClassName("play")).forEach((btn) => {
        btn.addEventListener("click", async (e) => {
        e.stopPropagation(); // prevent card click conflict
        const folder = e.currentTarget.dataset.folder;
        await getSongs(`songs/${folder}`);
        playMusic(songs[0], false, 0); // play first song of playlist
    });
});
}

async function main() {
    const play = document.querySelector("#play");
    const previous = document.querySelector("#previous");
    const next = document.querySelector("#next");
    await getSongs("songs/punjabi");
    playMusic(songs[0], true, 0);
    displayAlbums();
    
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "svg/pauseicon.svg";
        } else {
            currentSong.pause();
            play.src = "svg/playicon.svg";
        }
    })

    previous.addEventListener("click", () => {
        if ((currentSongIndex-1) >= 0){
            playMusic(songs[currentSongIndex-1], false, currentSongIndex-1);
        }
    });

    next.addEventListener("click", () => {
        if ((currentSongIndex+1) < songs.length){
            playMusic(songs[currentSongIndex+1], false, currentSongIndex+1);
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        let currentTime = formatTime(currentSong.currentTime);
        let duration = formatTime(currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${currentTime} / ${duration}`;
        document.querySelector(".circle").style.left = `${(currentSong.currentTime / currentSong.duration) * 100}%`;
    });

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (percent / 100) * currentSong.duration;
    })

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
        document.querySelector(".left").style.display = "block";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
        document.querySelector(".left").style.display = "none";
    });
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value)/100;
    });


}
main()

