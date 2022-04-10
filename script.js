//load content

import Header from "./component/header.js";
import Home from "./component/home.js";
import Brandlogo from "./component/brand-logo.js";
window.onload = () =>{
    let navWrapper = document.querySelector('.nav-wrapper');
    let mobileDemo = document.querySelector('#mobile-demo');
    let homeSlogen = document.querySelector('#home-page-intro')
    let brandSection = document.querySelector("#brand-section");
    
    //add content to header 
    navWrapper.innerHTML = Header.header;
    mobileDemo.innerHTML = Header.mobiledemo;

    //onscroll event 
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > 31){
            navWrapper.style = "display:none;"
        }else
        {
            navWrapper.style = "display:block";
        }
    })

    //home page intro
    homeSlogen.innerHTML = Home.homeIntro;

    //add brand logo
    brandSection.innerHTML = Brandlogo.brandLogo;
}