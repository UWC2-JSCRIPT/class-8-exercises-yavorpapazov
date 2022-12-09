document.addEventListener("DOMContentLoaded", function() {
    let body = document.body
    let bodyColor = 255
    let countDown = setInterval(function() {
        if(bodyColor >= 0) {
            body.style.backgroundColor = `rgb(${bodyColor}, ${bodyColor}, ${bodyColor})`
            bodyColor--
        } else {
            clearInterval(countDown)
        }
    }, 500)
})