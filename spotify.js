console.log("Welcome To My Spotify");

//? initialize the song here AND GET ELEMENTS 

let songIndex = 0;
let audioElement = new Audio("code with harry code and images/songs/295.mp3"); //? AUDIO PATH USED IN PLAYING
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');



//? MAKE THE SONG PLAYABLE BY THIS CODE

let songs = [
  {
    songName: "295",
    filePath: "ccode with harry code and images/songs/295.mp3",
    coverPath: "code with harry code and images/covers/295.jpg",
  },
  {
    songName: "Just Listen",
    filePath: "code with harry code and images/songs/Just Listen.mp3",
    coverPath: "code with harry code and images/covers/Just-Listen.jpg",
  },
  {
    songName: "Last Ride",
    filePath: "code with harry code and images/songs/The Last Ride.mp3",
    coverPath: "code with harry code and images/covers/the-last-ride-sidhu-moose-wala.webp",
  },
  {
    songName: "Chunni",
    filePath: "code with harry code and images/songs/Chunni.mp3",
    coverPath: "code with harry code and images/covers/chnni.webp",
  },
  {
    songName: "Millionare",
    filePath: "code with harry code and images/songs/MILLIONAIRE.mp3",
    coverPath: "code with harry code and images/covers/glory-yo-yo-honey-singh.webp",
  },
  {
    songName: "G-63",
    filePath: "code with harry code and images/songs/G Shit.mp3",
    coverPath: "code with harry code and images/covers/g-shit-sidhu-moose-wala.webp",
  },
  {
    songName: "Dabb 32 Bor",
    filePath: "code with harry code and images/songs/Mere Dab.mp3",
    coverPath: "code with harry code and images/covers/295.jpg",
  },
  {
    songName: "On Top 2",
    filePath: "code with harry code and images/songs/On Top 2.mp3",
    coverPath: "code with harry code and images/covers/On_Top_2_Karan_Aujla.webp",
  },
  {
    songName: "MVP",
    filePath: "code with harry code and images/songs/MVP.mp3",
    coverPath: "code with harry code and images/covers/MVP_Shubh.webp",
  },
  {
    songName: "Elevated",
    filePath: "ccode with harry code and images/songs/Elevated.mp3",
    coverPath: "code with harry code and images/covers/Elevated.jpg",
  },
];


songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});




//! ADD EVENTLISTNER IN MASTERPLAY BUTTON FOR PLAY AND PAUSE ( MOST IMPORTANT )

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
      // If paused or at the beginning, play the audio
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;
  } else {
      // If playing, pause the audio
      audioElement.pause();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play'); // Change this line to add the play class
      gif.style.opacity = 0;
  }
});




//! LISTEN TO EVENTS ADDS ACTION BY EVENTLISNER IN PROGRESS BAR SIMPLE MATHS FORMULAS HERE 

audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate"); //? AFTER THE COMPLEATE CODE THERE IS NO NEED OF CALL IT IN CONSOLE

  //?UPDATE SEEK

  //*THIS CODE WILL SHOWS HOW MUCH SONG IS RUNNING FROM ITS DURRATION CURRENT TIME OUT OF THEIR TOTAL DURRATION 
  //! MATHS FORMULA CURRENT TIME / AUDIO DURATTION AND MULTIPLY BY 100
  //*OMG

  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  // console.log(progress); //? AFTER THE COMPLEATE CODE THERE IS NO NEED OF CALL IT IN CONSOLE


  //* IN THIS CODE THE UPPER PROGESS ARE CONNECTED TO REALTIME PROGRESS BAR 
  myprogressbar.value = progress;
});


//! MATHS FORMULA CURRENT TIME IS EQUAL TO PROGRESSBAR'S VALUE MULTIPLY WITH DURATION OF AUDIO THEN DIVIDE BY 100. IF YOU MOVES PROGRESS BAR LEFT OR RIGHT THE SONG WILL CHANGE ACCORDING TO THEIR DURATION ON PROGRESS BAR 
//*OMG 

myprogressbar.addEventListener('change', () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})



 


const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `code with harry code and images/songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
  })
})





//! FOR PERIVIOUS AND NEXT FONTS FUNCTIONALITY 

// document.getElementById('previous').addEventListener(('click'), () => {

// })


document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `code with harry code and images/songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `code with harry code and images/songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})




