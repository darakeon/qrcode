$(document).ready(function () {
	const text = window.location.search.substring(1)
	const correctLevel = 0
	$('#qrcode').qrcode({ text, correctLevel })
})
