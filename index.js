import fetch from "node-fetch"
globalThis.fetch = fetch

const responseStatus = ((res) => {
	if (res.status >= 200 && res.status < 300) {
		return Promise.resolve(res)
	}
	return Promise.reject(new Error(res.statusText))
})

const json = ((res) => {
	return res.json()
})

// fetch('https://github.com/')
fetch('./todos.json')
	.then(responseStatus)
	.then(console.log("hi", responseStatus))
	// .then(json)
	// .then((data) => {
	// 	console.log('Request completed with JSON response', data)
	// })
	.catch((err) => {
		console.log('Request failed', err)
	})