let names=["Family","Officemates","Freinds"]
let name2="Officemates"
let index=0


let holder=document.querySelector(".holder")

window.onload=function(){
let i=0
if (i<name2.length) {
    let k=0
    setInterval(() => {
        holder.innerHTML=names[k].slice(0,i+1)
        i++
        
        if(i==names[k].length){
            i=0
           k++
           if (k==names.length) {
           i=0
           k=0
            
           }
        }
    }, 400); 
}
}

    let parents=document.querySelectorAll(".show-parent")  
          
       parents.forEach(item=>{
        item.addEventListener("mouseover",function(){
            this.children[0].style.transform="translateY(0)"
        })
       }) 
    
       parents.forEach(item=>{
        item.addEventListener("mouseout",function(){
            this.children[0].style.transform="translateY(-100%)"
        })
       }) 
    

 let carousel=document.querySelectorAll(".carousel-cell")  
          
       carousel.forEach(item=>{
        item.addEventListener("mouseover",function(){
            this.children[1].style.transform="translateY(0)"
        })
       }) 
    
       carousel.forEach(item=>{
        item.addEventListener("mouseout",function(){
            this.children[1].style.transform="translateY(100%)"
        })
       })
       let picparent=document.querySelectorAll(".pic-parent")
       picparent.forEach(item=>{
        item.addEventListener("mouseover",function(){
            this.children[0].style.transform="scale(1)"
            this.children[0].style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},.7)`
        })
       }) 
    
       picparent.forEach(item=>{
        item.addEventListener("mouseout",function(){
            this.children[0].style.transform="scale(0)"
        })
       })
       let curser2=document.querySelectorAll(".carousel-cell2")
       curser2.forEach(item=>{
        item.addEventListener("mouseover",function(){
            this.children[2].style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},.7)`
            this.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},.7)`
        })
       }) 
    
       curser2.forEach(item=>{
        item.addEventListener("mouseout",function(){
            this.style.backgroundColor="transparent"
            this.children[2].style.backgroundColor="blue"
        })
       })
       let _open=document.querySelector(".open")
       let navbar=document.querySelector(".navbar")
       _open.addEventListener("click",function(){
        navbar.style.display="flex"
       })
       let _close=document.querySelector(".close")
       
       _close.addEventListener("click",function(){
        navbar.style.display="none"
       })