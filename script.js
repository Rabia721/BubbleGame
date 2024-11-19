var timer = 60;
var score =0
var rn =''

// makeBubble
console.log(startGame)

function bubble(){
  var startGame = document.getElementById('startGame');
  var div =''
  for( let i = 0 ; i <= 80;i++){
    let rnum = Math.floor(Math.random()*10)
  div += `<div class='bubble'>${rnum}</div>`
  startGame.innerHTML=div
  }
}

// timer
document.querySelector('.boxtimer').innerHTML=0
function runtime(){
  let timeint = setInterval(() => {
    if(timer >0){
 timer--;
  document.querySelector('.boxtimer').innerHTML=timer
}else
  {
clearInterval(timer)
document.querySelector('#startGame').innerHTML=`<h1 class='gameover'>Game Over<h1>`
  }
 }, 1000);
}

// increseScore
document.querySelector('.boxscore').innerHTML=0
function  increseScore(){
  document.querySelector('.boxscore').innerHTML=score
  score += 5
} 


//   addEventlistner
document.querySelector('#startGame').addEventListener('click',function (details){
  var clicknum =(Number(details.target.textContent))
  if(clicknum == rn){
    increseScore()
    getNewHit()
    bubble()


  }
    })

    // ........................................
  //  HitBubble
    function  getNewHit(){
      rn=Math.floor(Math.random()*10)
        document.querySelector('.boxHit').textContent=rn
      }



bubble()
runtime()
increseScore()
getNewHit()

