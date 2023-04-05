function getContent() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 403) {
            document.getElementById("main").style.display = "none";
            document.getElementById("terms").style.display = "block";
        } else {
            document.getElementById("main").style.display = "block";
            document.getElementById("terms").style.display = "none";
            document.getElementById("main").innerHTML += this.responseText;
        }
    };
    xhttp.open("GET", "/content.ajax", true);

    xhttp.send();
}

function getAccept() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            document.getElementById("terms").style.display = "none";
            document.getElementById("main").style.display = "block";
        }
    };
    xhttp.open("GET", "/accept", true);

    xhttp.send();
}