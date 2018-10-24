var config = {
    apiKey: "AIzaSyDu263vpDxdvh3DIFy2nh93NBwzWLI6Wys",
    authDomain: "c11-thrilltheburg.firebaseapp.com",
    databaseURL: "https://c11-thrilltheburg.firebaseio.com",
    projectId: "c11-thrilltheburg",
    storageBucket: "c11-thrilltheburg.appspot.com",
    messagingSenderId: "754839820372"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref("contactforms");

$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function () {
    $(".jumbotron").css({ height: $(window).height() + "px" });
});

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    var firstName = getInputValue("firstName");
    var lastName = getInputValue("lastName");
    var email = getInputValue("email");

    saveMessage(firstName, lastName, email);
    clearForm();
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function saveMessage(firstName, lastName, email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email
    });
}

function clearForm() {
    var f = document.forms['contactForm'];
    for (var i = 0, fLen = f.length; i < fLen; i++) {
        f.elements[i].readOnly = true;
    }
    document.getElementById("submit").textContent = "Submitted";
    document.getElementById("submit").innerText = "Submitted";
    document.getElementById("submit").style.backgroundColor = "#D18A20";
    document.getElementById("submit").style.borderColor = "#D18A20";
}

function amCountdown() {
    var now = new Date();
    var eventDate = new Date(2018, 9, 27, 6);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("amTimer").textContent = d + " : " + h + " : " + m + " : " + s;
    document.getElementById("amTimer").innerText = d + " : " + h + " : " + m + " : " + s;

    setTimeout(amCountdown, 1000);
}

function pmCountdown() {
    var now = new Date();
    var eventDate = new Date(2018, 9, 27, 18);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("pmTimer").textContent = d + " : " + h + " : " + m + " : " + s;
    document.getElementById("pmTimer").innerText = d + " : " + h + " : " + m + " : " + s;

    setTimeout(pmCountdown, 1000);
}

amCountdown();
pmCountdown();