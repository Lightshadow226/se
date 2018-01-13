/*

Create the Meet the Characters div for the home page

*/

var chara_1 = document.getElementById("chara_1");

    chara_1.innerHTML="";
    //chara_1.style.height="200px";
    chara_1.style.display="flex";

var chara_2 = document.getElementById("chara_2");

    chara_2.innerHTML="";
    chara_2.style.paddingTop = "0px";//pour ne pas avoir le double de padding
    //chara_2.style.height="200px";
    chara_2.style.display="flex";
    

/**********Variables**********/
/*Index Value
0:Alistair
1:Axel
2:Claire
3:Ellie
4:Karolina
5:Neha
6:Raquel
7:Tadashi
8:Tegan
9:Tyler
*/

var characters = 
[
    "alistair",
    "axel",
    "tadashi",
    "tegan",
    "tyler",
    "claire",
    "ellie",
    "karolina",
    "neha",
    "raquel",    
];

var description = 
[
    "Future Olympian",
    "The Academy's Rockstar",
    "Student Council President",
    "The Geeky Mastermind",
    "The Artistic Genius",
    "The Heart of the Academy",
    "Inventor Extraordinaire",
    "The Top Model",
    "The Fashion Designer",
    "Soccer Team Captain"
];

appendImage(chara_1, 0, false, false);
appendImage(chara_1, 1, false, false);
appendImage(chara_1, 2, false, false);
appendImage(chara_1, 3, false, false);
appendImage(chara_1, 4, false, false);

appendImage(chara_2, 5, true, false);
appendImage(chara_2, 6, false, false);
appendImage(chara_2, 7, false, false);
appendImage(chara_2, 8, false, false);
appendImage(chara_2, 9, false, true);

function appendImage(parent, c_index, borderRadiusBottomLeft, borderRadiusBottomRight)
{
    var container = document.createElement('div');//This container contains the image

        container.className = "MTC_container";//MTC for "Meet The Characters"
        container.style.height="100%";
        container.style.width="auto";
        container.style.flex= "1";
        //container.style.overflow = "auto";

    var image = document.createElement('img');

        image.className = "MTC_image";
        image.src = "images/general/characters/chara_icons/"+ characters[c_index] + ".png";
        image.style.flex = "1";
        image.style.display = "block";
        image.style.width="100%";

        if(borderRadiusBottomLeft)//TODO: il faut que les overlays soient également ronds dans les coins
        {
            image.style.borderRadiusBottomLeft = "10px";
            image.style.webkitBorderBottomLeftRadius = "10px";
        }
        
        if (borderRadiusBottomRight)//TODO: il faut que les overlays soient également ronds dans les coins
        {
            image.style.webkitBorderBottomRightRadius = "10px";
        }
        
    var overlay = document.createElement('div');

        overlay.className = "MTC_overlay";
        overlay.width = "auto";
        overlay.height = "auto";
        //overlay.style.margin = "10px";
                
    var text = document.createElement('div');

        text.innerHTML = characters[c_index];
        text.className = "MTC_text";

    var text_description = document.createElement('div');

        text_description .innerHTML = description[c_index];
        text_description .className = "MTC_text_description";

    container.appendChild(image);

    container.appendChild(overlay);
        overlay.appendChild(text);
        overlay.appendChild(text_description);

    parent.appendChild(container);
}