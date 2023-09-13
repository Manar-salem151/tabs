let btns=document.querySelectorAll(".btns button")
let divs=document.querySelectorAll(".content div")

function main(){
    btns.forEach((btn)=>{
            btn.addEventListener("click",(e)=>{
                currentbtn=e.target

                btns.forEach((ele)=>{
                    ele.classList.remove("active")
                    currentbtn.classList.add("active")
                })

                let currentdiv=document.getElementById(currentbtn.dataset.mark)
                divs.forEach((e)=>{
                    e.classList.remove("show")
                    currentdiv.classList.add("show")
                })
            })
    })




}
main()