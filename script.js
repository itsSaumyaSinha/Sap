
const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true
});

function videoconAnimation()
{
var videocon=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-235
    })
})
}
videoconAnimation()
function loadinganimation()
{
gsap.from("#page1 h1",{
    y:30,
    opacity:0,
    delay:0.2,
    duration:0.5,
    stagger:0.3
})
gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:0.2,
    duration:0.2
})
}
loadinganimation()

document.addEventListener("mousemove", function(dets) {
    gsap.to("#cursor", {
        left: dets.clientX,
        top: dets.clientY,
        duration: 0.1  // optional, for smoother animation
    });
});

document.querySelectorAll(".child").forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)',
            duration: 0.3  // optional, for smoother animation
        });
    });

    elem.addEventListener("mouseleave", function() {
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)',
            duration: 0.3  // optional, for smoother animation
        });
    });
});
