document.addEventListener("DOMContentLoaded", function() {
	let p = new Promise((resolve, reject) => {
		setTimeout(() => {
			let randomNumber = Math.random().toFixed(1)
			if(randomNumber > 0.5) {
				resolve()
			} else {
				reject()
			}
		}, 1000)
	})
	p.then(() => {
		console.log('success')
	}).catch(() => {
		console.log('fail')
	}).finally(() => {
		console.log('complete')
	})
})