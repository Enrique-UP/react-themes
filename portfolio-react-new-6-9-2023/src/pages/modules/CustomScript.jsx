import { useEffect } from "react";
const CustomScript = ({children}) => {
    useEffect(() => {
        document.querySelector(".copyright span").innerHTML = new Date().getFullYear();

        var number = "+1-8745-999-480";
        var mail = "nomaanarif786@gmail.com";
        var address = "A-76, Indra Puram, Ghaziabad, Uttar Pradesh.";
        var fb = "https://www.facebook.com/nomaan.arif.9";
        var tw = "https://twitter.com/nomaanarif786";
        var lin = "https://www.linkedin.com/in/nomaan-arif-b0590a102/";
        var ins = "https://www.instagram.com/nomaanarif786/";
        var skype = "skype:nomaanarif786";
        var wapp = "https://wa.me/918745999480";

        document.querySelectorAll(".number").forEach(function(e){
            e.setAttribute("target", "_blank");
            e.setAttribute("href", `tel:${number}`);
            if(document.contains(e.querySelector(".txt"))){
                e.querySelector(".txt").innerHTML = number;
            }
        });
        document.querySelectorAll(".mail").forEach(function(e){
            e.setAttribute("target", "_blank");
            e.setAttribute("href", `mailto:${mail}`);
            if(document.contains(e.querySelector(".txt"))){
                e.querySelector(".txt").innerHTML = mail;
            }
        });
        document.querySelectorAll(".address").forEach(function(e){
            e.querySelector(".txt").innerHTML = address;
        });
        document.querySelectorAll(".fb").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", fb);
        });
        document.querySelectorAll(".tw").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", tw);
        });
        document.querySelectorAll(".lin").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", lin);
        });
        document.querySelectorAll(".ins").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", ins);
        });
        document.querySelectorAll(".skype").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", skype);
        });
        document.querySelectorAll(".wapp").forEach(function(e){
            e.setAttribute("target", `_blank`);
            e.setAttribute("href", wapp);
        });
        document.querySelectorAll("main .fw").forEach(function (e) {
            e.parentElement.classList.add("fwParent");
        });
        document.querySelectorAll(".container .row [class*=col-] [class*=col-]").forEach(function (e) {
            e.parentElement.closest("[class*=col-]").style.marginBottom = 0;
        });
        document.querySelectorAll(".colors").forEach(function(a){
            const listItems = a.querySelectorAll("data, ul");
            const totalClasses = 10;
            var i = 1;
            for (let li of listItems) {
              if (i > totalClasses){
                i = 1;
              }
              li.style.setProperty("--bk1", `var(--b${i})`);
              i++;
            }
        });
        // document.querySelectorAll(".lrAnimate").forEach(function(e){
        //     for(var i = 0; i < e.children.length; i++){
        //         e.children[i].classList.add("animate");
        //         if(i % 2 === 0){
        //             e.children[i].classList.add("bounceInLeft");
        //         }else{
        //             e.children[i].classList.add("bounceInRight");
        //         }
        //     }
        // });
        document.querySelectorAll(".pageTop").forEach(function(e){
            e.addEventListener("click", function(){
                window.scrollTo(0,0);
            });
        });
      }, []);
      return children;
}
export default CustomScript;