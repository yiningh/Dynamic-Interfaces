var beat = -1;
var bar = 0;
var startTime;
var tempo = 80; // BPM (beats per minute)
var eighthNoteTime = (60 / tempo) / 2;

/*--load sound sources--*/
var ah01 = new sound('audio/ah01.wav');
var ah02 = new sound('audio/ah02.wav');
var ah03 = new sound('audio/ah03.wav');
var ah04 = new sound('audio/ah04.wav');
var ah05 = new sound('audio/ah05.wav');
/*end of load sound source*/
var soundClips = [ah01, ah02, ah03, ah04, ah05];
var ah01s, ah02s, ah03s, ah04s, ah05s;
var soundClipsAh = [ah01s, ah02s, ah03s, ah04s, ah05s];

$(document).ready(function() {
    init();
});

function init() {
    if(!window.audioContext){
        audioContext = new webkitAudioContext;
    } else {
        throw new Error('AudioContext not supported. :(');
    }
}

function playBeats() {
    startTime = audioContext.currentTime;
    var time = startTime;
    console.log('in beat loop '+soundClipsAh[4])
    // gunSound.play(time+2 * eighthNoteTime);
    // gunSound.play(time+6 * eighthNoteTime);
    for(var i = 0; i < 5; i++){
        if(soundClipsAh[i] == true){
            soundClips[i].play(time + 1 * eighthNoteTime);
            console.log('it sould be played!');
        }
    }
}

function playAll(){
    for(var i = 0; i < 3; i++){
        soundClips[i].play();
    }
}

function stopAll(){
    for(var i = 0; i < 3; i++){
        soundClips[i].stop();
    }
};

function load(){
    playBeats();
    function addBeat(){
        console.log("in load loop " +ah05s);
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
    that.startSound;

    var getSound = new XMLHttpRequest();
    getSound.open('GET', that.source, 'true');
    getSound.responseType = 'arraybuffer';
    getSound.onload = function(){
        audioContext.decodeAudioData(getSound.response, function(buffer){
            that.buffer = buffer;
            that.isLoaded = true;
            if(that.isLoaded == true){
                that.startSound = audioContext.createBufferSource();
                that.startSound.buffer = that.buffer;
                that.startSound.connect(audioContext.destination);
            }
        });
    }
    getSound.send();
}

sound.prototype.play = function(time){
    if(!time){time = 0;}else{time = time;}
    if(this.isLoaded == true){
        this.startSound.noteOn(time);
    }
}

sound.prototype.stop = function(time){
    if(!time){time = 0;}else{time = time;}
    if(this.isLoaded == true){
        this.startSound.noteOff(time);
    }
}

sound.prototype.start = function(){
    if(this.isLoaded == true){
        this.startSound.loop = true;
        this.startSound.playbackRate.value = 1.0;
        this.startSound.noteOn(0);
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