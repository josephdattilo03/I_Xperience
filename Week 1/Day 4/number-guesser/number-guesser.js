let numb = Math.floor(1 + Math.random() * 10)

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title")
    let titleInterval = setInterval(function() {
        if (title.innerText === "10") {
            title.innerText = "1"
        } else {
            title.innerText = parseInt(title.innerText) + 1
        }
    }, 500)

    

});

function clickedButton() {
    console.log(numb)
    if (document.getElementById("input").value === "") {
        alert("Please enter a value!")
    } else if (parseInt(document.getElementById("input").value) === numb) {
        numb = Math.floor(Math.random() * 10)
        alert("You got it!!! A new number has been generated.")
    } else {
        alert("Not quite... Keep it up!")
        document.getElementById("input").value = ""
    }
}