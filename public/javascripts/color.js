function getColor() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("colorText").innerHTML = this.responseText;
            document.getElementById("colorText").style.color = this.responseText;
        }
    };
    xhttp.open("GET", "/color.txt", true);

    xhttp.send();
    }