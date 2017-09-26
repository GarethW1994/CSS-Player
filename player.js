$(document).ready(function () {
    $('.playBTN').click(function () {
        var audio = $('.play-sprite').siblings('audio')[0];
        var bpm = $('.play-sprite').siblings('audio').data('bpm');
        var pulse = bpm / 76;

        //console.log(pulse);

        if (audio.paused === false) {
            audio.pause();
            audio.currentTime = 0;
            $('.play-sprite').removeClass('playing');
            //$('.spinner-center').removeClass('pulse');
            clearInterval(intervals);
        } else {
            audio.play();
            $('.play-sprite').addClass('playing');
            //$('.spinner-center').addClass('rotate');
            
            pulsing();
            intervals =  setInterval(function() {pulsing()}, pulse);
        }
		
		

        function pulsing() {
			if (audio.currentTime > 29) {
				 $('.play-sprite').removeClass('playing');
				$('.circle').addClass('pulse');
			}
            setTimeout( function() {
               $('.circle').removeClass('pulse');
            }, pulse-100);
        }
    });

});