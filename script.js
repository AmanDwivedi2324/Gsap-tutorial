// javascript animation library == gsap 

/*

gsap.to("targeted element",{             //to -- from initial to final

})

gsap.from("targeted element",{           //form -- from final to initial 

})

*/

gsap.to("#page1 #box",{                    //we can also use css properties 
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:50,                      //use camel case for writing property of css in gsap
    backgroundColor:"blue",
    borderRadius:"50%"
})

gsap.from("#page2 #box",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:50,
    backgroundColor:"green",
    borderRadius:"50%"
})

gsap.from("#page3 h1",{
    opacity:0,
    duration:1,
    delay:0.5,
    y:30,
    stagger:1                              //h1 pop from bottom one by one (if -1 then last line will show first and then second last and so on)
})

gsap.to("#page4 #box",{
    x:1200,
    duration:1,
    delay:1,
    rotate:360,
    repeat:1,                            //agr 1 to 2 bar , agr 2 to 3 bar, agr -1 to infinite time
    yoyo:true                             //initial to final and then final to initial
})

var tl = gsap.timeline();               //timeline is used for executing animations line by line
tl.to("#page5 #box1",{
    x:1200,
    duration:1,
    rotate:260,
    backgroundColor:"yellow",
    borderRadius:"50%"
})
tl.to("#page5 #box2",{
    x:1200,
    duration:1,
    rotate:260,
    backgroundColor:"blue",
    borderRadius:"50%"
})
tl.to("#page5 #box3",{
    x:1200,
    duration:1,
    rotate:260,
    backgroundColor:"red",
    borderRadius:"50%"
})

var tl2 = gsap.timeline();

tl2.from("#page6 h2",{
    opacity:0,
    y:30,
    duration:1,
    delay:0.5
})

tl2.from("#right h4",{
    opacity:0,
    y:30,
    duration:1,
    stagger:0.5
})