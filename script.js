$("#play").click(function(){
	chrome.tts.speak($("#input").val(),{'rate': parseInt($("#rate").val() ), 'enqueue': true });
});
$("#stop").click(function(){
	chrome.tts.stop();
});
//$("#isSpeaking").hide();
chrome.tts.isSpeaking(function(speaking){ 
	$("#isSpeaking").html(speaking);
});
