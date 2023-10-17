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

var page1 = gsap.timeline(
    {
    scrollTrigger: {
        trigger: "body",
        toggleAction: "restart none none pause",
        // markers: true,
        scroller: ".main",
        start: "top 40%",
        end: "top 0%", 
    }
})

page1.from(".page1 h1,.page1 h2,.page1 h3",{
    fontWeight:"100",
    x: -1000,
    rotate: 0,
    opacity: 0,
    delay: 0.4,
    duration: 0.9,
    stagger: 0.4,
    pin: "true"
})

var page2Bgc = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 20%",
        end: "bottom 130%",
        scrub:1,
        stagger: 0.4
    }
})

page2Bgc.to(".main", {
    backgroundColor: "#fff",
    duration: 2
})

var page2Content = gsap.timeline({
    scrollTrigger: {
        trigger: ".right",
        scroller: ".main",
        start: "start 120%",
        end: "bottom 130%",
        scrub:5,
        
    }
})

page2Content.from(".right h1,.right p,.text-wrapper h3,.get-in-touch-btn", {
    y:-100,
    scale:0.8,
    opacity: 0,
    stagger: 0.2,
    duration:1.7,
    delay: 1,
})


var page3Bgc = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 ",
        scroller: ".main",
        start: "top 100%",
        end: "top 30%",
        scrub:8
    }
})

page3Bgc.from(".page3-heading h1,.Home_line___MWv3" ,{
    x: -1000,
    opacity: 0,
    delay: 0.4,
    duration: 0.9,
    stagger: 0.8,
    scrub:8
})



var page4Bgc = gsap.timeline({
    scrollTrigger: {
        scrollTrigger: {
            trigger: ".page3 ",
            scroller: ".main",
            markers: true,
            start: "top 100%",
            end: "top 30%",  
            scrub:8
        }
    }
})


// page4Bgc.from(".stagger-1,.service",{
//     x: -500,
//     opacity: 0,
//     delay: 1,
//     duration: 0.9,
//     scrub:5,
//     stagger: 1.8,
//     markers: true,
   
    
// })

// var services = gsap.timeline({
//     scrollTrigger: {
//         scrollTrigger: {
//             trigger: ".service ",
//             scroller: ".main",
//             markers: true
//         }
//     }
// })

// services.from(".stagger-1,.service",{
//     x: -500,
//     opacity: 0,
//     delay: 1,
//     duration: 0.9,
//     scrub:5,
//     stagger: 1.8,
//     markers: true,
   
    
// })




// var page4Bgc = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page ",
//         scroller: ".main",
//         markers:true,
//         start: "top 0%",
//         end: "bottom 20%",
//         scrub:5,
//         stagger: 3
//     }
// })









