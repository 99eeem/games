

//the function of slide text
const soon=document.getElementById("soon"),
         text=soon.textContent,
         textarray=[];
soon.textContent="";
for (let i = 0; i < text.split("").length; i++) {
  if(text.split("")[i]===" "){
    textarray.push(" ");

  }else {
    textarray.push('<span style="animation-delay: '+(i*0.1)+'s;">'+text.split("")[i]+'</span>');
    
  }
     
}  

for (let k = 0; k < textarray.length; k++) {
  soon.innerHTML+=textarray[k];
  
}
//front and back question 
const tag=document.querySelectorAll(".issue");
for (let i = 0; i < tag.length; i++) {
  
  tag[i].addEventListener("click", function(){
    document.querySelectorAll(".question")[i].classList.toggle("disapper");
    document.querySelectorAll(".answer")[i].classList.toggle("apper");
  })
  
}

const seven=document.querySelectorAll(".seven");
const open=document.querySelectorAll(".open");
const close=document.querySelectorAll(".close");
let score=0;


let lockcard=false;
let fliped=false;
let first, second;
const call=function(){
  score++;
 
 
  alert("currect");
}
const allback=function(){
  seven.forEach(function(item){
    item.classList.remove("activate");
  })
}
const back=function(){
  lockcard=true;

  setTimeout(function(){

    first.classList.remove("activate");
        
        second.classList.remove("activate");
        
        
        lockcard=false;
  }, 1500)

}

//click and fliped card function

const memoryCard=function(){
  for (let i = 0; i < seven.length; i++) {
    seven[i].addEventListener("click", function(){
      if(lockcard) return;
      if(this===first)return;
      const flipedcard=function(){seven[i].classList.add("activate")};
      flipedcard();


    
    
   
    if(!fliped){
    fliped=true;
    first=this;
 
    
    } else {
    fliped=false;
    second=this;

    if(first.dataset.number===second.dataset.number){
      
      setTimeout(call, 500);    
  
  
      
    } else {
      back();
     



    }
  }
  })

  
}
}

//time for counntdown from 40sec
var start=document.getElementById("countup");
var space=document.getElementById("space");
var timeleft=40;
var min=Math.floor(timeleft/60);
var sec=timeleft%60;

const countdown=function(){
  var min=Math.floor(timeleft/60);
var sec=timeleft%60;
  timeleft--;
  space.innerHTML=min+':'+sec;
  if(sec<10){
    space.innerHTML=min+':'+'0'+sec;
  }
  if(timeleft<0){
    clearInterval(gameingTime);
    
    alert("The game is over. Your score is"+" "+ score+"points");
    allback();
    
    timeleft=40;
    shuffle();
 
    restgame();
   


}
 
}





start.addEventListener("click", function(){
  for (let k = 0; k < close.length; k++) {
    close[k].classList.add("begin");
    
  }
  gameingTime=
  setInterval(countdown,1000);
  memoryCard();
  
})
//shufle the card order
function shuffle(){
  seven.forEach(function(card){
    let randomPos=Math.floor(Math.random()*21);
    card.style.order=randomPos
  })
}

//reset the info of memorycard game 
const restgame= function(){
  [fliped,lockcard]=[false,false];
[first,second]=[null,null];
}

const koko=document.getElementById("koko");
document.getElementById("submit").addEventListener("click", function(e){
  if(koko.value==="I love you"){
    alert("correct");
  } else {
    alert("wrong")
  }
  e.preventDefault()

})
//switch a tab 
const tabs=document.querySelectorAll(".tabs li")
const contents =document.querySelectorAll(".contents li")

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(){
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("show");
      
    }
    for (let k = 0; k < contents.length; k++) {
      contents[k].classList.remove("show");
    }
    tabs[i].classList.add("show");
    contents[i].classList.add("show");


  })
    
  
  
}
//disable the button

document.getElementById("koko").addEventListener("input", function(){
  if(document.getElementById("koko").value.length>3){
    document.getElementById("submit").removeAttribute("disabled");
  } else {
    document.getElementById("submit").setAttribute("disabled","disabled");

  }
})
//wack mole that i dont really know about this game
const square=document.querySelectorAll(".square");
const mole=document.querySelector(".mole");
const scorebar=document.querySelector(".score2");
const timer=document.querySelector(".timer")
timeremain=30;
let point=0;
//mole is moving 
const randommole =function(){
  square.forEach(function(index){
    index.classList.remove("mole")
    hasclicked=false;

  })
  var randomPo=square[Math.floor(Math.random()*9)];
  randomPo.classList.add("mole");
  hitmole=randomPo.id;
  
}
//get score
let hasclicked=false;
const result=function(){
  square.forEach(function(kazu){
    kazu.addEventListener("mouseup", function(){
      if(kazu.id===hitmole){
        if(hasclicked)return;
        point=point+1;
        hasclicked=true;
        scorebar.textContent=point;
      } else if(point>0){
        point=point-1;
        scorebar.textContent=point;
      }
    })
  })
  
}
result();
const movingmole=function(){
  let timerid=null;
  movie=setInterval(randommole,1000);

}
movingmole();
//countdown
const timeattack=function(){
  timer.innerHTML=timeremain

  timeremain--;
  if(timeremain===0){
   // alert("GAMMMME OVEER");
    clearInterval(timerid);
    clearInterval(movie);


  
  }
}
let timerid=setInterval(timeattack,1000);
//three choicese questions 
const questionbar=document.querySelector(".questionbar");
const answerbar=document.querySelectorAll(".answerbar div");
const items=[{
  question:'what eiki like Anya the most?',
  answer:['smiling','smell','style'],
  correct:'smell'
},{
  question:'what is eiki`s favorite countury in Asia',
  answer:['Thailand','Hongkong','Taiwan'],
  correct:'Taiwan'

},{
  question:'how tall is Eiki',
  answer:['178','164','163'],
  correct:'163'

}];
console.log(questionbar);
//make a quiz
itemindex=0;
const setquiz=function(){
  questionbar.innerHTML=items[itemindex].question;
for (let i = 0; i < answerbar.length; i++) {
  answerbar[i].innerHTML=items[itemindex].answer[i];
  
}
  }


setquiz();
const match=function(e){
  if(items[itemindex].correct===e.target.textContent){
    alert("正解");

  } else {
    alert("不正解");
  }
  itemindex=itemindex+1;
  if(itemindex<items.length){
    setquiz();
  } else {
    alert("三択クイズは修了しまして、お疲れさまでした。")
  }

  

}
for (let i = 0; i < answerbar.length; i++) {
  answerbar[i].addEventListener("click", function(e){
    match(e);
  })
  
}

function $(id){
  return document.getElementById(id);
}

var cell= document.getElementsByClassName("cell");
const mapsarray=Array.from(cell);

const maps=[
  [mapsarray[0], mapsarray[1], mapsarray[2]],
 
  [mapsarray[3], mapsarray[4], mapsarray[5]],
  
  [mapsarray[6], mapsarray[7], mapsarray[8]]
];
let gamestart=true;
console.log(maps[0][0]);
const Xmark=function(e){
  e.target.classList.add("x");
  e.target.setAttribute("data-mark","x");
}
let currentturn=1;
const firstplayer=function(){
  let playerone=currentturn%2;
  return playerone===1;
  

}

  
const omark=function(e){
  
  e.target.classList.add("o");
  e.target.setAttribute("data-mark","o");
  
}
  const playerchange=function(e){
  
  let mark=e.target.classList[1];
    $("change").innerHTML=mark;
}
let isend=false;
const gamejudege=function(){
  for (let row = 0; row < 3; row++) {
    iswin(maps[row][0], maps[row][1], maps[row][2]);
    if(isend){
      $("result").textContent='You are winner';
    }
  }
    for (let col = 0; col < 3; col++) {
    iswin(maps[0][col], maps[1][col], maps[2][col]);
    if(isend){
      $("result").textContent=maps[0][col].classList[1]+'You are winner';
    }
      
      
    
  }
  iswin(maps[0][0], maps[1][1], maps[2][2]);
  iswin(maps[0][2], maps[1][1], maps[2][0]);
  if(isend){
    
    $("result").textContent=maps[1][1].classList[1]+'is winner';
  }
if(currentturn>=10&&!isend){
  $("result").textContent='It is even';
}

  
}
const iswin=function(first, second, third){
  if(first.classList[1]===" "){
    return;
  }
  if(second.classList[1]===" "){
    return;
  }
  if(third.classList[1]===" "){
    return;
  }
  if(first.classList[1]===second.classList[1]&&second.classList[1]===third.classList[1]&&first.classList[1]!==undefined){
    isend=true;
    gamestart=false;
  }


}
mapsarray.forEach(function(index){
  index.addEventListener("click", function(e){
if(index.classList[1]!==undefined)return;
if(!gamestart)return;
    if(firstplayer()){
      Xmark(e);

    } else {
      omark(e);
    }
    
    playerchange(e);
    currentturn++;
    gamejudege();
  
  })

})

$("resetdesu").addEventListener("click", function(){
  $("result").textContent=" "
  currentturn=1;
  for (let i = 0; i < cell.length; i++) {
    cell[i].classList.remove("x","o");
    gamestart=true;
    isend=false;
    
  }
})

const lact=document.querySelector(".lact");

const ice=document.querySelector(".ice img");
const info=document.querySelector(".info");
const button4=document.querySelector(".sizes button");
const buyy=document.querySelector(".buy");
const sheev=document.querySelector(".sheev");
lact.addEventListener("mouseenter", function(){
  ice.style.transition= " translate: all .5s ease;";
  ice.style.transform="translateZ(60px) rotateZ(-40deg)"
  buyy.style.transform=" translateZ(60px)"
  button4.style.transform="translateZ(60px)"
  info.style.transform=" translateZ(60px)"
})

lact.addEventListener("mouseover", function(e){
  let Xaix=(window.innerWidth/2-e.pageX)/25;
  let Yaix=(window.innerHeight/2-e.clientY)/25;
  sheev.style.transform=`rotateY(${Xaix}deg) rotateX(${Yaix}deg)`;

  console.log(Xaix,Yaix)
  
});

lact.addEventListener("mouseleave", function(e){

  sheev.style.transition="all 0.5s ease"
  sheev.style.transform=`rotateY(0deg) rotateX(0deg)`;
  ice.style.transform="translateZ(0)"
  buyy.style.transform="translateZ(0)"
  button4.style.transform="translateZ(0)"
  info.style.transform="translateZ(0)"

  console.log(Xaix,Yaix)
  
});

document.getElementById("pis").addEventListener("click", function(){
  console.log("hey");
  if(document.querySelector(".here").value==="Anya"){
    alert("hey");

}})

const TimerPlace=document.querySelector(".Timeleft");
const untypedPlace=document.querySelector(".untyped");
const typedPlace=document.querySelector(".typed");
var Words=['jacet',
'soymile',
'speaker',
'anya',
'love',
'extrodinary',
'dictionary',
'pronauntiation',
'phenomenant',
];
let FirstClick=false;
let typed=' ';
let untyped=' ';
let minas=0;
let plus=0;
var TimerLeftLeft=15;
TimerPlace.textContent="00";
function TypingGame(e){
    if(e.key!==untyped.substring(0,1)){
      minas+=1;
      
      return;

    } else {
      plus+=1;
      
    typed+=untyped.substring(0,1);
    untyped=untyped.substring(1);
    ShowUp();

  if(untyped===''){
    TimerLeftLeft=TimerLeftLeft+3;
   Nextupdate();
  }
  }
  }



const countdown3=function(){
  senti=setInterval(function(){
  
    TimerLeftLeft--;
    TimerPlace.textContent=TimerLeftLeft;
    if(TimerLeftLeft<1){
      GameEnd();
 
   
    }

  },1000)
  document.addEventListener("keydown", TypingGame);
 
}
const GameEnd=function(){
  clearInterval(senti);
       document.removeEventListener("keydown", TypingGame);
       if(minas<10&&plus>500){
       document.getElementById("result1").textContent=`ミスタイプ数：${minas} タイプ数：${plus} 君はタイピングの天才だね！！お疲れさまでした。またね！`}
       if(minas>10&&plus<500){
       document.getElementById("result1").textContent=`ミスタイプ数：${minas} タイプ数：${plus} 君はSUCK！！二度とやらないでね。またね！`}

      
  
}

const gamestartt=function(){
  document.getElementById("start").addEventListener("click", function(){
    if(FirstClick===true) return;
   countdown3();
   FirstClick=true;
  })
}

untyped=Changeone();
untypedPlace.textContent=untyped;

function lolo(max){
  return Math.floor(Math.random()*(max));

}

function Changeone(){
  const index=lolo(Words.length);
  return Words[index];
}

const ShowUp=function(){
  untypedPlace.textContent=untyped;
  typedPlace.textContent=typed;
}
function Nextupdate(){
  typed=" ";
  untyped=Changeone();
  ShowUp();

}
gamestartt();

document.getElementById("restset").addEventListener("click", function(){
  document.removeEventListener("keydown", TypingGame);
  Nextupdate();
  TimerLeftLeft=15;
  clearInterval(senti);
  TimerPlace.textContent=TimerLeftLeft;
  document.getElementById("result1").textContent=" ";
  FirstClick=false;
})


const Whattodo=document.getElementById("whattodo");
const Todolist=document.getElementById("todolist");
const Insert=document.getElementById("insert");


Insert.addEventListener("click", manifucture);
Todolist.addEventListener("click", Deleteitem);
document.addEventListener("DOMContentLoaded", Reflect);
function manifucture(e){
  if(Whattodo.value==="") return;

  const Tododiv=document.createElement("div");
  Todolist.appendChild(Tododiv);
  Tododiv.classList.add("tododiv");
  const Todo=document.createElement("li");
  Todo.textContent=Whattodo.value;
  Tododiv.appendChild(Todo);
  Todo.classList.add("todo");
  Localstorage(Whattodo.value);

  const Trashbutton=document.createElement("button");
  Trashbutton.classList.add("buttontrash");

  Trashbutton.innerHTML='<i class="fas fa-trash-alt"></i>';
  Tododiv.appendChild(Trashbutton);

  Whattodo.value="";


}

function Deleteitem(e){
  item=e.target;
    if(item.classList[0]=="buttontrash"){
      item.parentElement.classList.add("dropdown");
    item.parentElement.classList.add("dropdown");
    item.parentElement.addEventListener("transitionend", function(){
      item.parentElement.remove();
      removeLocal();
    })
  }
}
function Localstorage(todo){
  let todos;
  if(localStorage.getItem("lists")===null){
    todos=[];
  } else {
    todos=JSON.parse(localStorage.getItem("lists"));
  }
 todos.push(todo);
 localStorage.setItem("lists", JSON.stringify(todos));
 
}
function removeLocal(todo){

  var Deleteitems=JSON.parse(localStorage.getItem("lists"))
  var Dname=item.previousSibling.textContent;
  Deleteitems.splice(Deleteitems.indexOf(Dname), 1);
  
  localStorage.setItem("lists", JSON.stringify(Deleteitems));


}

function Reflect(){
  if(localStorage.getItem("lists")!==null){
    var keeps=JSON.parse(localStorage.getItem("lists"))
    keeps.forEach(keep=>{
      const Tododiv=document.createElement("div");
  Todolist.appendChild(Tododiv);
  Tododiv.classList.add("tododiv");
  const Todo=document.createElement("li");
  Todo.textContent=keep;
  Tododiv.appendChild(Todo);
  Todo.classList.add("todo");


  

  const Trashbutton=document.createElement("button");
  Trashbutton.classList.add("buttontrash");
  Trashbutton.innerHTML='<i class="fas fa-trash-alt"></i>';
  Tododiv.appendChild(Trashbutton);



      
    })

  }

}

const Sell=document.getElementById("Sell");
const Buy=document.getElementById("Buy");
const Tech=document.getElementById("Tech");
const Caluculate=document.getElementById("caluculate");
const Parcentage=document.getElementById("ProfitPacentage");
console.log(Parcentage);
function Hashimot(Hirakawa, Narita){
  if(Sell.value=="" || Buy.value=="") return;
  var Profit=Hirakawa-Narita;
  var ProfitParcentage=Profit/Hirakawa*100;
  Tech.textContent=`利益額は：${Profit}、利益率は：${ProfitParcentage}です。`

}
function Mathubara(Narita,Shinoda){
  if(Buy.value==""||Parcentage.value=="") return;
  resultPercentage=Narita/(1-(Shinoda/100));
  Tech.textContent=`販売単価は：${resultPercentage}です。`

}

document.addEventListener("keydown", function(e){

  if(e.keyCode!==13) return;
  var SellPrice=Sell.value;
  var BuyPrice=Buy.value;
  var ParcentagePrice=Parcentage.value;
  Hashimot(SellPrice,BuyPrice);
  Mathubara(BuyPrice,ParcentagePrice);


})
