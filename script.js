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

function runtime(){
  let timeint = setInterval(() => {
    if(timer >0){
 timer--;
  document.querySelector('.boxtimer').innerHTML=timer
}else
  {
clearInterval(timer)
  }
 }, 1000);
}

// increseScore
function  increseScore(){
  score += 10
  document.querySelector('.boxscore').innerHTML=score
} 


//   addEventlistner
document.querySelector('#startGame').addEventListener('click',function (details){
  var clicknum =(Number(details.target.textContent))
  if(clicknum == rn){
    increseScore()
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

