 /**
 * Appear: fade from top, 1st time
 * @desc Makes a layer (or multiple) appear from top, by tapping a tappable layer. It will only fade the first time. 
 * @author Jorge Martins
 * @version 1.0
 */
  
  
  //Gets the trigger layer
  var enter = getLayerByName('btn');

  //Sets the position and opacity for the initial state.
  var selectedLayers = getSelectedLayers();
  
  selectedLayers.forEach(function(layer) {
    layer.y = layer.y - 10;
    layer.opacity = 0;
  });
  //Delay
  var delayAmount = 0;
  
  //Condition makes it happen only when it has the initial state
  
  selectedLayers.forEach(function(layer) {
      //add a delay incremet for each layer
      delayAmount = delayAmount + 0.1;
      //move down animation 
      var move = createMoveAnimation(layer);
      move.basedOn = enter.tap;
      move.animates = AnimationMode.withDuration;
      move.easing = EasingCurve.easeInOutQuadratic;
      move.condition = layer.id + '.opacity == ' + 0;
      move.toY = layer.y + 10;
      move.duration = 0.2;
      move.delay = delayAmount;
      //fade in animation 
      var fade = createFadeAnimation(layer);
      fade.basedOn = enter.tap;
      fade.animates = AnimationMode.withDuration;
      fade.condition = layer.id + '.opacity == ' + 0;
      fade.to = 100;
      fade.duration = 0.2;
      fade.easing = EasingCurve.easeInOutQuadratic;
      fade.delay = delayAmount;
  });
