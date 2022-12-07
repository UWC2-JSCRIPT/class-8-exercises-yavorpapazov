document.addEventListener("DOMContentLoaded", function() {
    let body = document.body
    let bodyColor = 0
    function animate() {
        bodyColor++
        if(bodyColor < 255) {
            body.style.backgroundColor = `rgb(${bodyColor}, ${bodyColor}, ${bodyColor})`
            requestAnimationFrame(animate)
        }
    }
    requestAnimationFrame(animate)
})