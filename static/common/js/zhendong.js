let zhendong = {
	'vibrate':vibrate,
	'cancelVibrate':cancelVibrate
}
 
//震动
function vibrate(pattern,type) {
	try {
		console.log('震动频率',pattern)
		var Build = plus.android.importClass("android.os.Build");
		if (Build.VERSION.SDK_INT >= 26) {
			var Context = plus.android.importClass("android.content.Context");
			var main = plus.android.runtimeMainActivity();
			var vibrateService = main.getSystemService(Context.VIBRATOR_SERVICE);
			var AudioAttributes = plus.android.importClass("android.media.AudioAttributes");
			var audioAttributesBuilder = new AudioAttributes.Builder();
			plus.android.invoke(audioAttributesBuilder, 'setContentType', AudioAttributes.CONTENT_TYPE_SONIFICATION);
			plus.android.invoke(audioAttributesBuilder, 'setUsage', AudioAttributes.USAGE_ALARM);
			var audioAttributes = plus.android.invoke(audioAttributesBuilder, 'build');
			// plus.android.invoke(vibrateService, 'vibrate', [0,1000], 0, audioAttributes);
			// plus.android.invoke(vibrateService, 'vibrate', [0,1500,1000,1500], 0, audioAttributes);
			plus.android.invoke(vibrateService, 'vibrate', pattern, type, audioAttributes);
		} else {
			plus.device.vibrate();
		}
	} catch (e) {
		console.log(JSON.stringify(e));
	}
}
//取消震动
function cancelVibrate(){
		var Build = plus.android.importClass("android.os.Build");
		if (Build.VERSION.SDK_INT >= 26) {
			var vib = plus.android.runtimeMainActivity().getSystemService("vibrator");  
			plus.android.invoke( vib, "cancel"); 
		}
}
 
export default zhendong