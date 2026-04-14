var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: false,
}})

tl.to("#fanta", {
    top: "122%",
    left: "3%"
},'orange');

tl.to("#orangeslice",{
    rotate: "360deg",
    top: "110%",
    left:"23%"
},'orange')

tl.to("#orange",{
    top: "165%",
    left:"5%"
},'orange')

tl.to("#orange2",{
    innerWidth: "10%",
},'orange')

tl.to("#leaf",{
    rotate: "270deg",
    top: "110%",
    left:"85%"
},'orange')

tl.to("#leaf2",{
    rotate: "450deg",
    top: "167%",
    left:"45%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from("#cocacolalogo",{
    rotate: "-110deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#cocacola",{
    rotate: "-110deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#pepsilogo",{
    rotate: "110deg",
    left: "50%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "110deg",
    left: "50%",
    top: "110%"
}, 'ca')

tl2.to("#orangeslice",{
    left: "43%",
    top: "200%"
}, 'ca')

tl2.to("#fanta",{
    width: "29%",
    left: "36%",
    top: "215%"
}, 'ca')

