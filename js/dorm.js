/*

Create the Dorm Change appearance on Dorm.php

Created on December 29, 2017

*/

var container = document.getElementById('dorm');

function raz()//remise à zéro
{
    container.innerHTML = "";

    var base = document.createElement('div');
    
        base.className = "dorm_base_img_container";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/dorm.jpg";
        
    container.appendChild(base);
        base.appendChild(img);

    /*
    mettre des higlights sur le wardrobe, le laptop, le sac, et les livres

    idées:
    http://www.netzgesta.de/mapper/#
    http://www.netzgesta.de/mapper/world_map.svg#
    https://en.wikipedia.org/wiki/Scalable_Vector_Graphics    
    https://www.sitepoint.com/highlight-image-map-area-hotspots-jquery/

    */

}

function wardrobe()
{
    raz();

    //BASIC OVERLAY

    var overlay = document.createElement('div');
    
        overlay.id = "dorm_overlay";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/dorm_ward.png";
        
    var overlay_form = document.createElement('div');

        overlay_form.id = "overlay_form";

    container.appendChild(overlay);
        overlay.appendChild(img);
        overlay.appendChild(overlay_form);

    //DETAILS

    //1. title

    //2. thumbnails (t-shirt, pants, shoes, etc.)

    //3. once we click on the thumbnail, we see all shirts, all pants, etc.

    //4. clicking on one of the shirt should automatically update the image on the right/left of the field

    //5. we need to be able to save the presets

}