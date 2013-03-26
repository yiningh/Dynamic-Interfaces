
$(document).ready(function() {
	init();
    load();
});

var beat = -1;
var bar = 0;
var startTime;
var tempo = 80; // BPM (beats per minute)
var eighthNoteTime = (60 / tempo) / 2;

function init() {
    if(!window.audioContext){
        audioContext = new webkitAudioContext;
    } else {
        throw new Error('AudioContext not supported. :(');
    }
    return false;
}

function load(){
    playBeats();
    function addBeat(){
        beat += 1;
        if (beat >= 17){
            beat = 1;
            bar = 0;
            playBeats();
        }
        console.log('beat is: '+ beat);
        beatVisualizer();
    }
    setInterval(addBeat,eighthNoteTime*1000);
}

//audio object
function sound(source){
    var that = this;
    that.source = source;
    that.buffer = null;
    that.isLoaded = false;

    var getSound = new XMLHttpRequest();
    getSound.open('GET', that.source, 'true');
    getSound.responseType = 'arraybuffer';
    getSound.onload = function(){
        audioContext.decodeAudioData(getSound.response, function(buffer){
            that.buffer = buffer;
            that.isLoaded = true;
        });
    }
    getSound.send();
}

function playBeats() {
    console.log('playbeats loop');
    startTime = audioContext.currentTime;
    var time = startTime;
    console.log('playbeats time is at '+ time);
    gunSound.play(time+2 * eighthNoteTime);
    gunSound.play(time+6 * eighthNoteTime);
}

sound.prototype.play = function(time){
    if(this.isLoaded == true){
        if(!time){time = 0;}else{time = time;}
        var playSound = audioContext.createBufferSource();
        playSound.buffer = this.buffer;
        playSound.connect(audioContext.destination);
        playSound.noteOn(time);
    }
}

sound.prototype.start = function(){
    if(this.isLoaded == true){
        var startSound = audioContext.createBufferSource();
        startSound.buffer = this.buffer;
        startSound.loop = true;
        startSound.playbackRate.value = 2.0;
        startSound.connect(audioContext.destination);
        startSound.noteOn(1);
    }
}

function beatVisualizer(){
    if(beat == 1){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-1 li').addClass('on-beat');
    }
    if(beat == 2){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-2 li').addClass('on-beat');
    }
    if(beat == 3){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-3 li').addClass('on-beat');
    }
    if(beat == 4){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-4 li').addClass('on-beat');
    }
    if(beat == 5){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-5 li').addClass('on-beat');
    }
    if(beat == 6){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-6 li').addClass('on-beat');
    }
    if(beat == 7){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-7 li').addClass('on-beat');
    }
    if(beat == 8){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-8 li').addClass('on-beat');
    }
    if(beat == 9){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-9 li').addClass('on-beat');
    }
    if(beat == 10){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-10 li').addClass('on-beat');
    }
    if(beat == 11){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-11 li').addClass('on-beat');
    }
    if(beat == 12){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-12 li').addClass('on-beat');
    }
    if(beat == 13){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-13 li').addClass('on-beat');
    }
    if(beat == 14){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-14 li').addClass('on-beat');
    }
    if(beat == 15){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-15 li').addClass('on-beat');
    }
    if(beat == 16){
        $('#beat-wrapper ul li').removeClass('on-beat');
        $('#beat-16 li').addClass('on-beat');
    }

}