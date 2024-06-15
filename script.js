let boxs = document.querySelectorAll(".x");
let rt = document.querySelector(".nx")
let pra =document.querySelector("p");

let box = true;
 boxs.forEach((x)=>
{
x.onclick=()=>
    {
      console.log("helllo");
      if(box)
        {
          x.innerHTML="O";
           box=false;
        }
        else
        {
          x.innerHTML="X";
          box = true;
        }
        x.disabled=true;
        win();
    }
})

const ptnr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[0,4,8]];

function win()
{
    for(xm of ptnr)
        {
            let w1 =boxs[xm[0]].innerHTML;
            let w2 =boxs[xm[1]].innerHTML;
            let w3 =boxs[xm[2]].innerHTML;   
            
            if(w1 != "" && w2 != "" && w3 != "")
                {
                    if(w1===w2 && w2===w3)
                        {
                            console.log("winner",w1)
                            winner(w1);
                        }
                }
        }
}

function winner(xx)
{
    pra.innerHTML=`the winer is = ${xx}`
    stop();
}
function stop()
{
    for(x of boxs)
    {
      x.disabled = true;
    }
   
}

function reset()
{
    box = true;
    start()
    pra.innerHTML=""
}

function start()
{
    for(x of boxs)
    {
      x.disabled = false;
      x.innerHTML="";
    }
   
}

rt.addEventListener("click",reset)