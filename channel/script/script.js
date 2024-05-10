const iframe = document.getElementById('myIframe');
const main = document.getElementById('main');
function toggleFullscreen() {
	if (!document.fullscreenElement) {
		// If the iframe is not currently in fullscreen mode, go fullscreen
		iframe.requestFullscreen().catch((err) => {
			console.error('Error attempting to enable fullscreen:', err);
		});
	} else {
		// If the iframe is currently in fullscreen mode, exit fullscreen
		document.exitFullscreen();
	}
}
const da = document.getElementById('da');
da.addEventListener('click', function () {
	if (iframe.classList[0] !== 'ab') {
		iframe.classList.add('ab');
		da.innerHTML = 'Enabled ads';
		da.style.backgroundColor = 'red';
	} else {
		iframe.classList.remove('ab');
		da.innerHTML = 'Disabled ads';
		da.style.backgroundColor = 'green';
	}
});
