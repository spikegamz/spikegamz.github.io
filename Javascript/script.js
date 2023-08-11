//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
//page 1 buttons
const page1btn1 = document.querySelector("#page1btn1");
const page1btn2 = document.querySelector("#page1btn2");
const page1btn3 = document.querySelector("#page1btn3");
const page1btn4 = document.querySelector("#page1btn4");
const page1btn5 = document.querySelector("#page1btn5");
const page1btn6 = document.querySelector("#page1btn6");
const page1btn7 = document.querySelector("#page1btn7");
const page1btn8 = document.querySelector("#page1btn8");
//page 2 buttons
const page2btn1 = document.querySelector("#page2btn1");
const page2btn2 = document.querySelector("#page2btn2");
const page2btn3 = document.querySelector("#page2btn3");
const page2btn4 = document.querySelector("#page2btn4");

const page2btn5 = document.querySelector("#page2btn5");

const page2btn6 = document.querySelector("#page2btn6");
//page 3 buttons
const page3btn1 = document.querySelector("#page3btn1");
const page3btn2 = document.querySelector("#page3btn2");





const returntoindex = document.querySelector(".mainpageimage");
const mainpagebtn1 = document.querySelector("#mainpage1btn");
const mainpagebtn2 = document.querySelector("#mainpage2btn");
const mainpagebtn3 = document.querySelector("#mainpage3btn");

var allpages=document.querySelectorAll(".page");
var alltextbubbles = document.querySelectorAll(".textbubble");
var allsubbubbles = document.querySelectorAll(".subbubble");

var animationtimer  = 0;
const textfadein = [
    {transform:"translateX(50px)"}];

const fadeintiming = {
    duration: 200,
    iterations: 1,
};

//select all subtopic pages
console.log(allpages);
hideall();
hideallbub();
hideallsubbub();
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function hideallbub(){
    for(let onetextbubble of alltextbubbles){ //go through all textbubbles and hide them
        onetextbubble.style.opacity=0; //hide it
    }
}
function hideallsubbub(){
    for(let onesubbubble of allsubbubbles){ //go through all textbubbles and hide them
        onesubbubble.style.opacity=0; //hide it
    }
}

/* calculate vh and vw so the animations are scaled properly*/
function vh(percent){
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}
function vw(percent){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}

var id = null;
function showb(bubblenumber){
    hideallbub();
    let onetextbubble = document.querySelector("#textbubble" + bubblenumber);
    //onetextbubble.style.display = "block";
    /*onetextbubble.style.visibility = "visible"
    var pos = vw(60);
    console.info(vh(20));
    clearInterval(id);
    id = setInterval(frame,5);
    function frame(){
        if (pos >= vw(70)){
            clearInterval(id);
           //onetextbubble.style.position = "absolute";
           //onetextbubble.style.display = "flex";
            
        } else {
            pos++;
            onetextbubble.style.left = pos + 'px';
            
        }
    }
    */
   // onetextbubble.style.display="flex";
    onetextbubble.style.opacity = 1;
    
}
function showc(subbubblenumber){
    hideallsubbub();
    let onesubbubble = document.querySelector("#subbubble" + subbubblenumber);
    onesubbubble.style.opacity =1;
}

function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});

//pg1 img buttons
page1btn1.addEventListener("click", function () {
    
    showb(1);
    showc(1);
    

});
page1btn2.addEventListener("click", function () {
    
    showb(2);
    showc(2);
    

});
page1btn3.addEventListener("click", function () {
    
    showb(3);
    showc(3);
    

});
page1btn4.addEventListener("click", function () {
    
    showb(4);
    showc(4);
    

});
page1btn5.addEventListener("click", function () {
    
    showb(5);
    showc(5);
    

});
page1btn6.addEventListener("click", function () {
    
    showb(6);
    showc(6);
    

});
page1btn7.addEventListener("click", function () {
    
    showb(7);
    showc(7);
    

});
page1btn8.addEventListener("click", function () {
    
    showb(8);
    showc(8);
    

});

//pg 2 img buttons
page2btn1.addEventListener("click", function () {
    
    showb(9);
    showc(9);
    

});
page2btn2.addEventListener("click", function () {
    
    showb(10);
    showc(10);
    

});
page2btn3.addEventListener("click", function () {
    
    showb(11);
    showc(11);
    

});
page2btn4.addEventListener("click", function () {
    
    showb(12);
    showc(12);
    

});
page2btn5.addEventListener("click", function () {
    
    showb(13);
    showc(13);
    

});
page2btn6.addEventListener("click", function () {
    
    showb(14);
    showc(14);
    

});
page3btn1.addEventListener("click", function () {
    
    showb(15);
    showc(15);
    

});
page3btn2.addEventListener("click", function () {
    
    showb(16);
    showc(16);
    

});



mainpagebtn1.addEventListener("click", function(){
    show(1);
})
mainpagebtn2.addEventListener("click", function(){
    show(2);
})
mainpagebtn3.addEventListener("click", function(){
    show(3);
})



/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");
function toggleMenus(){ /*open and close menu*/
if(menuItemsList.style.display=="block")
menuItemsList.style.display="none";
else menuItemsList.style.display="block";
}//can optimize using toggle class with css transitions

//return to main index button
returntoindex.addEventListener("click", function(){
    show(0);
})
