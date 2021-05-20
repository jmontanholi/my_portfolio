var modal1 = document.getElementById("modal-1")
var projectBtn1 = document.getElementById("project-btn-1");
var close1 = document.getElementsByClassName("close")[0]

projectBtn1.onclick = function() {
    modal1.style.display = "inline";
}

close1.onclick = function() {
    modal1.style.display = "none";
}

var modal2 = document.getElementById("modal-2")
var projectBtn2 = document.getElementById("project-btn-2");
var close2 = document.getElementsByClassName("close")[1]

projectBtn2.onclick = function() {
    modal2.style.display = "inline";
}

close2.onclick = function() {
    modal2.style.display = "none";
}

var modal3 = document.getElementById("modal-3")
var projectBtn3 = document.getElementById("project-btn-3");
var close3 = document.getElementsByClassName("close")[2]

projectBtn3.onclick = function() {
    modal3.style.display = "inline";
}

close3.onclick = function() {
    modal3.style.display = "none";
}

var modal4 = document.getElementById("modal-4")
var projectBtn4 = document.getElementById("project-btn-4");
var close4 = document.getElementsByClassName("close")[3]

projectBtn4.onclick = function() {
    modal4.style.display = "inline";
}

close4.onclick = function() {
    modal4.style.display = "none";
}

var modal5 = document.getElementById("modal-5")
var projectBtn5 = document.getElementById("project-btn-5");
var close5 = document.getElementsByClassName("close")[4]

projectBtn5.onclick = function() {
    modal5.style.display = "inline";
}

close5.onclick = function() {
    modal5.style.display = "none";
}

var modal6 = document.getElementById("modal-6")
var projectBtn6 = document.getElementById("project-btn-6");
var close6 = document.getElementsByClassName("close")[5]

projectBtn6.onclick = function() {
    modal6.style.display = "inline";
}

close6.onclick = function() {
    modal6.style.display = "none";
}

var menuBtn = document.getElementById("menu-btn");
var dropdown = document.getElementById("dropdown");
var menuClose = document.getElementById("menu-close")

menuBtn.onclick = function() {
    dropdown.style.display = "block";
    menuClose.style.display = "block";
    menuBtn.style.display = "none";
}

menuClose.onclick = function() {
    dropdown.style.display = "none"
    menuClose.style.display = "none"
    menuBtn.style.display = "block";
}