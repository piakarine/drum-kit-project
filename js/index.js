
	function removeTransition(e){
		if(e.propertyName !== 'transform') return; // stops function from running
		this.classList.remove('playing');
		
	}
	
	function playAudio(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		
		if (!audio) return; // stops function from running when audio is null
		audio.currentTime = 0;//resets audio
		audio.play();
		key.classList.add('playing');
	}
	
	const keys = document.querySelectorAll(".key");
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	
	window.addEventListener('keydown',playAudio);