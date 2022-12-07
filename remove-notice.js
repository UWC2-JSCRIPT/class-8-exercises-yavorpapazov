document.addEventListener("DOMContentLoaded", function() {
    let notice = document.querySelector('#maintenance-notice')
    setTimeout(() => {
        notice.style.display = 'none'
    }, 5000)
})