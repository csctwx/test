<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>HTML5 Gallery Example</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- Reference to html5gallery.js -->
<script type="text/javascript" src="../html5gallery/html5gallery.js"></script>

</head>

<body>

<!-- A wrapper DIV to center the Gallery -->
<div style="text-align:center;">

    <!-- Define the Div for Gallery -->
    <!-- 1. Add class html5gallery to the Div -->
    <!-- 2. Define parameters with HTML5 data tags -->
	<div style="display:none;margin:0 auto;" class="html5gallery" data-skin="gallery" data-width="480" data-height="272" data-resizemode="fill" data-autoplayvideo="false"  data-playvideoonclick="false">
	
	    <!-- Add images to Gallery -->
		<!-- <a href="images/Tulip_large.jpg"><img src="images/Tulip_small.jpg" alt="Tulips"></a>
		<a href="images/Colourful_Tulip_large.jpg"><img src="images/Colourful_Tulip_small.jpg" alt="Colourful Tulips"></a>
		<a href="images/Swan_large.jpg"><img src="images/Swan_small.jpg" alt="Swan on Lake"></a>
		<a href="images/Red_Tulip_large.jpg"><img src="images/Red_Tulip_small.jpg" alt="Red Tulips"></a>
		<a href="images/Sakura_Tree_large.jpg"><img src="images/Sakura_Tree_small.jpg" alt="Sakura Trees"></a>
		 -->
		<!-- Add videos to Gallery -->
		<!-- Big Buck Bunny Copyright 2008, Blender Foundation http://www.bigbuckbunny.org -->
		<!-- <a href="images/Big_Buck_Bunny.mp4" data-webm="images/Big_Buck_Bunny.webm"><img src="images/Big_Buck_Bunny.jpg" alt="Big Buck Bunny, Copyright Blender Foundation"></a>

		<a href="images/og.mp4"><img src="images/og.jpg" alt="Big Buck Bunny, Copyright Blender Foundation"></a>
		 -->
		<!-- Add Youtube video to Gallery -->
		<a href="http://www.youtube.com/embed/YE7VzlLtp-4"><img src="http://img.youtube.com/vi/YE7VzlLtp-4/2.jpg" alt="Youtube Video"></a>

<!-- 		<a href="https://youtu.be/TBZLR0EEYzo"><img src="http://img.youtube.com/vi/TBZLR0EEYzo/mqdefault.jpg" alt="Youtube Video2"></a>
 -->		
		<!-- Add Vimeo video to Gallery -->
		<!-- <a href="http://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;portrait=0"><img src="images/Big_Buck_Bunny.jpg" alt="Vimeo Video"></a> -->
	
	</div>

</div>

<style type="text/css">
div.guide {margin:12px 24px;}
div.guide span {color:#ff0000; font:italic 14px Arial, Helvetica, sans-serif;}
div.guide p {color:#000000; font:14px Arial, Helvetica, sans-serif;}
div.guide pre {color:#990000;}
div.guide p.title {color:#df501f; font:18px Arial, Helvetica, sans-serif;}
</style>
</body>
</html>