
var beat;
var startTime;
var tempo = 80;
var eighthNoteTime = (60/tempo)/2;

var username;
var joojoo, maxie, yiyi;
var beat1, beat2, beat3, beat4, beat5, beat6, beat7, beat8, beat9, beat10, beat11, beat12, beat13, beat14, beat15, beat16;
var pitches = [];
var joo = [];
var max = [];
var yi = [];

var ah01 = new sound('audio/max/dingdong01.wav');
var ah02 = new sound('audio/max/dingdong02.wav');
var ah03 = new sound('audio/max/dingdong03.wav');
var ah04 = new sound('audio/max/dingdong04.wav');
var ah05 = new sound('audio/max/dingdong05.wav');
var ah06 = new sound('audio/max/ah01.wav');
var ah07 = new sound('audio/max/ah02.wav');
var ah08 = new sound('audio/max/ah03.wav');
var ah09 = new sound('audio/max/ah04.wav');
var ah10 = new sound('audio/max/ah05.wav');
var ah11 = new sound('audio/max/ohno01.wav');
var ah12 = new sound('audio/max/ohno02.wav');
var ah13 = new sound('audio/max/ohno03.wav');
var ah14 = new sound('audio/max/ohno04.wav');
var ah15 = new sound('audio/max/ohno05.wav');

var aya01 = new sound('audio/joo/mi01.wav');
var aya02 = new sound('audio/joo/mi02.wav');
var aya03 = new sound('audio/joo/mi03.wav');
var aya04 = new sound('audio/joo/mi04.wav');
var aya05 = new sound('audio/joo/mi05.wav');
var aya06 = new sound('audio/joo/la01.wav');
var aya07 = new sound('audio/joo/la02.wav');
var aya08 = new sound('audio/joo/la03.wav');
var aya09 = new sound('audio/joo/la04.wav');
var aya10 = new sound('audio/joo/la05.wav');
var aya11 = new sound('audio/joo/mama01.wav');
var aya12 = new sound('audio/joo/mama02.wav');
var aya13 = new sound('audio/joo/mama03.wav');
var aya14 = new sound('audio/joo/mama04.wav');
var aya15 = new sound('audio/joo/mama05.wav');

var dd01 = new sound('audio/yiyi/ew01.wav');
var dd02 = new sound('audio/yiyi/ew02.wav');
var dd03 = new sound('audio/yiyi/ew03.wav');
var dd04 = new sound('audio/yiyi/ew04.wav');
var dd05 = new sound('audio/yiyi/ew05.wav');
var dd06 = new sound('audio/yiyi/oh01.wav');
var dd07 = new sound('audio/yiyi/oh02.wav');
var dd08 = new sound('audio/yiyi/oh03.wav');
var dd09 = new sound('audio/yiyi/oh04.wav');
var dd10 = new sound('audio/yiyi/oh05.wav');
var dd11 = new sound('audio/yiyi/papa01.wav');
var dd12 = new sound('audio/yiyi/papa02.wav');
var dd13 = new sound('audio/yiyi/papa03.wav');
var dd14 = new sound('audio/yiyi/papa04.wav');
var dd15 = new sound('audio/yiyi/papa05.wav');
vol = 1;
//var drum = new sound('audio/drum01.wav');

var maxVoice = [ah05, ah04, ah03, ah02, ah01, ah10, ah09, ah08, ah07, ah06, ah15, ah14, ah13, ah12, ah11];
var jooVoice = [aya05, aya04, aya03, aya02, aya01, aya10, aya09, aya08, aya07, aya06, aya15, aya14, aya13, aya12, aya11];
var yiVoice = [dd05, dd04, dd03, dd02, dd01, dd10, dd09, dd08, dd07, dd06, dd15, dd14, dd13, dd12, dd11];

var socket = io.connect('http://localhost');

window.onload = function() {
    document.location.hash = "";
    someoneLeft();
} 

$(document).ready(function(){
	socket.on('joojoo joined', function(data){
		$('#joojoo').addClass('in-use');
		$('#joojoo h2').text('SOLD OUT');
        $('#jooHead').show();
		//$('#joojoo p').text('Joojoo will be in stock soon.');
	});
	socket.on('maxie joined', function(data){
		$('#maxie').addClass('in-use');
		$('#maxie h2').text('SOLD OUT');
        $('#maxHead').show();
		//$('#maxie p').text('Maxie is too popular. 0 left.');
	});
	socket.on('yiyi joined', function(data){
		$('#yiyi').addClass('in-use');
		$('#yiyi h2').text('SOLD OUT');
        $('#yiHead').show();
		//$('#yiyi p').text('Yiyi is out of print. Go check on eBay.' );
	});
	socket.on('joo voice', function(data){
		joo = data.sounds;
        for (var i = 0; i < 80; i ++){
            if (joo[i] == true || joo[i+80] == true || joo[i+160] == true){
                $('#pitch-'+[i+1]).addClass('jooClicked');
            }
            if (joo[i] == false && joo[i+80] == false && joo[i+160] == false){
                $('#pitch-'+[i+1]).removeClass('jooClicked');
            }
        }
	});
	socket.on('maxie voice', function(data){
        //console.log('recieved: =====|||||' + data.sounds);
		max = data.sounds;
        for (var i = 0; i < 80; i ++){
            if (max[i] == true || max[80+i] == true || max[160+ i] == true){
                $('#pitch-'+[i+1]).addClass('maxClicked');
            }else
            if (max[i] == false && max[80+i] == false && max[160+i] == false){
                $('#pitch-'+[i+1]).removeClass('maxClicked');
            }
        }
	});
	socket.on('yiyi voice', function(data){
		yi = data.sounds;
        for (var i = 0; i < 80; i ++){
            if (yi[i] == true || yi[80+i] == true || yi[160+i] == true){
                $('#pitch-'+[i+1]).addClass('yiClicked');
            }
            if (yi[i] == false && yi[80+i] == false && yi[160+i] == false){
                $('#pitch-'+[i+1]).removeClass('yiClicked');
            }
        }
	});
    socket.on('new member joined', function(data){
        var data = {};
        if(username == 'joojoo'){
            data.jooHasSong = joo;
            socket.emit('joo current state', data);
        }
        if(username =='maxie'){
            data.maxHasSong = max;
            socket.emit('max current state', data);
        }
        if(username =='yiyi'){
            data.yiHasSong = yi;
            socket.emit('yi current state', data);
        }
    });
    socket.on('tell whos in here', function(){
        var data = {};
        data.username = username;
        socket.emit('I am already in use', data);
    });
    socket.on('joo current state', function(data){
        joo = data.jooHasSong;
    });
    socket.on('max current state', function(data){
        max = data.maxHasSong;
    });
    socket.on('yi current state', function(data){
        yi = data.yiHasSong;
    });
    socket.on('someone left', function(data){
        console.log(data.username + ' left');
        if(data.username == 'joojoo'){
            $('#joojoo').removeClass('in-use');
            for (var i = 0; i < 240; i++) {
                joo[i] = false;
            };
            $('#beat-wrapper ul li').removeClass('jooClicked');
            $('#joojoo h2').text('');
            $('#joojoo p').text('');
            $('#jooHead').hide();
        }
        if(data.username == 'maxie'){
            $('#maxie').removeClass('in-use');
            for (var i = 0; i < 240; i++) {
                max[i] = false;
            };
            $('#beat-wrapper ul li').removeClass('maxClicked');
            $('#maxie h2').text('');
            $('#maxie p').text('');   
            $('#maxHead').hide();         
        }
        if(data.username == 'yiyi'){
            $('#yiyi').removeClass('in-use');
            for (var i = 0; i < 240; i++) {
                yi[i] = false;
            };
            $('#beat-wrapper ul li').removeClass('yiClicked');
            $('#yiyi h2').text('');
            $('#yiyi p').text(''); 
            $('#yiHead').hide();
        }
    });

	init();

    $('.join-wrapper ul a').click(function(){
    	$('.join-wrapper ul a').removeClass('highlighted');
        $(this).addClass('highlighted');
        if( (this.id) == 'joojoo'){
            username = 'joojoo';
            // $('#dragbutton01').append('MA');
            $('#me').addClass('meIsJoo');
        }
        if( (this.id) == 'maxie'){
            username = 'maxie';
            $('#me').addClass('meIsMax');
        }
        if( (this.id) == 'yiyi'){
            username = 'yiyi';
            $('#me').addClass('meIsYi');
        }
    });

	$('#start').click(function(){
	    if(username != ''){
	    	var data = {};
	    	data.username = username;
	    	socket.emit('someone joined', data);
		}
        beat = 1;
        vol = 1;
		//drum.start();
	});
	$('#quit').click(function(){
        someoneLeft();
        cancelScheduled();
	});

    $('#dragging-area article').draggable({
        cursor:'move',
        helper:'clone',
    });

    $('#beat-wrapper ul li').droppable({
        accept:'#dragging-area article',
        hoverClass: 'hovered',
        drop: function(event, ui){
            if ($(this).hasClass('clicked')||$(this).hasClass('clicked-two')||$(this).hasClass('clicked-three')){
                $(this).removeClass('clicked');
                $(this).removeClass('clicked-two');
                $(this).removeClass('clicked-three');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){
                        pitches[i] = false;
                        pitches[80+i] = false;
                        pitches[160+i] = false;
                    }
                }
            }

            if (ui.draggable.is('#dragbutton01')){
                $(this).addClass('clicked');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[i] = true;}
                }
            }
            if (ui.draggable.is('#dragbutton02')){
                $(this).addClass('clicked-two');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[80+i] = true;}
                }
            }
            if (ui.draggable.is('#dragbutton03')){
                $(this).addClass('clicked-three');
                for(var i = 0; i < 80; i++){
                    if( this.id == ('pitch-'+ [i+1])){pitches[160+i] = true;}
                }
            }

            if(username == 'joojoo'){
                for(var i = 0; i < 240; i++){
                    if(pitches[i] == false){joo[i] = false;}
                    else if(pitches[i] == true){joo[i] = true;}
                }
                var data = {};
                data.username = 'joojoo';
                data.sounds = joo;
                socket.emit('joo voice', data);
            }
            if(username == 'maxie'){
                for(var i = 0; i < 240; i++){
                    if(pitches[i] == false){max[i] = false;}
                    else if(pitches[i] == true){max[i] = true;}
                }
                var data = {};
                data.username = 'maxie';
                data.sounds = max;
                socket.emit('maxie voice', data);
            }
            if(username == 'yiyi'){
                for(var i = 0; i < 240; i++){
                    if(pitches[i] == false){yi[i] = false;}
                    else if(pitches[i] == true){yi[i] = true;}
                }
                var data = {};
                data.username = 'yiyi';
                data.sounds = yi;
                socket.emit('yiyi voice', data);
            }
        }
    });
    $('#beat-wrapper ul li').click(function(){
        if ($(this).hasClass('clicked')||$(this).hasClass('clicked-two')||$(this).hasClass('clicked-three')){
            $(this).removeClass('clicked');
            $(this).removeClass('clicked-two');
            $(this).removeClass('clicked-three');
            $(this).removeClass('clicked-four');
            for (var i = 0; i <80; i ++){
                if( this.id == ('pitch-'+ [i+1])){
                    pitches[i] = false;
                    pitches[80+i] = false;
                    pitches[160+i] = false;
                }
            }
            if(username == 'joojoo'){
                for(var i = 0; i < 240; i++){
                    if(pitches[i] == false){joo[i] = false;}
                }
                var data = {};
                data.username = 'joojoo';
                data.sounds = joo;
                socket.emit('joo voice', data);
            }
            if(username == 'maxie'){
                for(var i = 0; i < 240; i++){
                    if(pitches[i] == false){max[i] = false;}
                }
                var data = {};
                data.username = 'maxie';
                data.sounds = max;
                socket.emit('maxie voice', data);
            }
            if(username == 'yiyi'){
                for(var i = 0; i < 240; i++){
                    if(pitches[i] == false){yi[i] = false;}
                }
                var data = {};
                data.username = 'yiyi';
                data.sounds = yi;
                socket.emit('yiyi voice', data);
            }
        }
    });
    $('#me').click(function(){
        if(vol == 0){
            vol = 1;
            $('#me').css('opacity', '1');
            $('.mute').hide();
        }else
        if(vol == 1){
            vol = 0;
            $('#me').css('opacity', '0.5');
            $('.mute').show();
        }
    });

});

function init() {
    if(!window.audioContext){
        audioContext = new webkitAudioContext;
    } else {
        throw new Error('AudioContext not supported. :(');
    }
    load();
    $('#jooHead').hide();
    $('#maxHead').hide();
    $('#yiHead').hide();
    $('.mute').hide();
}

function stopBeat(){
    beat = 100;
    vol = 0;
    //drum.stop();
}

function load(){
    vol = 1;
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

function cancelScheduled(){
    window.location.reload();
}

sound.prototype.play = function(time){
    if(!time){time = 0;}else{time = time;}
    if(this.isLoaded == true){
        var gainNode = audioContext.createGainNode();
        gainNode.gain.value = vol;
        var startSound = audioContext.createBufferSource();
        startSound.buffer = this.buffer;
        startSound.connect(gainNode);
        gainNode.connect(audioContext.destination);
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
        if(joo[20+i] == true){jooVoice[i].play(time + 5 *eighthNoteTime);}
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
        if(max[20+i] == true){maxVoice[i].play(time + 5 *eighthNoteTime);}
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
        if(yi[20+i] == true){yiVoice[i].play(time + 5 *eighthNoteTime);}
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
    $('#beat-wrapper ul li').removeClass('clicked-two');
    $('#beat-wrapper ul li').removeClass('clicked-three');
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
