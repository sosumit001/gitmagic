window.onload = () =>{
    let headerIcon = document.querySelector('#header-icon');
    let sideNav = document.querySelector('#sidenav')
    let topNav = document.querySelector('.header ul')
    let homeSlogen = document.querySelector('#home-slogen h1');
    let header = document.querySelector('.header');
    let topNavEle = document.querySelectorAll('.header ul a');
    let current = true;
    let click = true;
    //query on resize 
    console.log(topNavEle)
    window.addEventListener('resize',()=>{
       if(click)
       {
        if(current && window.innerWidth> 1000)
        {
            headerIcon.style = "display:none;"
        topNav.style = "display:flex;"
        current = false;
        }
        if(!current && window.innerWidth <= 1000)
        {
            headerIcon.style = "display:block;"
            topNav.style = "display:none;"
            current = true;
        }
      
       }
    })

    headerIcon.addEventListener('click',()=>{
        if(current.innerHeight < 789)
        {
            topNav.style = "width:60%"
        }
        {
            click = false;
            setTimeout(() => {
                sideNav.style.cssText = "display:flex; opacity:1; width:30%;"
            current = false;
            }, 20);
        }
    })
    window.addEventListener('click',()=>{
        if(!current)
        {
            click = true;
            sideNav.style.cssText = "display:none; opacity:0; width:0;"
            current = true;
        }
    })
    //header on scroll
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset>14)
        {
            header.style = "background-color:orange;"
            topNavEle.style = "color:yellow";
        }
        else{
            header.style.backgroundColor = "rgba(0,0,0,0)";
        }
    })
}
