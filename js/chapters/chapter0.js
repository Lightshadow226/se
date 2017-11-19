/*
Chapter 1 of the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

August 19, 2017
*/
var story = new Array();

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
                    "(The trip to Arlington was long, but I’m finally here!)",//0
                    "(I’ve worked so hard to get here, but I’m ready to start fresh at this school.)",
                    "(I watched the shuttle that carried me here from the airport drive away as I sat my suitcase down on the ground.)",
                    "(This is so exciting! Everybody here looks so...famous.)",
                    "(...)",
                    "(Shoot, I don’t know what to do!  Where is my dorm? Where are my classes? Is there anything I should do before unpacking? I should ask someone.)",//5
                    "(I desperately looked around to spot a friendly face, someone I could get help from, but as my eyes scanned the entrance of the school my heart started to sink.)",
                    "(No matter where I looked, nobody was smiling or laughing. The students there looked so firm and... unreachable.)",
                    "(There was an emptiness in my stomach as I remembered my friends and family back home.)",
                    "(I miss them. There’s something about this place that makes me feel like I don’t belong.)",
                    "*Sigh*",//10
                    "(I can’t go back now. I’ve worked too hard for this. Arlington Academy only accepts 10 scholarship students per year and I’m not going to waste this opportunity. Mom and Dad would be so disappointed...)",
                    "(I firmly grasped the handle of my suitcase.)",
                    "(I needed to find someone.)",
                    "(I jumped out of surprise.)",
                    "W-Whoa! Hello!",//15
                    "(Next)",
                    "Hi " + CharaX_username + "! (Finally, a smiling face!)",/*HI CHARACTER X*/
                    "(Ugh, I hate paperwork. But at least now I’m not completely lost.)",
                    "Go inside!",//we need to remove slide 19
                    "(They handed me several papers, all filled with questions I had to answer.)",//20
                    "(Next)",
                    "(Next)",
                    "(I already knew about those but hearing (name) list them makes it feel all too real...)",
                    "Click here to submit",
                    "There, all done.",//25
                    "(Next)",
                    
                    "(Next)",//30
                    "Woah, it’s really nice. (This dorm room looks more expensive than my whole apartment back home...)",
                    "(I may as well write out my life story at this rate.)",
                    "Of course, I understand.",
                    "************Not actually a form but rather a page where the player can choose the gender, skin color, hairstyle, etc. of the Scholar************",
                    "(That was the weirdest medical form I have ever filled out...)", //35
                    "(Next)",
                    "Alright!",
                    "(Once you are done exploring, click here to proceed)", //New Objective: Explore the School! (Player clicks on whatever location they want to go – 5 movements minimum before meeting Character X again in the Hallway 1)
                    "*Pant* Why do I feel so tired?",
                    "(Next)", //40
                    "(Next)",
                    "Nice!",
                    "That sounds awesome!",
                    "I’ll make sure to remember that!",
                    "(Next)", //45
                    "(Next)",
                    "Wait, how will I be able to tell the difference?",
                    "Got it!",
                    "(Next)",
                    "(Next)", //50
                    "(Next)",
                    "Pfff. That sounds easy enough. How hard can it be to make friends?",
                    "(I remembered how nobody was smiling at the entrance of the school earlier. I hope I can make some friends!)",
                    "(Next)",
                    "null",//55 // New Objective: Go Talk to the Person inside Classroom 1 (Player clicks on Classroom 1 – 1 movement) (Character Y is in the classroom)
                    "(Next)",
                    "null",
                    "null",
                    "Uh yeah…(Shoot, they looked a little mad.)",
                    "Later! (That went pretty well.)",//60
                    "See you around! (That went really well! But what do they mean by “tutorial”? This isn’t a video game!)",
                    "null",
                    "Uh yeah…(Shoot, they looked a little mad.)",
                    "Later! (That went pretty well.)",
                    "See you around! (That went really well! But what do they mean by “tutorial”? This isn’t a video game!)",//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "Okay, I’ll have to brush up on my social skills.",
                    "I’ll get better, you’ll see! There’s no way I’m missing the opportunity to make new friends!",
                    "Told you it would be easy!",//75
                    "Sweet!",
                    "That’s pretty nice of her.",
                    "Oh, I see. (I suddenly felt a little nervous.)",
                    "(We walked until we met a beautiful lady in the hallway.)",
                    "(Lady Arlington was probably in her forties, considering her position in the school, but she looked much younger.)",//80
                    "(She had an aura of power and mystery… I felt intimidated and amazed at the same time. (Character X) handed her the paperwork I filled out.)",
                    "(Lady Arlington turned to look at us.)",
                    "(Hey eyes met mine and...)",
                    "(She almost dropped my paperwork on the ground.)",
                    "(The principal looked at me as if she saw a ghost. It felt very awkward and I didn’t know where to look.)",//85
                    "W-Wait! (But –Character X- just left the hallway, leaving me alone with the Principal.)",
                    "(Her look lingered for a couple of seconds. I could feel myself beginning to sweat a little as her eyes pierced my soul.)",
                    "(END OF CHAPTER 0)"//88
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
                    "null",
                    "null",
                    "null",
                    "null",//10
                    "null",
                    "null",
                    "null",
                    "Hi there!",
                    "null",//15
                    "Hehe, sorry. I didn’t mean to startle you. You must be " + user.username + ".",
                    "My name is " + CharaX_username + " and I was assigned by the principal to help you with all the formalities here at Arlington.", //CHANGE CHARA X NAME
                    "It’s nice to meet you! Now, follow me please. Before I show you where your dorm and classrooms are, you have some paperwork to fill.",
                    "null",//we need to remove slide 19
                    "null",//20
                    "It’s important for the school’s administration to know as much about you as possible so that Arlington can give you the education you need to tackle the world when you graduate.",
                    "First, fill in the Academic Information Form. Arlington has 7 faculties in total: Business and Commerce, Pure and Applied Sciences, Medical Sciences, Fine Arts, Performing Arts, Fashion, and Athletics.",
                    "null",
                    "null",
                    "null",//25
                    "Excellent!",
                    
                    "Thank you! Now let me show you where your dorm is.",//30
                    "This is where you’re going to be staying until the end of high school!",
                    "The last thing I’m going to need you to do is to fill out this medical form. This is an important part of your file.",
                    "null",
                    "null",
                    "Thanks! All the paperwork is now done!", //35
                    "Now that you know where your dorm is, try exploring the school a little.",
                    "I’ll be waiting for you in the hallway.",
                    "null",
                    "Hi again!",
                    "Oh! I forgot to tell you about energy.", //40
                    "Each movement you make around the school will take out one energy point from your total energy.",
                    "Each day you log in, you’ll automatically receive 10 energy points.",
                    "Plus, the more days in a row you log in, the more energy points you will receive. If you log in two days in a row, you’ll get 15 points. If you log in three days in a row, you’ll get 20 points. Four days in a row is 25 points and five days in a row is a whopping 30 points!",
                    "Be careful! If you miss one day, you’ll go back to 10 points.",
                    "You’ll need your energy to fulfill your destiny here at Arlington Academy. You will also meet a lot of characters that will be with you until the very end.", //45
                    "Some people will be relatively easy to get along with, others… not so much.",
                    "All the characters you’re going to meet will have an “attraction meter”. You will have several dialogue choices. You’re going to have to choose whether you want your choices to build on your friendship with them, or your romance.",
                    "Friendship dialogue options will be indicated with a handshake button while romance dialogue options will be indicated with a heart button!",
                    "Furthermore, if you choose to just stay friends with a character and only pick friendship dialogue options, your attraction meter will only go up to a certain number, not one point more.",
                    "Only romance dialogue options will make your attraction meter with a character reach its max.", //50
                    "Once you choose, you’ll have to make yet another choice of dialogues that will either raise, drop, or leave your attraction meter as it is.",
                    "Choose wisely! If your attraction meter is too low, you will not get the date you want with your favorite character at the end of each chapter.",
                    "Haha! You’ll find that the students at Arlington Academy aren’t as simple to figure out.",
                    "Go ahead and give it a try. I think I see someone in Classroom 1. Talk to them and see if you can make the right choice.",
                    "null",//55
                    "Hi! You must be a new scholarship student. Welcome to Arlington!",
                    "null",
                    "null",
                    "You look pretty tired, you should get back to your dorm and take a nap. See ya!",
                    "I’m " + CharaY_username + "! It’s nice to meet you. I bet you still have tons of things to unpack, so I’ll see you later!",//60
                    "That’s the spirit! I’ll let you finish the tutorial, you’re almost done. See you around!",
                    "null",
                    "My name is ___. You look pretty tired. I’ll let you get back to your dorm to get some rest. See ya!",
                    "I’m __! It’s nice to meet you too! I bet you still have tons of things to unpack, so I’ll see you later!",
                    "Aw, it’s no biggie. I’m glad to meet a new player. I’ll let you finish the tutorial, you’re almost done. See you around!",//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "“Easy” you said?",
                    "Not bad, but not perfect either.",
                    "It looks like I underestimated you. That interaction was pretty smooth.",
                    "Haha! Well it seems like you’re ready to start your adventure here at Arlington.",//70
                    "I’ll take you to the principal, Lady Arlington. She insists on welcoming all new students at the beginning of each year.",
                    "HA! She’s nice alright… until you start breaking any rules.",
                    "null",
                    "null",
                    "null",//75
                    "Here’s one of the new scholarship students Mrs. Arlington!",
                    "null",
                    "null",
                    "null",
                    "Well, this feels a bit awkward...so I’m going to head out. I’ve got a game to develop. Good luck and have fun at Arlington!",//80
                    "null",
                    "C-Could it be…that you are...?",//82
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
                    "null",
                    "null",
                    "null",
                    "null",//10
                    "null",
                    "null",
                    "null",
                    personnages.charaX[0],
                    personnages.charaX[0],//15
                    personnages.charaX[1],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    "null",//we need to remove slide 19
                    "null",//20
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    "null",
                    personnages.charaX[0],//25
                    personnages.charaX[1],
                    
                    personnages.charaX[1],//30
                    personnages.charaX[1],
                    personnages.charaX[1],
                    personnages.charaX[1],
                    "null",
                    personnages.charaX[1], //35
                    personnages.charaX[0],
                    personnages.charaX[0],
                    "null",
                    personnages.charaX[1],
                    personnages.charaX[0], //40
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[1],
                    personnages.charaX[0],
                    personnages.charaX[1],//45
                    personnages.charaX[1],
                    personnages.charaX[0],
                    personnages.charaX[1],
                    personnages.charaX[0],
                    personnages.charaX[0], //50
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[1],
                    personnages.charaX[1],
                    "null", //55
                    personnages.karolina[0],
                    personnages.karolina[0],
                    personnages.karolina[0],
                    personnages.karolina[0],
                    personnages.karolina[0],//60
                    personnages.karolina[0],
                    personnages.karolina[0],
                    personnages.karolina[0],
                    personnages.karolina[0],
                    personnages.karolina[0],//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],//70
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],//75
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],
                    personnages.charaX[0],//80
                    personnages.l_arlington[0],
                    personnages.l_arlington[0],//82
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
                    "null",
                    "null",
                    "null",
                    "null",//we need to remove slide 19
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
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
                    "null",
                    "null",//45
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //50
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //55
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//60
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "null",
                    "null",
                    "null",
                    "null",//70
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//75
                    "null",
                    "Thank you, I’ll be handling it from no-",
                    "*GASP*",
                    "null",
                    "null",//80
                    "null",
                    "null",//82
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
                    "null",
                    "null",
                    "null",
                    "null",//we need to remove slide 19
                    "null",//20
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//25
                    "null",
                    
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//45
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //50
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //55
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//60
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "null",
                    "null",
                    "null",
                    "null",//70
                    "null",
                    "null",
                    personnages.l_arlington[1],
                    personnages.l_arlington[1],
                    personnages.l_arlington[1],//75
                    personnages.l_arlington[1],
                    personnages.l_arlington[1],
                    personnages.l_arlington[1],
                    personnages.l_arlington[1],
                    personnages.l_arlington[1],//80
                    "null",
                    "null",//82
                ];

    //story[5] === Location
    story[5] = [
                    locations.blackScreen,//0
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,
                    locations.entrance,//5
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
                    locations.entrance,//we need to remove slide 19
                    locations.hall1,//20
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,//25
                    locations.hall1,
                    
                    locations.hall1,//30
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm, //35
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm, //40
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,   
                    locations.dorm,
                    locations.dorm, //45 
                    locations.dorm, 
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm, //50
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm,
                    locations.dorm, //55  
                    locations.class1,
                    locations.class1,
                    locations.class1,
                    locations.class1,
                    locations.class1,//60
                    locations.class1,
                    locations.class1,
                    locations.class1,
                    locations.class1,
                    locations.class1,//65
                    locations.class1,
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,//70
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,//75
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,
                    locations.hall1,//80
                    locations.hall1,
                    locations.hall1,//82
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
                    -3,
                    -1,//25
                    -1,
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//35
                    -1,
                    -1,
                    -2,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -2, //55
                    -1,
                    -4,
                    -5,
                    66,
                    66,//60
                    66,
                    -5,
                    66,
                    66,
                    66,//65
                    -2,
                    -6,//ghost slide 67
                    -6,//ghost slide 68
                    -6,//ghost slide 69
                    -6,//ghost slide 70
                    -6,//ghost slide 71
                    -6,//ghost slide 72
                    76,
                    76,
                    76,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82

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
                    
                    0,//30
                    0,
                    0,
                    0,
                    0,
                    0, //35
                    0,
                    0,
                    0,
                    0,
                    0,//40
                    0,
                    0,
                    0,
                    0,
                    0,//45
                    0,
                    0,
                    0,
                    0,
                    0, //50
                    0,
                    0,
                    0,
                    0,
                    3, //55 --> Objective = 3 === Go to Classroom 1
                    0,
                    0,
                    0,
                    0,
                    0,//60
                    0,
                    0,
                    0,
                    0,
                    0,//65
                    2,//CREATE NEW OBJECTIVE: GO IN HALLWAY
                    0,//ghost slide 67
                    0,//ghost slide 68
                    0,//ghost slide 69
                    0,//ghost slide 70
                    0,//ghost slide 71
                    0,//ghost slide 72
                    0,
                    0,
                    0,
                    0,//70
                    0,
                    0,
                    0,
                    0,
                    0,//75
                    0,
                    0,
                    0,
                    0,
                    0,//80
                    0,
                    0,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    58,
                    -1,
                    -1,
                    -1,//60
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    -1,//ghost slide 67
                    -1,//ghost slide 68
                    -1,//ghost slide 69
                    -1,//ghost slide 70
                    -1,//ghost slide 71
                    -1,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    62,
                    -1,
                    -1,
                    -1,//60
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    -1,//ghost slide 67
                    -1,//ghost slide 68
                    -1,//ghost slide 69
                    -1,//ghost slide 70
                    -1,//ghost slide 71
                    -1,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    -1,
                    59,
                    -1,
                    -1,//60
                    -1,
                    63,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    -1,//ghost slide 67
                    -1,//ghost slide 68
                    -1,//ghost slide 69
                    -1,//ghost slide 70
                    -1,//ghost slide 71
                    -1,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    -1,
                    60,
                    -1,
                    -1,//60
                    -1,
                    64,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    -1,//ghost slide 67
                    -1,//ghost slide 68
                    -1,//ghost slide 69
                    -1,//ghost slide 70
                    -1,//ghost slide 71
                    -1,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    -1,
                    61,
                    -1,
                    -1,//60
                    -1,
                    65,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    -1,//ghost slide 67
                    -1,//ghost slide 68
                    -1,//ghost slide 69
                    -1,//ghost slide 70
                    -1,//ghost slide 71
                    -1,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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
                    
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //35
                    "null",
                    "null",
                    "New Objective: Explore the School!",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//45
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //50
                    "null",
                    "null",
                    "null",
                    "null",
                    "New Objective: Go Talk to the Person inside Classroom 1", //55
                    "null",
                    "null",
                    "Yeah, hi.",
                    "null",
                    "null",//60
                    "null",
                    "And...who are you?",
                    "null",
                    "null",
                    "null",//65
                    "New Objective: Go Talk to the Person inside Hallway 1",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "null",
                    "null",
                    "null",
                    "null",//70
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//75
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//80
                    "null",
                    "null",//82
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
                    
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//45
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //50
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //55
                    "null",
                    "null",
                    "Hi! I'm " + user.username + ".",
                    "null",
                    "null",//60
                    "null",
                    "Hi! I’m (username). It’s nice to meet you!",
                    "null",
                    "null",
                    "null",//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "null",
                    "null",
                    "null",
                    "null",//70
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//75
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//80
                    "null",
                    "null",//82
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
                    
                    "null",//30
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //35
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//40
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//45
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //50
                    "null",
                    "null",
                    "null",
                    "null",
                    "null", //55
                    "null",
                    "null",
                    "Thank you! I'm so excited to start!",
                    "null",
                    "null",//60
                    "null",
                    "Thank you! It feels really nice to be so warmly welcomed!",
                    "null",
                    "null",
                    "null",//65
                    "null",
                    "null",//ghost slide 67
                    "null",//ghost slide 68
                    "null",//ghost slide 69
                    "null",//ghost slide 70
                    "null",//ghost slide 71
                    "null",//ghost slide 72
                    "null",
                    "null",
                    "null",
                    "null",//70
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//75
                    "null",
                    "null",
                    "null",
                    "null",
                    "null",//80
                    "null",
                    "null",//82
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
                    
                    "0",//30
                    "0",
                    "0",
                    "0",
                    "0",
                    "0", //35
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//40
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//45
                    "0",
                    "0",
                    "0",
                    "0",
                    "0", //50
                    "0",
                    "0",
                    "0",
                    "0",
                    "0", //55
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//60
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//65
                    "0",
                    "0",//ghost slide 67
                    "0",//ghost slide 68
                    "0",//ghost slide 69
                    "0",//ghost slide 70
                    "0",//ghost slide 71
                    "0",//ghost slide 72
                    "0",
                    "0",
                    "0",
                    "0",//70
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//75
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",//80
                    "0",
                    "0",//82
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
                    
                    false,//30
                    false,
                    false,
                    false,
                    false,
                    false, //35
                    false,
                    false,
                    false,
                    false,
                    false,//40
                    false,
                    false,
                    false,
                    false,
                    false,//45
                    false,
                    false,
                    false,
                    false,
                    false, //50
                    false,
                    false,
                    false,
                    false,
                    false, //55
                    false,
                    false,
                    false,
                    false,
                    false,//60
                    false,
                    false,
                    false,
                    false,
                    false,//65
                    false,
                    false,//ghost slide 67
                    false,//ghost slide 68
                    false,//ghost slide 69
                    false,//ghost slide 70
                    false,//ghost slide 71
                    false,//ghost slide 72
                    false,
                    false,
                    false,
                    false,//70
                    false,
                    false,
                    false,
                    false,
                    false,//75
                    false,
                    false,
                    false,
                    false,
                    false,//80
                    false,
                    false,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//60
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    59,//ghost slide 67
                    60,//ghost slide 68
                    61,//ghost slide 69
                    63,//ghost slide 70
                    64,//ghost slide 71
                    65,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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
                    
                    -1,//30
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //35
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//40
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//45
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //50
                    -1,
                    -1,
                    -1,
                    -1,
                    -1, //55
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//60
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//65
                    -1,
                    73,//ghost slide 67
                    74,//ghost slide 68
                    75,//ghost slide 69
                    73,//ghost slide 70
                    74,//ghost slide 71
                    75,//ghost slide 72
                    -1,
                    -1,
                    -1,
                    -1,//70
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//75
                    -1,
                    -1,
                    -1,
                    -1,
                    -1,//80
                    -1,
                    -1,//82
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