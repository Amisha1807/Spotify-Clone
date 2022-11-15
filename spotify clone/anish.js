console.log("Welcome to Spotify");
let index=0;
let audioElement = new Audio('tum se hi.mp3'); 
let play = document.getElementById('play');
let mybar = document.getElementById('mybar');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs =
[
    {
        songsname: "Tera hone laga hoon", filepath:"spotify clone/Tera.mp3" , coverpath: "spotify clone/Tera2Bhone2Blaga2Bhoon2BLyrics2BAtif2BAslam252C2BAjab2BPrem2Bki2Bgajab2Bkahani252C2BRanbir2BKapoor.jpg"
    },
    
    {
        songsname: "Tum se hi", filepath:"spotify clone/tum se hi.mp3" , coverpath: "spotify clone/hqdefault.jpg"
    },
    
    {
        songsname: "Ranjha", filepath:"spotify clone/rata1.mp3" , coverpath: "spotify clone/rata.webp"
    },
    
    {
        songsname: "All is well", filepath:"spotify clone/Aal Izz Well 128 Kbps.mp3" , coverpath: "spotify clone/All-is-Well-3-Idiots.webp"
    },
    
    {
        songsname: "Arziyan", filepath:"spotify clone/Arziyan-Delhi 6 128 Kbps.mp3" , coverpath: "spotify clone/size_l.webp"
    },
    
    {
        songsname: "Tum hi ho bandhu", filepath:"spotify clone/Cocktail 2012-Tumhi Ho.mp3" , coverpath: "spotify clone/tum hi ho bandhu.jpg"
    },
]
audioElement.addEventListener('timeupdate',()=>{
       console.log('timeupdate')
       progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
       console.log(progress);
       mybar.value = progress;
})
play.addEventListener('click',()=>
{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
   }
   else
   { 
    audioElement.pause();
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
   }
}
)
mybar.addEventListener('change',()=>{
    audioElement.currentTime = mybar.value*audioElement.duration/100;
}
)
 
/*songitem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songsname")[0].innerText = songs[i].songsname;


});*/
const plays = ()=> {
     Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.target.classList.remove('fa-pause');
        element.target.classList.add('fa-play');
        
    });
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {
        console.log(e.target);
        plays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = "spotify clone/tum se hi.mp3";
        audioElement.currentTime = 0;
        
        audioElement.src = `songs/${index+1}.mp3`;
        songsname.innerText = songs[index].songsname;
        audioElement.currentTime = 0;
        audioElement.play();
    
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=6){
        index = 0
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
   // songsname.innerText = songs[index].songsname;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
    //songsname.innerText = songs[index].songsname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})