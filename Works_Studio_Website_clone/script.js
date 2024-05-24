

var tl = gsap.timeline();
tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
});

tl.from(".yellow2", {
    top: "100%",
    delay: 0.7,
    duration: 0.5,
    ease: "expo.out"
}, "anime");

tl.to(".loader h1", {
    delay: 0.6,
    duration: 0.5,
    color: "black"
}, "anime");

tl.to(".loader", {
    opacity: 0
});

tl.to(".loader", {
    display: "none"
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


 var elem = document.querySelectorAll(".elem");
 var page2 = document.querySelector(".page2");

 elem.forEach((item)=>{
    item.addEventListener("mouseenter",()=>{
        var bgImg = item.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgImg})`
    
    })
 })


 function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click event listener to the Back to Top button
document.getElementById("backtoTop").addEventListener("click", function() {
    scrollToTop();
});