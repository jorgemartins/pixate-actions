/**
* Appear: fade from top, 1st time
* @desc Makes a layer appear from top, by tapping a tappable layer. It will only fade the first time. 
* @author Jorge Martins
* @version 1.0
*/
 
 
 //Gets the trigger layer
 var enter = getLayerByName('replace-me-with-your-trigger-layer-name');
 
 //Sets the position and opacity for the initial state.
 var selectedLayer = getSelectedLayer();
 selectedLayer.y = selectedLayer.y - 10;
 selectedLayer.opacity = 0;
 
 //Delay
 var delayAmount = 0.1;
 
 //Condition makes it happen only when it has the initial state
 
 //move down animation 
 var move = createMoveAnimation(selectedLayer);
 move.basedOn = enter.tap;
 move.animates = AnimationMode.withDuration;
 move.easing = EasingCurve.easeInOutQuadratic;
 move.condition = selectedLayer.id + '.opacity == ' + 0;
 move.toY = selectedLayer.y + 10;
 move.duration = 0.2;
 move.delay = delayAmount;
 
 //fade in animation 
 var fade = createFadeAnimation(selectedLayer);
 fade.basedOn = enter.tap;
 fade.animates = AnimationMode.withDuration;
 fade.condition = selectedLayer.id + '.opacity == ' + 0;
 fade.to = 100;
 fade.duration = 0.2;
 fade.easing = EasingCurve.easeInOutQuadratic;
 fade.delay = delayAmount;