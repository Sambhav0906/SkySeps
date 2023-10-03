function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 20%",
        end: "top 0",
     
    }
})

gsap.from(".page1 h1",{
    x: -1000,
    rotate: 0,
    opacity: 0,
    delay: 0.4,
    duration: 0.9
})

gsap.from(".page1 h2", {
    x: -1000,
    rotate: 0,
    opacity: 0,
    delay: 0.8,
    duration: 0.9
})


gsap.from(".page1 h3", {
    x: -1000,
    rotate: 0,
    opacity: 0,
    delay: 1.2,
    duration: 0.9
})


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
    
        start: "top -50%",
        end: "top -390%",
        scrub: 4
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})







gsap.from(".right h1", {
    y: 900,
    rotate: 0,
    opacity: 0,
    delay: 2    ,
    duration: 1.9
})


gsap.from(".right .get-in-touch-btn", {
    y: 800,
    rotate: 0,
    opacity: 0,
    delay: 3.4,
    duration: 2 
})



gsap.from(".text-wrapper h3", {
    y: 800,
    rotate: 0,
    opacity: 0,
    delay: 2.3,
    duration: 1.9
})

gsap.from(".right p", {
    y:  1000,
    rotate: 0,
    opacity: 0,
    delay: 2.1,
    duration: 1.9
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -220%",
        end: "top -360%",
        scrub: 3
    }
})


// var tl4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         // markers:true,
//         start: "top -115",
//         end: "top -140%",
//         scrub: 3
//     }
// })




tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})





