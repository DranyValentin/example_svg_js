(() =>
{
	"use strict"

	console.log("It's ok")

	
	var timevalue = 0
	var timer_increment= 250
	var max_time = 5000
	var $text_element = document.body.querySelector("#TextElement")
	var scalefactor, opacityfactor, dxfactor
	var count = 0
	console.log($text_element)

	var $smart = document.body.querySelector("#smart")
	$smart.setAttribute("y", 100 )
	console.log($smart)

	var $svg = document.body.querySelector("#svg")
	var widthfactor = 0;
	$svg.setAttribute("width", widthfactor )




	function ShowAndGrowElement() 
    {
    	if ( $svg.getAttribute("width") < 300 ){
    		widthfactor += 17	
    		$svg.setAttribute("width", widthfactor )
		}

    	setTimeout("ShowAndGrowElement()", timer_increment)
    }


    window.ShowAndGrowElement = ShowAndGrowElement
    ShowAndGrowElement();






 //    var $t1 = document.body.querySelector(".t1")
	// $t1.setAttribute("visibility", "visible")
	// setTimeout(function()
	// {
	// 	var $t2 = document.body.querySelector(".t2")
	// 	$t2.setAttribute("visibility", "visible");
	// }, 250)
	// setTimeout(function()
	// {
	// 	var $t3 = document.body.querySelector(".t3")
	// 	$t3.setAttribute("visibility", "visible");
	// }, 500)
	// setTimeout(function()
	// {
	// 	var $t4 = document.body.querySelector(".t4")
	// 	$t4.setAttribute("visibility", "visible");
	// }, 750)
	// setTimeout(function()
	// {
	// 	var $t5 = document.body.querySelector(".t5")
	// 	$t5.setAttribute("visibility", "visible");
	// }, 1000)
	// setTimeout(function()
	// {
	// 	var $t6 = document.body.querySelector(".t6")
	// 	$t6.setAttribute("visibility", "visible");
	// }, 1250)
	// setTimeout(function()
	// {
	// 	var $t7 = document.body.querySelector(".t7")
	// 	$t7.setAttribute("visibility", "visible");
	// }, 1500)
	// setTimeout(function()
	// {
	// 	var $t8 = document.body.querySelector(".t8")
	// 	$t8.setAttribute("visibility", "visible");
	// }, 1750)
	// setTimeout(function()
	// {
	// 	var $t9 = document.body.querySelector(".t9")
	// 	$t9.setAttribute("visibility", "visible");
	// }, 2000)
	// setTimeout(function()
	// {
	// 	var $t10 = document.body.querySelector(".t10")
	// 	$t10.setAttribute("visibility", "visible");
	// }, 2250)
	// setTimeout(function()
	// {
	// 	var $t11 = document.body.querySelector(".t11")
	// 	$t11.setAttribute("visibility", "visible");
	// }, 2500)
	// setTimeout(function()
	// {
	// 	var $t12 = document.body.querySelector(".t12")
	// 	$t12.setAttribute("visibility", "visible");
	// }, 2750)
	// setTimeout(function()
	// {
	// 	var $t13 = document.body.querySelector(".t13")
	// 	$t13.setAttribute("visibility", "visible");
	// }, 3000)
	// setTimeout(function()
	// {
	// 	var $t14 = document.body.querySelector(".t14")
	// 	$t14.setAttribute("visibility", "visible");
	// }, 3250)
})()