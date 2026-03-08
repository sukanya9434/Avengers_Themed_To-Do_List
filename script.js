const items=document.querySelector('.items');
const itemlist=document.querySelector('.itemlist');
const input=document.querySelector('#task');
const adding=document.querySelector('.Add');
const box=document.querySelector('#Greet');
const show= document.createElement('h1');

  const current = new Date();
 const hour=current.getHours();

  if(hour>=4 && hour<12){
show.innerHTML=`Good Morning Avenger!`
 }
 else if(hour>=12 && hour<17 ){
    show.innerHTML=`Good Afternoon Avenger!`;
 }
else if(hour>=17 || hour<4){
    show.innerHTML=`Good Evening Avenger!`;
}

box.appendChild(show);


let created=false;
input.addEventListener('input',()=>{
if (!created){
    const add=document.createElement('button');
add.innerHTML=`add`;
    adding.appendChild(add);
    created=true;

add.addEventListener('click',function(e){
   if(input.value===""){
    alert("Please type your task in box");}
    else{
    const img=document.createElement('img');
    img.id="image";
img.src="delete.webp";
img.style.height="15px";
img.style.width="15px";
const list=document.createElement('li');
list.innerHTML=input.value;
list.appendChild(img);
items.appendChild(list);
input.value="";
localStorage.setItem("task",items.innerHTML);
}})
}})
   let checked=false;
items.addEventListener('click',
    function(e){
     
     if( e.target.style.textDecoration ==="line-through"){
         e.target.style.textDecoration ="none";
     }
        else if(e.target.tagName==="LI"){
    e.target.style.textDecoration ="line-through";
    localStorage.setItem("task",items.innerHTML);
    checked=true;
        }
       else if(e.target.tagName==="IMG"){
            e.target.parentElement.remove();
            localStorage.setItem("task",items.innerHTML);
        }
    }
)

items.innerHTML=localStorage.getItem("task");


