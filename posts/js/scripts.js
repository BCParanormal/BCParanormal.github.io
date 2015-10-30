hs.graphicsDir = '../highslide/graphics/';   //Highslide options
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.outlineType = 'glossy-dark';
	hs.wrapperClassName = 'dark';
	hs.fadeInOut = true;
	hs.dimmingOpacity = 0.6;


	// Add the controlbar
	  hs.addSlideshow({
	  //slideshowGroup: 'group1',
	  interval: 1000,
	  repeat: false,
	  useControls: true,
	  fixedControls: 'fit',
	  overlayOptions: {
	  opacity: 1,
	  position: 'bottom center',
	  hideOnMouseOut: true
	  }
	});
