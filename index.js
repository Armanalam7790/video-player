// var arr = [{
//     songName: 'Jale 2',
//      url:'./songs/Jale_2_1.mp3',
//       img:"./assets/jale.jpg"
// }, 

// {
//     songName: 'Saiyaara  ',
//      url:'./songs/sr.mp3',
//       img:"./assets/sr.jpg"
// },

// , 
// {
//     songName: ' jawan song',
//      url:'./songs/jawan.mp3',
//       img:"./assets/jawan.jpg"
// },
// ];

var arr = [
{
  songName: 'Jale 2',
  url: './songs/Jale_2_1.mp3',
  img: "./assets/jale.jpg"
}, 

{
  songName: 'Saiyaara',
  url: './songs/sr.mp3',
  img: "./assets/sr.jpg"
},

{
  songName: 'Jawan song',
  url: './songs/jawan.mp3',
  img: "./assets/jawan.jpg"
}
];
var allsongs  = document.querySelector('.all-songs')
var poster  = document.querySelector('.left')
var play  = document.querySelector('#play')
var backward  = document.querySelector('#backward')
var forward  = document.querySelector('#forward')

// console.log(play,backward, forward);




var audio  =  new Audio()

var selectedsong  = 0
function Mainfunction() {
  var clutter  = ''
arr.forEach((elem, idx)=>{
  
 clutter = clutter +  `<div class="song-card" id=${idx}>
                   <div class="part1">
                        <img src=${elem.img} alt="">
                    <h2>${elem.songName}</h2>
                   </div>
                    <h6>3.56</h6>

                </div>`
 
 
  

  
})

allsongs.innerHTML = clutter
audio.src = arr[selectedsong].url


poster.style.backgroundImage    = `url(${arr[selectedsong].img})`
}

Mainfunction()
allsongs.addEventListener("click", function(dets) {
  // console.log(arr[dets.target.id].url);
  selectedsong = dets.target.id
     play.innerHTML =  `<i class="ri-pause-line"></i>`
      flag = 1
  // console.log(selectedsong);
  Mainfunction()
  audio.play()
  
})
 var flag  = 0
play.addEventListener("click", function () {

  if (flag == 0) {
    play.innerHTML =  `<i class="ri-pause-line"></i>`
    Mainfunction()
    audio.play()
    flag = 1
  } else{
     play.innerHTML =  `<i class="ri-play-line"></i>`
       Mainfunction()
     audio.pause()
    flag = 0
  }
    
})


forward.addEventListener('click', function () {
  if (selectedsong<arr.length-1) {
     selectedsong++
     Mainfunction()
     audio.play()
  }else{
    forward.style.opacity  = 0.4
  }
})

backward.addEventListener('click', function () {
  if (selectedsong>0) {
     selectedsong--
     Mainfunction()
     audio.play()
  }else{
    backward.style.opacity  = 0.4
  }
})