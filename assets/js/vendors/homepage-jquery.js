$(document).ready(function(e) {
    
	$(".box").click(function(){
		var timer = setInterval(animate, 20);
	});
	
	var angles = [90, 45, 315, 270, 225, 135,0,180];
    var unit = 215;
    
    var animate = function(){
        
        $.each($('.box'), function(idx, val){
           
            var rad = angles[idx] * (Math.PI / 180);
			
			$(val).css({
				left: 550 + Math.cos(rad) * unit + 'px',
                top: unit * (1 - Math.sin(rad))  + 'px'
            });
			
            angles[idx]--;
        });
        
    }
    var timer = setInterval(animate, 20);
});