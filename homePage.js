
// let countDiv = document.querySelector('.count');
let songImage = document.querySelector('#songImage');
let songName = document.querySelector('.songName');
let artistName = document.querySelector('.artistName');
let songField = document.querySelector('#songField');
// let controls = document.querySelector('.controls');
var current = 0;
var totalSongs = 0;
// var myRange = document.querySelector('#myRange');
var audioSlider = document.getElementById("myRange");

var startTime = document.querySelector('#currentTime');
var endTime = document.querySelector('#endTime');
var startMinute;
var startSecond;
var endMinute;
var endSecond;
let volumeSlider = document.getElementById('audioSlider')

// console.log(myRange);
// let someValue = 0;
// let myValue = 0;
let totalTime = 0;
function previousSong() {
    // console.log("Previous");
    let songPaused = songField.paused;
    // console.log('songPaused',songPaused);
    
    if(songPaused == true){
        songField.play();
        playPaused.src = './pause-button.png'
        // console.log("Playing");
        // songPlaying = true;
        // songPaused = false;
        // console.log(songPlaying);
    }
    else{
        // console.log('Paused');
        songField.pause();
        playPaused.src = './play-button-arrowhead.png'
        // songPaused = true;
        // songPlaying = false;
    }
    current -= 1;
    if(current<0){
        current = totalSongs-1;
    }
    // console.log(songField.duration);
    // console.log(songField.duration);

    // console.log(current);
    // return current
    allSongs(current)
}

// function pauseSong() {
//     songField.pause();
//     // console.log(songField.duration);
//     // console.log(songField.duration);
    
// }

// function playSong() {
//     songField.play();
//     // console.log(songField.duration);
//     // this.totalTime = songField.duration;
//     // console.log(songPlaying);
//     // console.log(this.totalTime);
//     // songField.addEventListener('ended',function nextSong(){
//     //     current = current +1;
//     //     allSongs(current)
//     // })
// }
// console.log(songPaused);

let playPaused = document.getElementById('playPaused');
let playPause = () => {
    let songPaused = songField.paused;
    // console.log('playPause',songPaused);
        
    if(songPaused == true){
        songField.play();
        playPaused.src = './pause-button.png'
        // console.log("Playing");
        // songPlaying = true;
        // songPaused = false;
        // console.log(songPlaying);
    }
    else{
        // console.log('Paused');
        songField.pause();
        playPaused.src = './play-button-arrowhead.png'
        // songPaused = true;
        // songPlaying = false;
    }
}
// console.log(this.totalTime);
function nextSong() {
    // console.log("Previous");
    let songPaused = songField.paused;
    // console.log('nextSong',songPaused);
    if(songPaused == true){
        songField.play();
        playPaused.src = './play-button-arrowhead.png'
        // console.log("Paused");
        // songPlaying = true;
        // songPaused = false;
        // console.log(songPlaying);
    }
    else{
        // console.log('Playing');
        songField.pause();
        playPaused.src = './pause-button.png'
        // songPaused = true;
        // songPlaying = false;
    }
    current += 1;
    if(current>totalSongs-1){
        // current = current%totalSongs;
        current %=totalSongs;
    }
    // console.log(totalSongs);
    // console.log(current);
    // return current;
    allSongs(current)
    // console.log(totalTime);
    
}
// console.log(current);


let allSongs = (current) => 
fetch('./music_files.json')
.then( res => {
    return res.json();
    
})
.then( data => {
    // console.log(data);
    var lengthOfArr = data.length
    // debugger;
    this.totalSongs = lengthOfArr;
    // console.log(totalTime);
    // countDiv.innerHTML = `playing ${data[current].id} of ${lengthOfArr}`
    songImage.src = data[current].songBgImage;
    songName.innerHTML = data[current].songName;
    artistName.innerHTML = data[current].artistName;
    songField.src = data[current].songSrc;
    // console.log(songField.duration);
    // console.log(totalSongs);
    songField.autoplay = true;
    // songField.autostart = true;
    
    let songPaused = songField.paused;
    // console.log('songPaused',songPaused);
    


    if(songPaused == true){
        // songField.play();
        // console.log('Paused');
        playPaused.src = './pause-button.png'
        // songPlaying = true;
        // songPaused = false;
        // console.log(songPlaying);
    }
    else{
        // songField.pause();
        // console.log("Playing");
        playPaused.src = './play-button-arrowhead.png'
        // songPaused = true;
        // songPlaying = false;
    }

    // let selectSong = () => {
    //     // console.log("Select Song");
    //     console.log(id);
    // }

    
})

let listOfSongs = () => {
    fetch('./music_files.json')
    .then( res => {
        return res.json();
    })
    .then( data => {
        
        for (const key in data) {
            // console.log(data[key]);
            var songList = document.querySelector('.songDiv');
            // console.log(songList);

            var newSongs = document.createElement('div');
            var newImageDiv = document.createElement('div');
            var newSongInfoDiv = document.createElement('div');
            var newImage = document.createElement('img');
            var newSongName = document.createElement('div');
            var newSongArtistName = document.createElement('div');
            newSongs.className = 'songList'
            newSongInfoDiv.className = 'songListInfo'
            // newSongName.className = 'artistName'
            // console.log(data[element].);
            // newSongs.onclick = function() {
            //     // allSongs(key)
            //     console.log(data[key]);
            //     playSelectedSong(data[key])
            // }
            newSongs.onclick = function() {
                // allSongs(key)
                console.log(data[key]);
                playSelectedSong(data[key])
            }
            newImage.src = `${data[key].songBgImage}`
            newSongName.innerHTML = `${data[key].songName}`;
            newSongArtistName.innerHTML = `${data[key].artistName}`
            // newSongs.innerHTML = `${data[element].songName}`
            newImageDiv.appendChild(newImage);
            newSongInfoDiv.appendChild(newSongName);
            newSongInfoDiv.appendChild(newSongArtistName)
            newSongs.appendChild(newImageDiv);
            newSongs.appendChild(newSongInfoDiv)
            songList.appendChild(newSongs)
            // newSongs.appendChild(newImage)
            // newSongs.appendChild(newSongName)
            // newSongs.appendChild(newSongArtistName)
            // songList.appendChild(newSongs)
            // newSongs.appendChild(newImage)
            // songList.appendChild(newSongs)
            // console.log(newSongs);
        }
    })
}

listOfSongs();

let playSelectedSong = (data) => {
    current = data.id - 1;
    var currentIndex = find(allSongs(data));
    var lengthOfArr = data.length
    // debugger;
    this.totalSongs = lengthOfArr;
    // console.log(totalTime);
    // countDiv.innerHTML = `playing ${data[current].id} of ${lengthOfArr}`
    songImage.src = data.songBgImage;
    songName.innerHTML = data.songName;
    artistName.innerHTML = data.artistName;
    songField.src = data.songSrc;
    // console.log(songField.duration);
    // console.log(totalSongs);
    songField.autoplay = true;
    // songField.autostart = true;
    
    let songPaused = songField.paused;
    // console.log('songPaused',songPaused);
    
    if(songPaused == true){
        // songField.play();
        // console.log('Paused');
        playPaused.src = './pause-button.png'
        // songPlaying = true;
        // songPaused = false;
        // console.log(songPlaying);
    }
    else{
        // songField.pause();
        // console.log("Playing");
        playPaused.src = './play-button-arrowhead.png'
        // songPaused = true;
        // songPlaying = false;
    }
    
}
// if(songPaused == true){
//     playPaused.src = './play-button-arrowhead.png'
//     console.log('songPaused == true');
// }
// if(songPaused == false){
//     console.log('songPaused == false');
//     playPaused.src = './pause-button.png'
// }
allSongs(current)

// var fillbar = document.getElementById("fillbar");
// let song = document.getElementById('audioTag')

setInterval(updateSongSlider, 1000);
function updateSongSlider(){
    var c = Math.round(songField.currentTime);
    audioSlider.value = c;
    // fillbar.style.width = c + "px";
    
    var d = songField.duration
    // console.log(d);
    audioSlider.setAttribute("max", d);
    // startTime.innerHTML = Math.round(songField.currentTime);
    startMinute = Math.floor(songField.currentTime/60);
    startSecond = Math.floor(songField.currentTime - startMinute * 60);
    startTime.innerHTML = `${startMinute}:${startSecond}`
    endMinute = Math.floor(songField.duration/60);
    endSecond  = Math.floor(songField.duration - endMinute * 60);
    endTime.innerHTML = `${endMinute}:${endSecond}`
    // songField.volume = volumeSlider.value/100;
    // console.log(songField.volume);
    // if(startTime.innerHTML>59){
    //     startTime.innerHTML = 1 + ":" + Math.round(songField.currentTime%60)
    // }
    // endTime.innerHTML = Math.floor(songField.duration);
    // audioSlider.onseeked = function() {
    //     alert('HEHE');
    // }
    if(songField.currentTime == songField.duration){
        // console.log("Finished");
        // current += 1;
        // console.log(current);
        // current += 1;
        // playSelectedSong(current)
    }
}

function seek(){		 
    songField.currentTime = audioSlider.value;			
    // songField.play();	
}


// let audio = document.querySelector('audio')
volumeSlider.min = 0;
volumeSlider.max = 100
volumeSlider.oninput = function () {
	songField.volume = volumeSlider.value / 100
    console.log(volumeSlider.value/100);
}


let volumeDown = () => {
    let volumeSlider = document.getElementById('audioSlider')
    console.log("VolumeDown");
    // debugger;
    volumeSlider.value -= 10;
    // console.log(volumeSlider.value-=10);
    // console.log(volumeSlider.value);
    songField.volume = volumeSlider.value / 100;
    // volumeSlider.value = (volumeSlider.value - 10);
    // console.log(songField.volume);
}

let volumeUp = () => {
    // debugger;
    let volumeSlider = document.getElementById('audioSlider')
    console.log("VolumeUp");
    volumeSlider.value = Number(volumeSlider.value) + Number(10);
    // console.log(volumeSlider.value+=10);
    songField.volume = volumeSlider.value / 100;

    console.log(songField.volume);
    // volumeSlider.value = volumeSlider.value + 10;
    // console.log(volumeSlider.value);
}

function newEvent(abc) {
    console.log(abc);
}
// songField.onseeking = (event) => {
//     console.log('Changing');
// }

// songField.addEventListener('seeked', (event) => {
//     console.log('Video is seeking a new position.');
//   });

//set the currentTime to match users click on the progress bar

// function updateProgressValue() {
//     audioSlider.max = songField.duration;
//     audioSlider.value = songField.currentTime;
//     document.querySelector('#currentTime').innerHTML =  
//     formatTime(songField.currentTime); // See lines 85-92 for MM:SS formatting
//     document.querySelector('#endTime').innerHTML =  
//     formatTime(songField.duration); // See lines 85-92 for MM:SS formatting
//   };

  
//   setInterval(updateProgressValue, 500);

//   function changeProgressBar() {
//     songField.currentTime = audioSlider.value;
//   };

// songField.addEventListener('ended',function nextSong(){
//     current+=1;
//     allSongs(current)
// })

// console.log(this.totalSongs);
// for( iter = 0; iter<someValue; iter++){
//     currentTime = iter;
//     console.log(currentTime);
// }