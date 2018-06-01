/*

Create the Dorm Change appearance on Dorm.php

Created on December 29, 2017

TODO: remove all the pullVariablesFromDB();
The files are supposed to be optimized so that including the variables.js file automatically pulls from the database, and pushing should be done periodically
(no more pulling after the initial one)

*/

var container = document.getElementById('dorm');

//var sex = [0, 1];
//var sex_img = ["../profile/customization/female.png", "../profile/customization/male.png"];

const extension = ".png";

/**
 * 
 * 
 * 
 * if you want to add a new screen, search for all the "WITH SCREEN UPDATE" in this
 * 
 * 
 * 
 */

//*****Category ICONS*****
    const iconsPATH = "_new_images_folder/game/dorm/dollmaker/icons/";
    //LES CHOIX (eyes, hair, etc.)
    var screens =
    [
        iconsPATH + "sex" + extension,
        iconsPATH + "eyes" + extension,
        iconsPATH + "haircolor" + extension,
        iconsPATH + "hairstyle" + extension,
        iconsPATH + "shirt" + extension,
        iconsPATH + "pants" + extension,
        iconsPATH + "shoes" + extension,
        iconsPATH + "skin" + extension,//WITH SCREEN UPDATE
    ];

    const shirtScreen = 4;//points to screen[shirtScreen]
    const pantsScreen = 5;

    //LES CHOIX (HOVER)
    var screens_hover =
    [
        iconsPATH + "sex_hover" + extension,
        iconsPATH + "eyes_hover" + extension,
        iconsPATH + "haircolor_hover" + extension,
        iconsPATH + "hairstyle_hover" + extension,
        iconsPATH + "shirt_hover" + extension,
        iconsPATH + "pants_hover" + extension,
        iconsPATH + "shoes_hover" + extension,
        iconsPATH + "skin_hover" + extension,//WITH SCREEN UPDATE
    ];

    var currentScreen = screens[0];//est === à l'adresse (avec .png and shit)
    var currentItem = 0;

var temp_sex = ["f", "m"];
var categoriesQty = 0;
var choiceQty = 0;// TODO: make this better

//*****Choice ICONS***** (THE IMAGES THAT APPEAR FOR EVERY ITEM)
    const itemsPATH = "_new_images_folder/game/dorm/dollmaker/";

    var allQuantities;

const outfits = 
[
    2
    // itemsPATH + "shirts/" + temp_sex[user.sex] + "/shirt3" + extension,//OUTFIT 1 -> If equipped shirt == shirt 3, unequip pants
]

/*
const outfits = 
[
    //OUTFIT 1
    [
        temp_sex[user.sex], //sex
        user.eyecolor,//eyes
        user.haircolor,//hair color
        user.hairstyle,//hair style
        1, //shirt
        1, //pants
        1, //shoes
        user.skincolor, //skin
        0, //socks
        0, //accessory
    ]
]
*/

function raz()//remise à zéro
{
    // pullVariablesFromDB();

    var wardrobe = document.getElementById('dorm-wardrobe');
    var bag = document.getElementById('dorm-bag');
    var laptop = document.getElementById('dorm-laptop');
    var book = document.getElementById('dorm-book');

    var wardrobeIMG = "images/game_images/dorm/tinted_ward.png";
    var bagIMG = "images/game_images/dorm/tinted_bag.png";
    var laptopIMG = "images/game_images/dorm/tinted_pc.png";
    var bookIMG = "images/game_images/dorm/tinted_book.png";

    container.innerHTML = "";

    var base = document.createElement('div');
    
        base.className = "dorm_base_right_container";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/dorm.jpg";

    var overlay = document.createElement('div');
        overlay.id = "dorm_overlay";

    container.appendChild(base);
        base.appendChild(img);
        base.appendChild(bag);
        base.appendChild(book);
        base.appendChild(wardrobe);
        base.appendChild(laptop);
    container.appendChild(overlay);

    //WARDROBE
        wardrobe.onmouseover = function(){fillOverlay(container, overlay, wardrobeIMG, "Wardrobe", wardrobe)};
        wardrobe.onmouseout = function(e){clearOverlay(overlay, wardrobe)};

    //BAG
        bag.onmouseover = function(){fillOverlay(container, overlay, bagIMG, "City Map", bag)};
        bag.onmouseout = function(e){clearOverlay(overlay, bag)};

    //LAPTOP
        laptop.onmouseover = function(){fillOverlay(container, overlay, laptopIMG, "Game", laptop)};
        laptop.onmouseout = function(e){clearOverlay(overlay, laptop)};

    //BOOK
        book.onmouseover = function(){fillOverlay(container, overlay, bookIMG, "Illustrations", book)};
        book.onmouseout = function(e){clearOverlay(overlay, book)};
}

//fillOverlay: used when we hover on the items in the dorm (wardrobe, bag, laptop, book)
function fillOverlay(container, overlay, newImage, linkName, tooltipParent)
{
    var img = document.createElement('img');
        img.id = "hover";
        img.className = "img";
        img.src = newImage;
    
    container.appendChild(overlay);
        overlay.appendChild(img);//the image of the "highlight"
    
    var tooltip = document.createElement('span');//span, div, who cares
        tooltip.className = "dorm-tooltiptext";
        tooltip.innerHTML = linkName;
    
    tooltipParent.appendChild(tooltip);
}

//clearOverlay: restore the dorm to it's original state
function clearOverlay(overlay, item)
{
    overlay.innerHTML="";
    item.innerHTML="";
}

//refreshImg: refresh the full scholar sprite according to variables from the DB
function refreshImg()
{
    $.get('profile/scholar_sprite.php');//amazingly faster

    document.getElementById('img_character').src = 'profile/scholar_sprite.php';
    document.getElementById('img_character').onload = function()
    {
        document.getElementById('small-loader-wrapper').className = "small-loaded";    
    };
}

var categorySelected = 
[
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
]

//wardrobe: 
function wardrobe()
{
    raz();//remise à zéro + PULL from DB
    refreshIcons();//create the icons with the correct sex ("m" vs "f")
    
    var reset_params = user;//we save the user as it is before customization
    
    //BASIC OVERLAY
    var overlay = document.createElement('div');
        overlay.id = "dorm_overlay_wardrobe";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/tinted_ward.png";
        
    var overlay_form = document.createElement('div');
        overlay_form.id = "overlay_form";
        overlay_form.className = "flex-container";    

    container.appendChild(overlay);
        overlay.appendChild(img);//the image of the "highlight"
        overlay.appendChild(overlay_form);//the "customize your appearance" form

    //DETAILS
    //1. title
    var title = document.createElement('h1');
        title.innerHTML = "Customize Your Appearance";

    //2. thumbnails (t-shirt, pants, shoes, etc.)
    var left_container = document.createElement('div');//left
        left_container.id = "left_container";
        left_container.className = "flex-panel2";
        left_container.style.height = "100%";
        left_container.style.position = "relative";

    var selector_line = document.createElement('div');//the selector to the left, where we choose the clothes, etc.
        selector_line.className = "flex-container";

        var selector_choices_line1 = document.createElement('div');//the selector to the left, where we choose the clothes, etc.
            selector_choices_line1.className = "flex-container selector_choices";
            
    overlay_form.appendChild(left_container);
        left_container.appendChild(title);
        left_container.appendChild(selector_line);//for categories
        left_container.appendChild(selector_choices_line1);//for choices

    //3. Create the *****SELECTOR***** icons
    for(var i = 0; i < categoriesQty; i++)
    {
        //Icons
        var categoryFLEX = document.createElement('div');
            categoryFLEX.id = "categoryFLEX" + i;
            categoryFLEX.className = "flex-panel choices-button-container";

        var category = document.createElement('img')
            category.id = "category" + i;
            category.src = screens[i];
            category.className = "choices-button";

        selector_line.appendChild(categoryFLEX);
            categoryFLEX.appendChild(category);

        const prefix = "category";
            
        //Events
        category.onclick = function(e)
        {
            var index = getNumber(this, prefix)

            refreshItems(screens[index]);
            this.src = screens_hover[index];

            highlightSelected();
        };

        category.onmouseenter = function(e){this.src = screens_hover[getNumber(this, prefix)]};
        category.onmouseleave = function(e)
        {
            var index = getNumber(this, prefix)
            
            if(!categorySelected[index])
            {
                this.src = screens[index]};
            }
        }

    //4. Create the *****CHOICE***** icons
    for(var i = 0; i < choiceQty; i++)
    {
        //Icons
        var choiceFLEX = document.createElement('div');
            choiceFLEX.id = "choiceFLEX" + i;
            choiceFLEX.className = "flex-panel choices-button-container";

        var choice = document.createElement('img')
            choice.id = "choice" + i;
            // choice.src = screens[i];
            choice.className = "choices";

        const prefix = "choice";

        //Events
        choice.onclick = function(){itemClick(this.src, getNumber(this, prefix))};//Clicking on one of the shirt should automatically update the image on the right/left of the field

        selector_choices_line1.appendChild(choiceFLEX);
            choiceFLEX.appendChild(choice);
    }

    //5. Create buttons (Save, Reset)
    var button_container = document.createElement('div');
        button_container.style.position = "absolute";
        button_container.className = "x-right-y-bottom-real";

        // var button_reset = document.createElement('div');
        //     button_reset.className = "button pink_button";//style="margin:20px;"
        //     button_reset.style.margin = "10px";
        //     button_reset.innerHTML = "Reset";
        
        // var button_save = document.createElement('div');
        //     button_save.className = "button pink_button";
        //     button_save.style.margin = "10px";
        //     button_save.innerHTML = "Save";

    var button_container2 = document.createElement('div');
        button_container2.style.position = "absolute";
        button_container2.className = "flex-container x-left-y-bottom-real";

        var button_back = document.createElement('div');
            button_back.className = "button pink_button";//style="margin:20px;"
            button_back.style.margin = "10px";
            button_back.innerHTML = "Back";
                    
        // left_container.appendChild(selector_choices_line2);

        left_container.appendChild(button_container);
            // button_container.appendChild(button_reset);
            // button_container.appendChild(button_save);
        left_container.appendChild(button_container2);
            button_container2.appendChild(button_back);
            // button_container2.appendChild(information_field);

    //6. Create the Character Display (on the right)
    var right_container = document.createElement('div');//the character image container
        right_container.id = "right_container";
        right_container.style.position = "relative";
        right_container.style.minWidth = "200px";
        right_container.style.height = "100%";//initially 346

        var img_character = document.createElement('img');
            img_character.id = "img_character";
            img_character.style.height = "100%";//initially 346
            img_character.src = "scholar_sprite.php";

    overlay_form.appendChild(right_container);
        right_container.appendChild(img_character);

        
    document.getElementById('right_container').appendChild(createLoader());
    // document.getElementById('right_container').removeChild(document.getElementById('small-loader-wrapper'));//to remove the loader
        
    //6. Buttons event listeners
    button_back.onclick = function(e){raz()};

    //7. when we press escape (keycode = 27)
    $(document).keyup(function(e){if(e.keyCode == 27){raz()}});

    //8. start the wheel
    refreshItems(currentScreen);
    refreshImg();
}

function refreshItems(newScreen)//refreshes the labels of the choices
{
    refreshIcons();//refresh the icons with the correct sex ("m" vs "f")

    document.getElementById('small-loader-wrapper').className = "";
    
    for(var i = 0; i < allQuantities.length; i++)
    {
        if(newScreen == screens[i])
        {
            for(var j = 0; j < categoriesQty; j++)// could be j < allQuantities[i].length, but it will not hide the rest
            {
                var element = document.getElementById("choice" + j);
                
                if(j < allQuantities[i].length)
                {
                    element.src = allQuantities[i][j];
                    element.style.visibility = "visible";
                }
                else
                {
                    element.src = "";
                    element.style.visibility = "hidden";
                }
            }
        }
    }

    currentScreen = newScreen;
    document.getElementById('small-loader-wrapper').className = "small-loaded";
    highlightSelected();
}

//refreshes the icons to display the correct sex (ex.: when you switch to a girl, only male haircuts are displayed)
function refreshIcons()
{
    allQuantities =
    [
        // Sex
        [
            itemsPATH + "sex/female" + extension,
            itemsPATH + "sex/male" + extension
        ],
        // Eyes
        [
            itemsPATH + "eyes/blue" + extension,
            itemsPATH + "eyes/green" + extension,
            itemsPATH + "eyes/grey" + extension,
            itemsPATH + "eyes/brown" + extension
        ],
        // Hair Color
        [
            itemsPATH + "haircolor/blonde" + extension,
            itemsPATH + "haircolor/brown" + extension,
            itemsPATH + "haircolor/black" + extension,
            itemsPATH + "haircolor/red" + extension
        ],
        // Hair Style
        [
            itemsPATH + "hairstyles/" + temp_sex[user.sex] + "1" + extension,
            itemsPATH + "hairstyles/" + temp_sex[user.sex] + "2" + extension,
            itemsPATH + "hairstyles/" + temp_sex[user.sex] + "3" + extension,
            itemsPATH + "hairstyles/" + temp_sex[user.sex] + "4" + extension
        ],
        // Shirt
        [
            itemsPATH + "shirts/" + temp_sex[user.sex] + "/shirt1" + extension,
            itemsPATH + "shirts/" + temp_sex[user.sex] + "/shirt2" + extension,
            itemsPATH + "shirts/" + temp_sex[user.sex] + "/shirt3" + extension,
        ],
        // Pants
        [
            itemsPATH + "pants/" + temp_sex[user.sex] + "/pants0" + extension,
            itemsPATH + "pants/" + temp_sex[user.sex] + "/pants1" + extension,
            itemsPATH + "pants/" + temp_sex[user.sex] + "/pants2" + extension,
        ],
        // Shoes
        [
            itemsPATH + "shoes/" + temp_sex[user.sex] + "/shoes1" + extension,
            itemsPATH + "shoes/" + temp_sex[user.sex] + "/shoes2" + extension,
        ],
        // Skin Color
        [
            itemsPATH + "skin/white" + extension,
            itemsPATH + "skin/olive" + extension,
            itemsPATH + "skin/asian" + extension,
            itemsPATH + "skin/brown" + extension,
            itemsPATH + "skin/black" + extension
        ]//WITH SCREEN UPDATE
    ]

    categoriesQty = allQuantities.length;
    choiceQty = 8;// TODO: make this better
}

function highlightSelected()
{
    for(var i = 0; i < screens.length; i++)//scan all screens
    {
        if(currentScreen == screens[i])
        {
            $("#category" + i).addClass("category-selected")//highlight it

            categorySelected[i] = true;
            document.getElementById("category" + i).src = screens_hover[i];
        }
        else
        {
            $("#category" + i).removeClass("category-selected")//dehighlight all the others

            categorySelected[i] = false;
            document.getElementById("category" + i).src = screens[i];
        }
    }

    currentItem = getCurrentItem();

    for(var i = 0; i < choiceQty; i++)//scan all items
    {
        if(currentItem == i)
        {
            $("#choiceFLEX" + i).addClass("choices-selected")//highlight it
        }
        else
        {
            $("#choiceFLEX" + i).removeClass("choices-selected")//dehighlight all the others
        }
    }
}

function getEquippedItem(screenNumber)
{
    var actualValues =
    [
        user.sex,
        user.eyecolor,
        user.haircolor,
        user.hairstyle,
        user.shirtID,
        user.pantsID,
        user.shoesID,
        user.skincolor//WITH SCREEN UPDATE
    ];
    for(var j = 0; j < actualValues.length; j++)//we browse the position
    {
        if(actualValues[screenNumber] == j)
        {
            console.log("On screen " + screenNumber + " = " + actualValues[screenNumber]);
            return j;
        }
    }
}

function getCurrentItem()
{
    var actualValues =
    [
        user.sex,
        user.eyecolor,
        user.haircolor,
        user.hairstyle,
        user.shirtID,
        user.pantsID,
        user.shoesID,
        user.skincolor//WITH SCREEN UPDATE
    ];

    for(var i = 0; i < screens.length; i++)//scan all screens
    {
        if(currentScreen == screens[i])
        {
            for(var j = 0; j < actualValues.length; j++)//we browse the position
            {
                if(actualValues[i] == j)
                {
                    return j;
                }
            }
        }
    }    
}

function itemClick(newItem, position)//determines what screen we're on, and what we clicked
{
    document.getElementById('small-loader-wrapper').className = "";
    
    var screens_SQL =
    [
        "sex",
        "eyes",
        "hair_color",
        "hair_style",
        "shirt",
        "pants",
        "shoes",
        "skin_color"//WITH SCREEN UPDATE
    ];

    var hasSaved = false;

    //if we clicked on an outfit (in the SHIRT screen)
    if(currentScreen == screens[shirtScreen])
    {
        for(var i = 0; i < outfits.length; i++)//we scan through all the outfits
        {
            if(outfits[i] == position)//if the outfit is the same as the item we just clicked
            {
                // console.log("You clicked on an outfit! Unequiping pants...");
                pushToDB(screens_SQL[pantsScreen], 0);//unequip pants
                pushToDB(screens_SQL[shirtScreen], position);//save the outfit
                hasSaved = true;
            }
        }
    }
    else if(currentScreen == screens[pantsScreen])
    {
        for(var i = 0; i < outfits.length; i++)//we scan through all the outfits
        {
            if(outfits[i] == getEquippedItem(shirtScreen))//if the outfit is the same as the item we just clicked
            {
                // console.log("You are wearing an outfit! You cannot equip pants");
                pushToDB(screens_SQL[pantsScreen], 0);//unequip pants
                hasSaved = true;
            }
        }
    }

    if(!hasSaved)
    {
        for(var i = 0; i < screens.length; i++)
        {
            if(currentScreen == screens[i])
            {
                pushToDB(screens_SQL[i], position);
            }
        }
    }

    currentItem = position;
    highlightSelected();
}

function pushToDB(SQLname, value)//saves to the database
{
    if(SQLname == 'sex')
    {
        user.sex = value;
    }
    else if(SQLname == 'eyes')
    {
        user.eyecolor = value;
    }
    else if(SQLname == 'hair_color')
    {
        user.haircolor = value;
    }
    else if(SQLname == 'hair_style')
    {
        user.hairstyle = value;
    }
    else if(SQLname == 'shirt')
    {
        user.shirtID = value;
    }
    else if(SQLname == 'pants')
    {
        user.pantsID = value;
    }
    else if(SQLname == 'shoes')
    {
        user.shoesID = value;
    }
    else if(SQLname == 'skin_color')
    {
        user.skincolor = value;
    }

    pushVariablesToDB();

    refreshImg();
    verifyChange(SQLname, value);
}

function verifyChange(SQLname, value)//verify that the change has been made in the DB
{
    if(SQLname == 'sex' && user.sex == value)//if we're changing the sex, and it has the right value, DO NOTHING
    {
    }
    else if(SQLname == 'eyes' && user.eyecolor == value)
    {
    }
    else if(SQLname == 'hair_color' && user.haircolor == value)
    {
    }
    else if(SQLname == 'hair_style' && user.hairstyle == value)
    {
    }
    else if(SQLname == 'shirt' && user.shirtID == value)
    {
    }
    else if(SQLname == 'pants' && user.pantsID == value)
    {
    }
    else if(SQLname == 'shoes' && user.shoesID == value)
    {
    }
    else if(SQLname == 'skin_color' && user.skincolor == value)
    {
    }
    else//if it's not the right value, do it again
    {
        pushToDB(SQLname, value);
    }
}

raz();
// wardrobe();