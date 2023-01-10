// $("h4, p").html("This is the"+" <b>first</b> "+"JQuery test");

$("#p1").append(".... Set After the content withoit replacing using <b><i>append()</i></b> method");
$("#p2").prepend("Set Before the content withoit replacing using <b><i>prepend()</i></b> method.... ");

let para1 = $("<p></p>").text("This is the paragraph before content");
let para2 = $("<p></p>").text("This is the paragraph after content");

$("#beforeafter").before(para1);
$("#beforeafter").after(para2);

// let myAttribute = document.querySelector("a").getAttribute("href");
// console.log(myAttribute)
// $("a").attr("href");
// $("a").removeAttr("href");

// document.querySelector("a").setAttribute("href","https://www.mahiuddin.epizy.com");

$("a").attr("href","https://www.mahiuddin.epizy.com");
$("#styling").css({
    "backgroundColor":"#e74c3c",
    "color":"#fff",
    "borderRadius":"5px",
    "boxShadow":"5px 4px 5px #95a5a6",
    "padding" : "4px 0 4px 10px"
});
//We can use any pre customised class using the method addClass("example_name");
let styling1 = $("<h1></h1>").text("Added from JQuery page").css({
    "backgroundColor":"#3498db",
    "color":"#fff",
    "borderRadius":"5px",
    "boxShadow":"5px 4px 5px #95a5a6",
    "padding" : "4px 0 4px 10px"
});
$("#styling").after(styling1);

//add event listener using javescript
// document.querySelector("#button").addEventListener("click", function(){
//     document.querySelector("#eventpara").innerHTML = "You have clicked the button";
// });

//add event listener using jquery
$("#button").click(function(){
    $("#eventpara").toggleClass("eventToggle");
});

//add multiple event listenser
$("#myButton").on("click", function(){
    var value = this.innerHTML;
    $("#listner").text(value +" is clicked");
})