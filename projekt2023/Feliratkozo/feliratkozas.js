function vizsgal() {

    var email = document.getElementById("email").value

    if (email.length > 4 && email.includes("@") && email.includes(".")) {
        document.getElementById("ideir3").style.visibility = "hidden"
    }
    else {
        document.getElementById("ideir3").style.visibility = "visible"
        document.getElementById("ideir3").innerHTML = "Helytelen email!"

    }
}