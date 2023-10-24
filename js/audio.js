window.addEventListener('load',function(){
    const title = document.querySelector('.songTitle');
    const audio = document.querySelector('#audio');
    const audioSrc = document.querySelector('#audio source');
    const prevBtn = document.querySelector('.prevSong');
    const nextBtn = document.querySelector('.nextSong');
    const playBtn = document.querySelector('.playBtn');
    const pauseBtn = document.querySelector('.pauseBtn');

    const songs = ['flowers','lofi-beat','pink-cloud'];
    let songIndex = 0;
    title.innerText = songs[songIndex];
    /*audio.src = `audio/${songs[songIndex]}.mp3`;*/
    /*loadSong(songs[songIndex]);*/

    function loadSong(song){
        title.innerText = song;
        audio.src = `audio/${song}.mp3`;
        playMusic();
    }

    function playMusic(){
        audio.classList.add('play');
        audio.classList.remove('pause');
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        audio.play();
    }

    function pauseMusic(){
        audio.classList.add('pause');
        audio.classList.remove('play');
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
        audio.pause();
    }

    function playPrevSong(){
        songIndex--;
        if(songIndex < 0){
            songIndex = songs.length -1;
        }
        loadSong(songs[songIndex]);
        playMusic();
    }

    function playNextSong(){
        songIndex++;
        if(songIndex > songs.length-1){
            songIndex = 0;
        }
        loadSong(songs[songIndex]);
        playMusic();
    }

    playBtn.addEventListener('click', ()=>{
        const playCheck = audio.classList.contains('play');
        if(playCheck){
            pauseMusic();
        }else{
            playMusic();
        }
    });

    pauseBtn.addEventListener('click', ()=>{
        const playCheck = audio.classList.contains('pause');
        if(playCheck){
            playMusic();
        }else{
            pauseMusic();
        }
    });

    prevBtn.addEventListener('click', playPrevSong);
    nextBtn.addEventListener('click', playNextSong);
    audio.addEventListener('ended', playNextSong);
    playBtn.addEventListener('click',playMusic);
    pauseBtn.addEventListener('click',pauseMusic);
});