const target=document.querySelector(".target"),scoreElement=document.getElementById("score");let score=0,isVisible=!1,timer;function getRandomPosition(){let e=document.querySelector(".container").clientWidth-target.offsetWidth,t=document.querySelector(".container").clientHeight-target.offsetHeight;return{x:Math.random()*e,y:Math.random()*t}}function showTarget(){let e=getRandomPosition();target.style.left=`${e.x}px`,target.style.top=`${e.y}px`,target.style.display="block",isVisible=!0,timer=setTimeout(()=>hideTarget(),1e3)}function hideTarget(){target.style.display="none",isVisible=!1,showTarget()}target.addEventListener("click",()=>{isVisible&&(score++,scoreElement.textContent=score,clearTimeout(timer),hideTarget())}),showTarget();