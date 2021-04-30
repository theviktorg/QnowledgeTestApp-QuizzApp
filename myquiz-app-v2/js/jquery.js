jQuery(function() { 
    $(".cards .image").dimmer({on: "hover"});
    $(".modal").modal('attach events', '.description', 'show');
});