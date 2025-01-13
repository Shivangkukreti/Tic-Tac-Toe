
let text =document.querySelector("#text")
let all=document.querySelectorAll(".all")
let count=0
let x=[]
let o=[]
let win=['123','369','789','147','258','159','357'] 


all.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        
        if (ele.textContent=='') {
         count++
         if (count%2==0) {
            ele.textContent="O"
            o.push(ele.getAttribute("id"))
            check()
            ele.style.pointerEvents="none"  
         } 
         else{
            ele.textContent="X"
            x.push(ele.getAttribute("id"))
            ele.style.pointerEvents="none"
            check()
         }  
        }
    })
})


function check() {
    for (const ele of win) {
        if (ele.split('').every((char)=>x.includes(char))) {
            text.textContent="X WINS!!"
            all.forEach((any)=>{any.style.pointerEvents="none"})
        }
        if(ele.split('').every((char)=>o.includes(char))){
            text.textContent="O WINS!!"
            all.forEach((any)=>{any.style.pointerEvents="none"})
        }
    }

}

text.addEventListener("click",()=>{
        x=[]
        o=[]
        text.textContent="START"
        count=0
        text.style.transform="scale(1.1)"
        all.forEach((any)=>{
            any.style.pointerEvents="all"
            any.textContent=""
        })
    }

)