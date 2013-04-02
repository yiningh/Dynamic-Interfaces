$(document).ready(function(){

function init() {
    if(!window.audioContext){
        audioContext = new webkitAudioContext;
    } else {
        throw new Error('AudioContext not supported. :(');
    }
    load();
}

function stopBeat(){
    beat = 100;
    //drum.stop();
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
        this.startSound.playbackRate.value = 2.0;
        this.startSound.noteOn(0);
    }
}

function playBeats() {
    startTime = audioContext.currentTime;
    var time = startTime;

    for(var i =0; i < 5; i ++){
        if(joo[i] == true){jooVoice[i].play(time + 1 *eighthNoteTime);}
        if(joo[5+i] == true){jooVoice[i].play(time + 2 *eighthNoteTime);}
        if(joo[10+i] == true){jooVoice[i].play(time + 3 *eighthNoteTime);}
        if(joo[15+i] == true){jooVoice[i].play(time + 4 *eighthNoteTime);}
        if(joo[10+i] == true){jooVoice[i].play(time + 5 *eighthNoteTime);}
        if(joo[25+i] == true){jooVoice[i].play(time + 6 *eighthNoteTime);}
        if(joo[30+i] == true){jooVoice[i].play(time + 7 *eighthNoteTime);}
        if(joo[35+i] == true){jooVoice[i].play(time + 8 *eighthNoteTime);}
        if(joo[40+i] == true){jooVoice[i].play(time + 9 *eighthNoteTime);}
        if(joo[45+i] == true){jooVoice[i].play(time + 10 *eighthNoteTime);}
        if(joo[50+i] == true){jooVoice[i].play(time + 11 *eighthNoteTime);}
        if(joo[55+i] == true){jooVoice[i].play(time + 12 *eighthNoteTime);}
        if(joo[60+i] == true){jooVoice[i].play(time + 13 *eighthNoteTime);}
        if(joo[65+i] == true){jooVoice[i].play(time + 14 *eighthNoteTime);}
        if(joo[70+i] == true){jooVoice[i].play(time + 15 *eighthNoteTime);}
        if(joo[75+i] == true){jooVoice[i].play(time + 16 *eighthNoteTime);}

        if(joo[80+i] == true){jooVoice[5+i].play(time + 1 *eighthNoteTime);}
        if(joo[85+i] == true){jooVoice[5+i].play(time + 2 *eighthNoteTime);}
        if(joo[90+i] == true){jooVoice[5+i].play(time + 3 *eighthNoteTime);}
        if(joo[95+i] == true){jooVoice[5+i].play(time + 4 *eighthNoteTime);}
        if(joo[100+i] == true){jooVoice[5+i].play(time + 5 *eighthNoteTime);}
        if(joo[105+i] == true){jooVoice[5+i].play(time + 6 *eighthNoteTime);}
        if(joo[110+i] == true){jooVoice[5+i].play(time + 7 *eighthNoteTime);}
        if(joo[115+i] == true){jooVoice[5+i].play(time + 8 *eighthNoteTime);}
        if(joo[120+i] == true){jooVoice[5+i].play(time + 9 *eighthNoteTime);}
        if(joo[125+i] == true){jooVoice[5+i].play(time + 10 *eighthNoteTime);}
        if(joo[130+i] == true){jooVoice[5+i].play(time + 11 *eighthNoteTime);}
        if(joo[135+i] == true){jooVoice[5+i].play(time + 12 *eighthNoteTime);}
        if(joo[140+i] == true){jooVoice[5+i].play(time + 13 *eighthNoteTime);}
        if(joo[145+i] == true){jooVoice[5+i].play(time + 14 *eighthNoteTime);}
        if(joo[150+i] == true){jooVoice[5+i].play(time + 15 *eighthNoteTime);}
        if(joo[155+i] == true){jooVoice[5+i].play(time + 16 *eighthNoteTime);}

        if(joo[160+i] == true){jooVoice[10+i].play(time + 1 *eighthNoteTime);}
        if(joo[165+i] == true){jooVoice[10+i].play(time + 2 *eighthNoteTime);}
        if(joo[170+i] == true){jooVoice[10+i].play(time + 3 *eighthNoteTime);}
        if(joo[175+i] == true){jooVoice[10+i].play(time + 4 *eighthNoteTime);}
        if(joo[180+i] == true){jooVoice[10+i].play(time + 5 *eighthNoteTime);}
        if(joo[185+i] == true){jooVoice[10+i].play(time + 6 *eighthNoteTime);}
        if(joo[190+i] == true){jooVoice[10+i].play(time + 7 *eighthNoteTime);}
        if(joo[195+i] == true){jooVoice[10+i].play(time + 8 *eighthNoteTime);}
        if(joo[200+i] == true){jooVoice[10+i].play(time + 9 *eighthNoteTime);}
        if(joo[205+i] == true){jooVoice[10+i].play(time + 10 *eighthNoteTime);}
        if(joo[210+i] == true){jooVoice[10+i].play(time + 11 *eighthNoteTime);}
        if(joo[215+i] == true){jooVoice[10+i].play(time + 12 *eighthNoteTime);}
        if(joo[220+i] == true){jooVoice[10+i].play(time + 13 *eighthNoteTime);}
        if(joo[225+i] == true){jooVoice[10+i].play(time + 14 *eighthNoteTime);}
        if(joo[230+i] == true){jooVoice[10+i].play(time + 15 *eighthNoteTime);}
        if(joo[235+i] == true){jooVoice[10+i].play(time + 16 *eighthNoteTime);}

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

        if(max[80+i] == true){maxVoice[5+i].play(time + 1 *eighthNoteTime);}
        if(max[85+i] == true){maxVoice[5+i].play(time + 2 *eighthNoteTime);}
        if(max[90+i] == true){maxVoice[5+i].play(time + 3 *eighthNoteTime);}
        if(max[95+i] == true){maxVoice[5+i].play(time + 4 *eighthNoteTime);}
        if(max[100+i] == true){maxVoice[5+i].play(time + 5 *eighthNoteTime);}
        if(max[105+i] == true){maxVoice[5+i].play(time + 6 *eighthNoteTime);}
        if(max[110+i] == true){maxVoice[5+i].play(time + 7 *eighthNoteTime);}
        if(max[115+i] == true){maxVoice[5+i].play(time + 8 *eighthNoteTime);}
        if(max[120+i] == true){maxVoice[5+i].play(time + 9 *eighthNoteTime);}
        if(max[125+i] == true){maxVoice[5+i].play(time + 10 *eighthNoteTime);}
        if(max[130+i] == true){maxVoice[5+i].play(time + 11 *eighthNoteTime);}
        if(max[135+i] == true){maxVoice[5+i].play(time + 12 *eighthNoteTime);}
        if(max[140+i] == true){maxVoice[5+i].play(time + 13 *eighthNoteTime);}
        if(max[145+i] == true){maxVoice[5+i].play(time + 14 *eighthNoteTime);}
        if(max[150+i] == true){maxVoice[5+i].play(time + 15 *eighthNoteTime);}
        if(max[155+i] == true){maxVoice[5+i].play(time + 16 *eighthNoteTime);}

        if(max[160+i] == true){maxVoice[10+i].play(time + 1 *eighthNoteTime);}
        if(max[165+i] == true){maxVoice[10+i].play(time + 2 *eighthNoteTime);}
        if(max[170+i] == true){maxVoice[10+i].play(time + 3 *eighthNoteTime);}
        if(max[175+i] == true){maxVoice[10+i].play(time + 4 *eighthNoteTime);}
        if(max[180+i] == true){maxVoice[10+i].play(time + 5 *eighthNoteTime);}
        if(max[185+i] == true){maxVoice[10+i].play(time + 6 *eighthNoteTime);}
        if(max[190+i] == true){maxVoice[10+i].play(time + 7 *eighthNoteTime);}
        if(max[195+i] == true){maxVoice[10+i].play(time + 8 *eighthNoteTime);}
        if(max[200+i] == true){maxVoice[10+i].play(time + 9 *eighthNoteTime);}
        if(max[205+i] == true){maxVoice[10+i].play(time + 10 *eighthNoteTime);}
        if(max[210+i] == true){maxVoice[10+i].play(time + 11 *eighthNoteTime);}
        if(max[215+i] == true){maxVoice[10+i].play(time + 12 *eighthNoteTime);}
        if(max[220+i] == true){maxVoice[10+i].play(time + 13 *eighthNoteTime);}
        if(max[225+i] == true){maxVoice[10+i].play(time + 14 *eighthNoteTime);}
        if(max[230+i] == true){maxVoice[10+i].play(time + 15 *eighthNoteTime);}
        if(max[235+i] == true){maxVoice[10+i].play(time + 16 *eighthNoteTime);}
        
        if(yi[i] == true){yiVoice[i].play(time + 1 *eighthNoteTime);}
        if(yi[5+i] == true){yiVoice[i].play(time + 2 *eighthNoteTime);}
        if(yi[10+i] == true){yiVoice[i].play(time + 3 *eighthNoteTime);}
        if(yi[15+i] == true){yiVoice[i].play(time + 4 *eighthNoteTime);}
        if(yi[10+i] == true){yiVoice[i].play(time + 5 *eighthNoteTime);}
        if(yi[25+i] == true){yiVoice[i].play(time + 6 *eighthNoteTime);}
        if(yi[30+i] == true){yiVoice[i].play(time + 7 *eighthNoteTime);}
        if(yi[35+i] == true){yiVoice[i].play(time + 8 *eighthNoteTime);}
        if(yi[40+i] == true){yiVoice[i].play(time + 9 *eighthNoteTime);}
        if(yi[45+i] == true){yiVoice[i].play(time + 10 *eighthNoteTime);}
        if(yi[50+i] == true){yiVoice[i].play(time + 11 *eighthNoteTime);}
        if(yi[55+i] == true){yiVoice[i].play(time + 12 *eighthNoteTime);}
        if(yi[60+i] == true){yiVoice[i].play(time + 13 *eighthNoteTime);}
        if(yi[65+i] == true){yiVoice[i].play(time + 14 *eighthNoteTime);}
        if(yi[70+i] == true){yiVoice[i].play(time + 15 *eighthNoteTime);}
        if(yi[75+i] == true){yiVoice[i].play(time + 16 *eighthNoteTime);}

        if(yi[80+i] == true){yiVoice[5+i].play(time + 1 *eighthNoteTime);}
        if(yi[85+i] == true){yiVoice[5+i].play(time + 2 *eighthNoteTime);}
        if(yi[90+i] == true){yiVoice[5+i].play(time + 3 *eighthNoteTime);}
        if(yi[95+i] == true){yiVoice[5+i].play(time + 4 *eighthNoteTime);}
        if(yi[100+i] == true){yiVoice[5+i].play(time + 5 *eighthNoteTime);}
        if(yi[105+i] == true){yiVoice[5+i].play(time + 6 *eighthNoteTime);}
        if(yi[110+i] == true){yiVoice[5+i].play(time + 7 *eighthNoteTime);}
        if(yi[115+i] == true){yiVoice[5+i].play(time + 8 *eighthNoteTime);}
        if(yi[120+i] == true){yiVoice[5+i].play(time + 9 *eighthNoteTime);}
        if(yi[125+i] == true){yiVoice[5+i].play(time + 10 *eighthNoteTime);}
        if(yi[130+i] == true){yiVoice[5+i].play(time + 11 *eighthNoteTime);}
        if(yi[135+i] == true){yiVoice[5+i].play(time + 12 *eighthNoteTime);}
        if(yi[140+i] == true){yiVoice[5+i].play(time + 13 *eighthNoteTime);}
        if(yi[145+i] == true){yiVoice[5+i].play(time + 14 *eighthNoteTime);}
        if(yi[150+i] == true){yiVoice[5+i].play(time + 15 *eighthNoteTime);}
        if(yi[155+i] == true){yiVoice[5+i].play(time + 16 *eighthNoteTime);}

        if(yi[160+i] == true){yiVoice[10+i].play(time + 1 *eighthNoteTime);}
        if(yi[165+i] == true){yiVoice[10+i].play(time + 2 *eighthNoteTime);}
        if(yi[170+i] == true){yiVoice[10+i].play(time + 3 *eighthNoteTime);}
        if(yi[175+i] == true){yiVoice[10+i].play(time + 4 *eighthNoteTime);}
        if(yi[180+i] == true){yiVoice[10+i].play(time + 5 *eighthNoteTime);}
        if(yi[185+i] == true){yiVoice[10+i].play(time + 6 *eighthNoteTime);}
        if(yi[190+i] == true){yiVoice[10+i].play(time + 7 *eighthNoteTime);}
        if(yi[195+i] == true){yiVoice[10+i].play(time + 8 *eighthNoteTime);}
        if(yi[200+i] == true){yiVoice[10+i].play(time + 9 *eighthNoteTime);}
        if(yi[205+i] == true){yiVoice[10+i].play(time + 10 *eighthNoteTime);}
        if(yi[210+i] == true){yiVoice[10+i].play(time + 11 *eighthNoteTime);}
        if(yi[215+i] == true){yiVoice[10+i].play(time + 12 *eighthNoteTime);}
        if(yi[220+i] == true){yiVoice[10+i].play(time + 13 *eighthNoteTime);}
        if(yi[225+i] == true){yiVoice[10+i].play(time + 14 *eighthNoteTime);}
        if(yi[230+i] == true){yiVoice[10+i].play(time + 15 *eighthNoteTime);}
        if(yi[235+i] == true){yiVoice[10+i].play(time + 16 *eighthNoteTime);}
        
    }
}
function someoneLeft(){
    var data = {};
    data.username = username;
    socket.emit('someone left', data);
    stopBeat();
    $('.join-wrapper ul a').removeClass('highlighted');
    for(var i = 0; i <240; i++){
        pitches[i] = false;
    }
    if(username == 'joojoo'){
        for(var i = 0; i < 240; i++){
            joo[i] = false;
        }
        $('#joojoo').removeClass('in-use');
    }
    if(username == 'maxie'){
        for(var i = 0; i < 240; i++){
            max[i] = false;
        }
        $('#maxie').removeClass('in-use');
    }
    if(username == 'yiyi'){
        for(var i = 0; i < 240; i++){
            yi[i] = false;
        }
        $('#yiyi').removeClass('in-use');
    }
    socket.emit('someone is about to join');
    $('#beat-wrapper ul li').removeClass('clicked');
    username = '';
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
});
