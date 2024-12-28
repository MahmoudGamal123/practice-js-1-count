let incressBtn = document.getElementById('increase');
let decressBtn = document.getElementById('decrease');
let counter = document.getElementById('apperIncrees')
let parent = document.getElementById('full-content')
let color = ["red", "green", "blue", "yellow","black"]

incressBtn.onclick = function(){
    counter.textContent=+counter.textContent+1
   parent.style.backgroundColor = getrandomColor()
    
    
}
decressBtn.onclick = function(){
    if(parseInt(counter.textContent)>0){
        counter.textContent=parseInt(counter.textContent-1)
        
    }
    parent.style.backgroundColor = getrandomColor()
}
function getrandomColor(){
    let randomNumber =parseInt( Math.random() *6)
    return color[randomNumber]
}