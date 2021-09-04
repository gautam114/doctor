'use strict';

function reviews(){
  for(let i=0;i<3;i++){
  let col=document.createElement('div');
  let card=document.createElement('div');
  let date=new Date();
  col.className='col-md-4 col-10 mx-auto';
  card.className='card p-1';
  card.innerHTML=`
  <div class='card-header bg-transparent text-end border-0'>
  <span class='bi bi-file-excel fs-1'></span>
  </div>
  <div class='card-body'>
  <p>great work i was a heart patiesnt by now i don't have any heart so great work no heart no probulem </p>
  </div>
  <div class='card-footer text-end'>
    <p class='fw-bold text-info'>Someone's name</p>
    <p>${date.toLocaleDateString()}</p>
  </div>
  `;
  col.appendChild(card);
  document.getElementById('ro').appendChild(col);
  }
}


function viewsss(){
  var a=['120+','100+','1400+','140+'];
  var b=['Hospital','Staff','Happy patient','Bed facility'];
  var icons=['bi bi-building','bi bi-person','bi bi-emoji-smile','bi bi-door-open'];
  let count=0;
for(let i =0;i<4;i++){
  let div=document.createElement('div');
//  let span=document.createElement('span');
div.className='text-center'
  div.innerHTML=`
 <span class='${icons[count]}   fs-1 text-info'></span> 
  <h1>${a[count]}</h1>
  <p>${b[count]}</p>
  `;
  document.getElementById('views').appendChild(div);
count++;
}
}
function date(){

let months=['01','02','03','04','05','06','07','08','09','10','11','12'];

  let datee=document.getElementById('datte');
   let a=new Date();
  let yr=a.getFullYear();
  let month=String(a.getMonth());
let day=String(a.getDate());
//let day='1'
let pattern=yr+'-'+months[month]+'-'+day.padStart(2,'0');

datee.min=pattern;





}
document.getElementById('f1').addEventListener('submit',(f1)=>{
  f1.preventDefault();
  document.getElementById('msg').innerHTML='succesfully submitied';
});

window.onscroll=function(){scrolling();}
function scrolling(){
  let btn=document.getElementById('btn');
  if(document.documentElement.scrollTop>10 || document.body.scrollTop>10){
   btn.style.display='block'; 
  }else{
    btn.style.display='none'; 

  }
}
document.getElementById('btn').addEventListener('click',()=>{
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0;
})

function load(){
  reviews();
  viewsss();
date();

}