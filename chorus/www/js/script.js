var beat = -1;
var startTime;
var tempo = 80;
var eighthNoteTime = (60 / tempo) / 2;

/*--load sound sources--*/
var ah01 = new sound('audio/max/ah01.wav');
var ah02 = new sound('audio/max/ah02.wav');
var ah03 = new sound('audio/max/ah03.wav');
var ah04 = new sound('audio/max/ah04.wav');
var ah05 = new sound('audio/max/ah05.wav');
var aya01 = new sound('audio/max/ma01.wav');
var aya02 = new sound('audio/max/ma02.wav');
var aya03 = new sound('audio/max/ma03.wav');
var aya04 = new sound('audio/max/ma04.wav');
var aya05 = new sound('audio/max/ma05.wav');
var dd01 = new sound('audio/max/dingdong01.wav');
var dd02 = new sound('audio/max/dingdong02.wav');
var dd03 = new sound('audio/max/dingdong03.wav');
var dd04 = new sound('audio/max/dingdong04.wav');
var dd05 = new sound('audio/max/dingdong05.wav');
var ohno01 = new sound('audio/max/ohno01.wav');
var ohno02 = new sound('audio/max/ohno02.wav');
var ohno03 = new sound('audio/max/ohno03.wav');
var ohno04 = new sound('audio/max/ohno04.wav');
var ohno05 = new sound('audio/max/ohno05.wav');

var maxVoice = [ah05, ah04, ah03, ah02, ah01, aya05, aya04, aya03. aya02, aya01, dd05, dd04, dd03, dd02, dd01, ohno05, ohno04, ohno03, ohno02, ohno01];

$(document).ready(function() {
    init();
});

function init() {
    if(!window.audioContext){
        audioContext = new webkitAudioContext;
    } else {
        throw new Error('AudioContext not supported. :(');
    }
    $('#voice-one').append('<p>voice one</p>');
    $('#voice-two').append('<p>voice two</p>');
    $('#voice-three').append('<p>voice three</p>');
    $('#voice-four').append('<p>voice four</p>');
    $('#dragging-area article').draggable({
        cursor:'move',
        snap: '#beat-wrapper ul li',
        helper:'clone',
    });
    $('#beat-wrapper ul li').droppable({
        accept: '#dragging-area article', 
        hoverClass: 'hovered',
        drop: function(event, ui) {
            if ($(this).hasClass('clicked')||$(this).hasClass('clicked-two')||$(this).hasClass('clicked-three')||$(this).hasClass('clicked-four')){
                $(this).removeClass('clicked');
                $(this).removeClass('clicked-two')
                $(this).removeClass('clicked-three')
                $(this).removeClass('clicked-four')
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){
                        pitches[i] = false;
                        pitches[80+i] = false;
                        pitches[160+i] = false;
                        pitches[240+i] = false;
                    }
                }
            }
            if (ui.draggable.is('#voice-one')) {
                $(this).addClass('clicked');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[i] = true;}
                }
            } 
            if (ui.draggable.is('#voice-two')){
                $(this).addClass('clicked-two');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[80+i] = true;}
                }
            }
            if (ui.draggable.is('#voice-three')){
                $(this).addClass('clicked-three');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[160+i] = true;}
                }
            }
            if (ui.draggable.is('#voice-four')){
                $(this).addClass('clicked-four');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[240+i] = true;}
                }
            }
            /*=====================DROP SOUND: MAXIE DECODING=================*/
            if(username == 'maxie'){
                for(var i = 0; i < 320; i++){
                    if(pitches[i] == true){max[i] = true;}
                }
                for(var i = 0; i < 320; i++){
                    if(pitches[i] == false){max[i] = false;}
                }
            }
        }
    });
}

function playBeats() {
    startTime = audioContext.currentTime;
    var time = startTime;
    /*======================= AH ===========================*/
    for(var i =0; i < 5; i ++){
        if(max[i] == true){maxVoice[i].play(time + 1 *eighthNoteTime);}
        if(max[5+i] == true){maxVoice[i].play(time + 2 *eighthNoteTime);}
        if(max[10+i] == true){maxVoice[i].play(time + 3 *eighthNoteTime);}
        if(max[15+i] == true){maxVoice[i].play(time + 4 *eighthNoteTime);}
        if(max[10+i] == true){maxVoice[i].play(time + 5 *eighthNoteTime);}
        if(max[25+i] == true){maxVoice[i].play(time + 6 *eighthNoteTime);}
        if(max[30+i] == true){maxVoice[i].play(time + 7 *eighthNoteTime);}
        if(max[35+i] == true){maxVoice[i].play(time + 8 *eighthNoteTime);}
        if(max[40+i] == true){maxVoice[i].play(time + 9 *eighthNoteTime);}
        if(max[45+i] == true){maxVoice[i].play(time + 10 *eighthNoteTime);}
        if(max[50+i] == true){maxVoice[i].play(time + 11 *eighthNoteTime);}
        if(max[55+i] == true){maxVoice[i].play(time + 12 *eighthNoteTime);}
        if(max[60+i] == true){maxVoice[i].play(time + 13 *eighthNoteTime);}
        if(max[65+i] == true){maxVoice[i].play(time + 14 *eighthNoteTime);}
        if(max[70+i] == true){maxVoice[i].play(time + 15 *eighthNoteTime);}
        if(max[75+i] == true){maxVoice[i].play(time + 16 *eighthNoteTime);}
    }
    /*======================= MA ===========================*/
    for(var i =5; i < 10; i ++){
        if(max[80+i] == true){maxVoice[i].play(time + 1 *eighthNoteTime);}
        if(max[85+i] == true){maxVoice[i].play(time + 2 *eighthNoteTime);}
        if(max[90+i] == true){maxVoice[i].play(time + 3 *eighthNoteTime);}
        if(max[95+i] == true){maxVoice[i].play(time + 4 *eighthNoteTime);}
        if(max[100+i] == true){maxVoice[i].play(time + 5 *eighthNoteTime);}
        if(max[105+i] == true){maxVoice[i].play(time + 6 *eighthNoteTime);}
        if(max[110+i] == true){maxVoice[i].play(time + 7 *eighthNoteTime);}
        if(max[115+i] == true){maxVoice[i].play(time + 8 *eighthNoteTime);}
        if(max[120+i] == true){maxVoice[i].play(time + 9 *eighthNoteTime);}
        if(max[125+i] == true){maxVoice[i].play(time + 10 *eighthNoteTime);}
        if(max[130+i] == true){maxVoice[i].play(time + 11 *eighthNoteTime);}
        if(max[135+i] == true){maxVoice[i].play(time + 12 *eighthNoteTime);}
        if(max[140+i] == true){maxVoice[i].play(time + 13 *eighthNoteTime);}
        if(max[145+i] == true){maxVoice[i].play(time + 14 *eighthNoteTime);}
        if(max[150+i] == true){maxVoice[i].play(time + 15 *eighthNoteTime);}
        if(max[155+i] == true){maxVoice[i].play(time + 16 *eighthNoteTime);}
    }
    /*======================= DINGDONG ===========================*/
    for(var i =10; i < 15; i ++){
        if(max[160+i] == true){maxVoice[i].play(time + 1 *eighthNoteTime);}
        if(max[165+i] == true){maxVoice[i].play(time + 2 *eighthNoteTime);}
        if(max[170+i] == true){maxVoice[i].play(time + 3 *eighthNoteTime);}
        if(max[175+i] == true){maxVoice[i].play(time + 4 *eighthNoteTime);}
        if(max[180+i] == true){maxVoice[i].play(time + 5 *eighthNoteTime);}
        if(max[185+i] == true){maxVoice[i].play(time + 6 *eighthNoteTime);}
        if(max[190+i] == true){maxVoice[i].play(time + 7 *eighthNoteTime);}
        if(max[195+i] == true){maxVoice[i].play(time + 8 *eighthNoteTime);}
        if(max[200+i] == true){maxVoice[i].play(time + 9 *eighthNoteTime);}
        if(max[205+i] == true){maxVoice[i].play(time + 10 *eighthNoteTime);}
        if(max[210+i] == true){maxVoice[i].play(time + 11 *eighthNoteTime);}
        if(max[215+i] == true){maxVoice[i].play(time + 12 *eighthNoteTime);}
        if(max[220+i] == true){maxVoice[i].play(time + 13 *eighthNoteTime);}
        if(max[225+i] == true){maxVoice[i].play(time + 14 *eighthNoteTime);}
        if(max[230+i] == true){maxVoice[i].play(time + 15 *eighthNoteTime);}
        if(max[235+i] == true){maxVoice[i].play(time + 16 *eighthNoteTime);}
    }
    /*======================= OHNO ===========================*/
    for(var i =15; i < 20; i ++){
        if(max[240+i] == true){maxVoice[i].play(time + 1 *eighthNoteTime);}
        if(max[245+i] == true){maxVoice[i].play(time + 2 *eighthNoteTime);}
        if(max[250+i] == true){maxVoice[i].play(time + 3 *eighthNoteTime);}
        if(max[255+i] == true){maxVoice[i].play(time + 4 *eighthNoteTime);}
        if(max[260+i] == true){maxVoice[i].play(time + 5 *eighthNoteTime);}
        if(max[265+i] == true){maxVoice[i].play(time + 6 *eighthNoteTime);}
        if(max[270+i] == true){maxVoice[i].play(time + 7 *eighthNoteTime);}
        if(max[275+i] == true){maxVoice[i].play(time + 8 *eighthNoteTime);}
        if(max[280+i] == true){maxVoice[i].play(time + 9 *eighthNoteTime);}
        if(max[285+i] == true){maxVoice[i].play(time + 10 *eighthNoteTime);}
        if(max[290+i] == true){maxVoice[i].play(time + 11 *eighthNoteTime);}
        if(max[295+i] == true){maxVoice[i].play(time + 12 *eighthNoteTime);}
        if(max[300+i] == true){maxVoice[i].play(time + 13 *eighthNoteTime);}
        if(max[305+i] == true){maxVoice[i].play(time + 14 *eighthNoteTime);}
        if(max[310+i] == true){maxVoice[i].play(time + 15 *eighthNoteTime);}
        if(max[315+i] == true){maxVoice[i].play(time + 16 *eighthNoteTime);}
    }



}

function stopBeat(){
    beat = 100;
}

function load(){
    beat = 1;
    playBeats();
    function addBeat(){
        beat += 1;
        if (beat >= 17 && beat <= 22){
            playBeats();
            beat = 1;
        }
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
        var startSound = audioContext.createBufferSource();
        startSound.buffer = this.buffer;
        startSound.connect(audioContext.destination);
        startSound.noteOn(time);
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