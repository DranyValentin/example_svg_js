(() =>
{
	"use strict"

	console.log("It's ok")

 	var $text = document.body.querySelector("#smart").querySelectorAll("tspan")
 	var index = 0
 	var	dxFactor = -6;
	var opacityFactor = 1

 //Function 'letter' print letter
    function letter(node)
    {
    	if ( index == 23 ) return

    	node.setAttribute("visibility", "visible")
       	setTimeout(function() {letter($text[index++])}, 250 )
    }

//Fuction 'dx' move and opacity letter
	function dx()
	{
		if ( dxFactor == 50 ) return
		
		$text[21].setAttribute("dx", dxFactor++)
		$text[21].setAttribute("opacity", opacityFactor -= 0.02)

		setTimeout(dx, 15)
	}

	letter($text[0])
	setTimeout(dx, 5300)
})()