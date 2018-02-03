var synth = new Tone.FMSynth().toMaster();
var userInput;
var pitchArg;
var rhythmArg;
var eventTime = 5;

var pitchRhythmData = {
	a: ['F3', '16n'],
	b: ['C3', '16n'],
	c: ['D3', '16n'],
};
$('#user-input').on("input", function (event){
	userInput = event.target.value;
})
$('#start').on('click', function() {
	for (var i = 0; i < userInput.length; i++) {
		pitchArg = pitchRhythmData[userInput[i]][0];
		rhythmArg = pitchRhythmData[userInput[i]][1];
		console.log(pitchArg);
		console.log(rhythmArg);
		synth.triggerAttackRelease(pitchArg, rhythmArg, eventTime);
		eventTime += 0.25;
	}
});