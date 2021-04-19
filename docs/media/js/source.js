var a;

function show_hide() {
    if (a == 0) {
        document.getElementById("mobileshow").style.display = "none";
        return a = 1;
    }

    else {
        document.getElementById("mobileshow").style.display = "block";
        return a = 0;
    }
}

function hide() {
    document.getElementById("mobileshow").style.display = "none";
    return a = 1;
}