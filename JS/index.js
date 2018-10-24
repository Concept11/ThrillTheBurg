$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function () {
    $(".jumbotron").css({ height: $(window).height() + "px" });
});

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});

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