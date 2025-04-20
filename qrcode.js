$(document).ready(function () {
	const text = window.location.search.substring(1) || 'https://darakeon.com'
	const correctLevel = 0
	$('#qrcode').qrcode({ text, correctLevel })
})
