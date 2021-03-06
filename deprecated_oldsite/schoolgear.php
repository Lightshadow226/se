<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">
	<meta name="description" content="Sweet Elite is a dating sims inspired by the popular Japanese Otome.Flirt with students and uncover Arlington Academy's dark secrets.Choose your own story!">
	<meta name="keywords" content="HTML,CSS,XML,JavaScript">

	<title>Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!<</title>

	<link href="css/se-stylesheet.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>

	<link rel="icon" type="image/ico" href="images/favicon.png"/>

</head>

<body>

	<?php include_once 'partials/headers.php'?>

    <div class="main_content">
		<div class="card-nomargin add_padding">
			<h1>School Gear</h1>

			<p>These are department badges that you can insert on your Tumblr blog. Pick your department and show your school pride!</p><br>

			<p>If you need any help installing the badges, don't hesitate to contact us! All tags can be found through the find function on your browser.</p><br>

			<h2>ALL badges plus Arlington Academy logo rotation on page refresh</h2><br>

			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code right AFTER the &lt;body&gt; tag.</p><br>

			<textarea class="center_div" cols="50" rows="3">
&lt;script&gt; 
	var Acuity = window.Acuity || {};

	Acuity.showFlickrPhotos = {block:IfShowFlickrPhotos}true{/block:IfShowFlickrPhotos}{block:IfNotShowFlickrPhotos}false{/block:IfNotShowFlickrPhotos};

	Acuity.showDribbbleShots = {block:IfShowDribbbleShots}true{/block:IfShowDribbbleShots}{block:IfNotShowDribbbleShots}false{/block:IfNotShowDribbbleShots};

	{block:IfFlickrID}Acuity.flickrID = '{text:Flickr ID}';{/block:IfFlickrID}

	{block:IfDribbbleUsername}Acuity.dribbbleUsername = '{text:Dribbble Username}';{/block:IfDribbbleUsername}
&lt;/script&gt;
			</textarea>
			
			<br><br><p>THEN copy and paste the code below at the bottom of your blog code right BEFORE the &lt;/body&gt; tag, also called the closing body tag.</p><br>
			
			<textarea class="center_div" cols="50" rows="3">
				<script language="JavaScript">

				function random_imglink()
				{
					var myimages = new Array()

					//specify random images below. You can have as many as you wish

					myimages[1]="http://www.sweetelitegame.com/pubdomain/blog-badge-AA.png",

					myimages[2]="http://www.sweetelitegame.com/pubdomain/blog-badge-athletic.png",

					myimages[3]="http://www.sweetelitegame.com/pubdomain/blog-badge-business.png",

					myimages[4]="http://www.sweetelitegame.com/pubdomain/blog-badge-fashion.png",

					myimages[5]="http://www.sweetelitegame.com/pubdomain/blog-badge-finearts.png",

					myimages[6]="http://www.sweetelitegame.com/pubdomain/blog-badge-biology.png",

					myimages[7]="http://www.sweetelitegame.com/pubdomain/blog-badge-performingarts.png",

					myimages[8]="http://www.sweetelitegame.com/pubdomain/blog-badge-sciences.png"

					var ry = Math.floor(Math.random()*myimages.length)

					if (ry==0)
					{
						ry=1
					}
					
					document.write('<img src="'+myimages[ry]+'" border=0 id="randomImage">')

				}

				random_imglink()

				//-->

				<!--
				</script>
			</textarea>
			
			<br><br><h2>Department of ATHLETICS</h2>
			
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p>
			
				<p>
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-athletic.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-athletic.png"></a></div></textarea>
				</p><br>
			
			<h2>Department of BUSINESS, COMMERCE & POLITICS</h2>
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p
			
				<p class="center">
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-business.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-business.png"></a></div></textarea>
				</p><br>

				
			<h2>Department of FASHION</h2>
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p
			
				<p>
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-fashion-r1.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-fashion-r1.png"></a></div></textarea>
				</p><br>


			<h2>Department of FINE ARTS</h2>
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p
			
				<p>
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-finearts.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-finearts.png"></a></div></textarea>
				</p><br>

				
			<h2>Department of HEALTH SCIENCES & BIOLOGY</h2>
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p
			
				<p>
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-biology.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-biology.png"></a></div></textarea>
				</p><br>


			<h2>Department of PERFORMING ARTS</h2>
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p
			
				<p>
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-performingarts.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-performingarts.png"></a></div></textarea>
				</p><br>

			<h2>Department of PURE AND APPLIED SCIENCES</h2>
			<p>Go to: Blog > Edit theme > Edit html > Copy and paste this code BEFORE the &lt;/body&gt; tag.</p
			
				<p>
				<img src="http://www.sweetelitegame.com/pubdomain/blog-badge-sciences.png" height="150px"><br>
				<textarea cols="50" rows="3"><div style="float:left; position:fixed; left:0; bottom:0;"><a href="http://sweetelite-staff.tumblr.com" target="_blank"><img src="http://www.sweetelitegame.com/pubdomain/blog-badge-sciences.png"></a></div></textarea>
				</p><br>				
		</div>	
	</div>


	<?php include_once 'partials/footers.php' ?>

</body>
</html>