function getDate() {
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("timestamp").innerText = new Date();
    }
};
xhttp.open("GET", "/last.txt", true);

xhttp.send();
}