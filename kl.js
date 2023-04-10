let aciv = document.querySelector('.act-burg')
let backmen = document.querySelector('.back-menu')
let mackmass = document.querySelector('.back-mass')
aciv.addEventListener('click', function () {
    backmen.classList.toggle('act-men')
    mackmass.classList.toggle('act-mass')
    document.querySelector('.line1').classList.toggle('act-lin1')
    document.querySelector('.lin2').classList.toggle('act-lin2')
    document.querySelector('.line3').classList.toggle('act-lin3')
})

let left = document.querySelector('.left')
let right = document.querySelector('.right')
let wrp = document.querySelector('.inside')
let doing = 0
left.addEventListener('click', function(){
    if (doing == -400){
        doing = 0
        wrp.style.left=doing+'%'
    } else{
        doing-=100
        
        wrp.style.left=doing+'%'
       
    }
})
right.addEventListener('click', function(){
    if (doing == 0){
        doing = 0
        wrp.style.left=doing+'px'
    }else{
        doing+=100
        wrp.style.left=doing+'px'
    }
})



let tabbl = document.querySelectorAll(".nav-tab")
let back = document.querySelectorAll(".tab-pane")
for(let k = 0; k<tabbl.length;k++){
    tabbl[k].addEventListener('click', function(m){
        m.preventDefault()
        let activeTabAttr = m.target.getAttribute("data-tab");

        for(let j = 0; j<tabbl.length;j++){
        
            var klh = back[j].getAttribute("data-tab-content");
            if(activeTabAttr == klh){
                tabbl[j].classList.add("active")
                back[j].classList.add("active")
    
            }else{
                tabbl[j].classList.remove("active")
                back[j].classList.remove("active")
            }
        }
    })
  



}
