/*
Chapter 1 of the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

August 19, 2017
*/
var story = new Array();

const current_Chapter = 0;

const c = 17;
/* "c" values:
    0 -> story text (ce qui apparait dans le text container)
    1 -> bubble 1
    2 -> character 1
    3 -> bubble 2
    4 -> character 2
    5 -> location
    6 -> link
    7 -> objective
    8 -> frienship link
    9 -> romance link
    10 -> Choice 1 link (when multiple linking is enabled)
    11 -> Choice 2 link
    12 -> Choice 3 link
    13 -> Choice 1 text
    14 -> Choice 2 text
    15 -> Choice 3 text
    16 -> Infinity meter consequence of going on that slide
    17 -> Visited (did we go on that slide or not?)
    18 -> Point of Interest "x" (did we visit slide x? If not, skip to next slide)
    19 -> Landing Slide "y" (if we visited slide x, go to slide y)
*/

function Chapter0()
{
    for (var i = 0; i < c; i++)
    {
        story[i]= new Array();//il faut créer des arrays pour chaque array. Donc pour x[0], il faut créer des arrays, mais pour x[1] aussi, les deux sont indépendents. Il peut y avoir x[0][1][1][10] et x[1][2] qui coexistent
    }

    //story[0] === Story Text
    story[0] = [
                    "Whoa, where am I?", //0
                    "I was leying peacefully in my bed, and now I’ve been transported to this...place?",
                    "Ugh, I have such a headache.",
                    "The last thing I remember was receiving an email from the Sweet Elite staff inviting me to try out this prototype demo. I clicked the link and...",
                    "... (I took a second to look at my surroundings)",
                    "Wait a second...Am I at Arlington Academy!? This can't be possible! Sweet Elite isn't even out yet!",//5
                    "Oh my, this place is quite fancy. But what’s with these obnoxious banners on the front door? It's a bit pretentious.",
                    "(Next)",
                    "Uh-",
                    "Wait, what?",
                    "Absolutely no clue.",//10
                    "(Next)",
                    "Wait, Serena? I know her! She’s the one who sent me here!",
                    "Hey, that’s not very nice.",
                    "(Next)",
                    "(Next)",//15
                    "(Next)",
                    "(Next)",
                    "(Next)",
                    "(Next)",
                    "Oh really? What kind of events?", //20
                    "(Next)",
                    "(Next)",
                    "I was only reading my email, and I got transported here.",
                    "(Next)",
                    "...The code?",//25
                    "(Next)",
                    "(Next)",
                    "(Ellie dialed a number on her cellphone.)",
                    "(Next)",
                    "(Next)",//30
                    "(Next)",
                    "(Next)",
                    "(Next)",
                    "(Next)",
                    "(Next)",//35
                    "(Next)",
                    "(Next)",
                    "(She hung up.)",
                    "(Next)",
                    "(I started to feel dizzy. The world was spinning around me.)",//40
                    "W-Wait, what is happening-",
                    "(Next)",
                    "END THE TEST",
                    
               ];
    
    //story[1] === Bubble 1 === ce que le personnage 1 dit
    story[1] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    "Those 'obnoxious' banners represent the 7 Arlington Academy departments.",
                    "Also, who the hell are you.",
                    "I haven’t seen you around before. If your an actual student here, why aren’t you wearing your uniform?",
                    "You have no idea what I’m about, don’t you?",//10
                    "Dammit.",
                    "Those damn seniors...Serena and her friends, they haven’t introduced you to anything?!",
                    "Oh? Well, in that case, I’m sorry you had to go through the pain of talking to her.",
                    "Listen, I don’t know what you’re business is here at the Academy, but I have stuff to take care of.",
                    "Serena and the rest of her senior friends were supposed to take care of you. Its not my job, therefore not my problem anymo-",//15
                    "null",
                    "Well, if you’re willing to pick up after the seniors, feel free to do so Ellie.",
                    "null",
                    "null",
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                    
                ];
    
    //story[2] === Character 1
    story[2] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    personnages.tadashi[0],
                    personnages.tadashi[4],
                    personnages.tadashi[4],
                    personnages.tadashi[0], //10
                    personnages.tadashi[3],
                    personnages.tadashi[3],
                    personnages.tadashi[5],
                    personnages.tadashi[0],
                    personnages.tadashi[0],//15
                    "null",
                    personnages.tadashi[3],
                    "null",
                    "null",
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                ];

    //story[3] === Bubble 2
    story[3] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//10
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//15
                    "Oh come on, Tadashi! You’re scaring them away.",
                    "null",
                    "Gladly.",
                    "null",
                    "Hey sweetie! You’re going to have to excuse our student body president. He’s a little on the edge you know? Big events are going to happen here at the Academy and everybody is planning for them.",//20
                    "Sorry, but that’s a secret!",
                    "Alright, something tell me that you’re not really supposed to be here right now.",
                    "null",
                    "Hm, interesting",
                    "It seems were still having small problems with the code...",//25
                    "Oh, don’t mind me, I was only talking to myself.",
                    "I’m going to get my friend Tegan to fix this for you.",
                    "null",
                    "Hey, Tegan!",
                    "...",//30
                    "Tegan, it’s 3 in the afternoon. HOW are you still sleeping?!",
                    "Oh well, nevermind that. We got a situation.",
                    "Another case of negligence by the seniors. One beta player slipped through the cracks again.",
                    "...",
                    "Yeah, Tadashi found them first again.",//35
                    "Let’s make sure it doesn’t happen again, okay?",
                    "Thanks Tegan, you’re the best!",
                    "null",
                    "Okay, you should be good to go!",
                    "null",//40
                    "null",
                    "Bye now! And see you later!",
                    "null",
                    

                ];

    //story[4] === Character 2
    story[4] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//10
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//15
                    personnages.ellie[0],
                    "null",
                    personnages.ellie[1],
                    personnages.ellie[0],
                    personnages.ellie[0],//20
                    personnages.ellie[1],
                    personnages.ellie[0],
                    personnages.ellie[0],
                    personnages.ellie[0],
                    personnages.ellie[0],//25
                    personnages.ellie[1],
                    personnages.ellie[0],
                    personnages.ellie[0],
                    personnages.ellie[1],
                    personnages.ellie[0],//30
                    personnages.ellie[3],
                    personnages.ellie[0],
                    personnages.ellie[0],
                    personnages.ellie[0],
                    personnages.ellie[0],//35
                    personnages.ellie[0],
                    personnages.ellie[1],
                    personnages.ellie[0],
                    personnages.ellie[1],
                    personnages.ellie[0],//40
                    personnages.ellie[0],
                    personnages.ellie[1],
                    "null",
                ];

    //story[5] === Location
    story[5] = [
                    locations.blackScreen,//0
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance, //5
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//10
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//15
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//20
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//25
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//30
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//35
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//40
                    locations.blackScreen,
                    locations.blackScreen,
                    locations.blackScreen,
                ];

    //story[6] === Special Option: Specific state of this slide
        /*
        This is the state of the slide
        Link =
        x > 0 -> number represents the array number of the slide to go to
        -1 -> Next slide
        -2 -> Unlimited navigation
        -3 -> Special form (Choose your department)
        -4 -> Enable Choice of Romance & Friendship
        -5 -> Enable multiple choices (3)
        -6 -> we look at past links (we enable variables 18 & 19)
        */
    story[6] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
    //story[7] === Objective -> "0" is no objective, all other numbers are specific cases
        /* 
        Objectives:
        
        1:  entrance
        2:  hall1
        3:  class1
        4:  class2
        5:  hall2
        6:  cafeteria
        7:  cafeteriaLounge
        8:  cafeteriaOutside
        9:  garden
        10: gym
        11: dormHall
        12: dorm
        13: dormBathroom
        */
    story[7] = [
                    0,//0
                    0,
                    0,
                    0,
                    0,
                    0,//5
                    0,
                    0,
                    0,
                    0,
                    0,//10
                    0,
                    0,
                    0,
                    0,
                    0,//15
                    0,
                    0,
                    0,
                    0,
                    0,//20
                    0,
                    0,
                    0,
                    0,
                    0,//25
                    0,
                    0,
                    0,
                    0,
                    0,//30
                    0,
                    0,
                    0,
                    0,
                    0,//35
                    0,
                    0,
                    0,
                    0,
                    0,//40
                    0,
                    0,
                    0,
                ];
    //story[8] === Friendship Link -> "-1"is no link, otherwise the number represents the array number of the slide
    story[8] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
    //story[9] === Romance Link -> "-1"is no link, otherwise the number represents the array number of the slide
    story[9] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
    //story[10] === Choice 1 Link -> "-1"is no link, otherwise the number represents the array number of the slide
        /*
        Pour les 3 links:
        
        x > 0 -> number represents the array number of the slide to go to
            -1 -> Next slide
            -2 -> Unlimited navigation
            -3 -> Special form (Choose your department)
            -4 -> Enable Choice of Romance & Friendship
            -5 -> Enable multiple choices (3)
            -6 -> Enable multiple choices (2) 
        */
    story[10] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];

    //story[11] === Choice 2 Link -> "-1"is no link, otherwise the number represents the array number of the slide
    story[11] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
    //story[12] === Choice 3 Link -> "-1"is no link, otherwise the number represents the array number of the slide
    story[12] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
    //story[13] === Choice 1 Text -> "null"is no link, otherwise the number represents the array number of the slide
    story[13] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//10
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//15
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                ];

    //story[14] === Choice 2 Text -> "null"is no link, otherwise the number represents the array number of the slide
    story[14] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//10
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//15
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                ];
    //story[15] === Choice 3 Text -> "null"is no link, otherwise the number represents the array number of the slide
    story[15] = [
                    "null",//0
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//5
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //10
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//15
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                ];
    //story[16] === Infinity meter consequence of going on that slide -> "0" is no consequence, otherwise the number represents what we add to the meter of the active person (the one talking, "relevant character")
    story[16] = [
                    "0",//0
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//5
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//10
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//15
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//20
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//25
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//30
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//35
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//40
                    "0",
                    "0",
                    "0",
                ];
    
    //story[17] === visited -> FALSE by default, TRUE si le joueur a visité la slide
    story[17] = [
                    false,//0
                    false,
                    false,
                    false,
                    false,
                    false,//5
                    false,
                    false,
                    false,
                    false,
                    false,//10
                    false,
                    false,
                    false,
                    false,
                    false,//15
                    false,
                    false,
                    false,
                    false,
                    false,//20
                    false,
                    false,
                    false,
                    false,
                    false,//25
                    false,
                    false,
                    false,
                    false,
                    false,//30
                    false,
                    false,
                    false,
                    false,
                    false,//35
                    false,
                    false,
                    false,
                    false,
                    false,//40
                    false,
                    false,
                    false,
                ];
    //story[18] === Point of interest -> -1 by defaut, we look if we have visited slide X so that we can manipulate that information
    story[18] = [
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
    //story[19] === landing slide -> -1 by defaut, but we go to a specific slide after the current one
    story[19] = [   
                    -1,//0
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//5
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//10
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//15
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//20
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//25
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                ];
}

/*
Links: Unstandardized functions. If a slide wants to act weird, specify it here with a negative value, and add the corresponding "if" functions in the Game Engine

Link = -1 : default, continue the story, storyLocation++
Link >  0 : one choice, go to the specified line, storyLocation = Link
Link < -1 : Every number is a unique decision. Ex.: -2 could be a medical form, -3 could be to choose something, or whatever.

Link = -2 : Navigate School -> Activates the navigation buttons
*/

Chapter0();//the simple act of appending the .js file will load the chapter into memory