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
        "(The trip to Arlington was long, but I’m finally here!)",//0 
        "(I’ve worked so hard to get here, but I’m ready to start fresh at this school.)",
        "(I watched the shuttle that carried me here from the airport drive away as I sat my suitcase down on the ground.)",
        "(This is so exciting! Everybody here looks so...famous.)",
        "(...)",
        "(Shoot, I don’t know what to do! Where is my dorm? Where are my classes? Is there anything I should do before unpacking? I should ask someone.)",//5 
        "(I desperately looked around to spot a friendly face, someone I could get help from, but as my eyes scanned the entrance of the school my heart started to sink.)",
        "(No matter where I looked, nobody was smiling or laughing. The students there looked so firm and... unreachable.)",
        "(There was an emptiness in my stomach as I remembered my friends and family back home.)",
        "(I miss them. There’s something about this place that makes me feel like I don’t belong.)",
        "*Sigh*",//10 
        "(I can’t go back now. I’ve worked too hard for this. Arlington Academy only accepts 10 scholarship students per year and I’m not going to waste this opportunity. Dad would be so disappointed...)",
        "(I firmly grasped the handle of my suitcase.)",
        "(I needed to find someone.)",
        "(I jumped out of surprise.)",
        "W-Whoa! Hello!",//15 
        "(Next)",
        "Hi " + CharaX_username + " ! (Finally, a smiling face!)",
        "(Ugh, I hate paperwork. But at least now I’m not completely lost.)",
        "(I followed Serena inside the school.)",
        "(She handed me several papers, all filled with questions I had to answer.)",//20 
        "(Next)",
        "(Next)",
        "(I already knew about these…)",
        "(Next)",
        "(Next)",//25 
        "(Next)",
        "(Next)",
        "(Next)",
        "(Next)",
        "(Next)",//30 
        "(Next)",
        "(Next)",
        "G-Got it! (Oh gosh, better not make a mistake!)",
        "null",
        "(Next)",//35 
        "(Better get this right)",
        "Click here to submit",//37 Department Form
        "There, all done.",
        "(Next)",
        "(Next)",//40 
        "Woah, it’s really nice. (This dorm room looks more expensive than my whole apartment back home...)",
        "(I may as well write out my life story at this rate.)",
        "Of course, I understand.",
        "Click here to submit",//44 Choose your name Form
        "(That was the weirdest medical form I have ever filled out...)",//45 
        "(Next)",
        "Alright!",
        "(Once you are done exploring, click here to proceed)",
        "*Pant* Why do I feel so tired?",
        "(Next)",//50 
        "(Next)",
        "Nice!",
        "That sounds awesome!",
        "I’ll make sure to remember that!",
        "(Next)",//55 
        "(Next)",
        "Wait, how will I be able to tell the difference?",
        "Got it!",
        "(Next)",
        "(Next)",//60 
        "(Next)",
        "Pfff. That sounds easy enough. How hard can it be to make friends?",
        "(I remembered how nobody was smiling at the entrance of the school earlier. I hope I can make some friends!)",
        "(…Gas mask?)",
        "null",//65 
        "(Next)",
        "null",
        "null",
        "Uh yeah…(Shoot, they looked a little mad.)",
        "Later! (That went pretty well.)",//70 
        "See you around! (That went really well! But what do they mean by “tutorial”? This isn’t a video game!)",
        "null",
        "Uh yeah…(Shoot, they looked a little mad.)",
        "Later! (That went pretty well.)",
        "See you around! (That went really well! But what do they mean by “tutorial”? This isn’t a video game!)",//75 
        "null",
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "Okay, I’ll have to brush up on my social skills.",
        "I’ll get better, you’ll see! There’s no way I’m missing the opportunity to make new friends!",
        "Told you it would be easy!",//85 
        "Sweet!",
        "That’s pretty nice of her.",
        "Oh, I see. (I suddenly felt a little nervous.)",
        "(We walked until we met a beautiful lady in the hallway.)",
        "(Lady Arlington was probably in her forties, considering her position in the school, but she looked much younger.)",//90 
        "(She had an aura of power and mystery… I felt intimidated and amazed at the same time. " + CharaX_username + " handed her the paperwork I filled out.)",
        "(Lady Arlington turned to look at us.)",
        "(Hey eyes met mine and...)",
        "(She dropped my paperwork on the ground.)",
        "(The principal looked at me as if she saw a ghost. It felt very awkward and I didn’t know where to look.)",//95 
        "W-Wait! (But " + CharaX_username + " just left the hallway, leaving me alone with the principal.)",
        "(Her look lingered for a couple of seconds. I could feel myself beginning to sweat a little as her eyes pierced my soul.)",
        "(END OF CHAPTER 0)",
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
        "Hehe, sorry. I didn’t mean to startle you. You must be our new scholarship student.",
        "My name is " + CharaX_username + " and I was assigned by the principal to help you with all the formalities here at Arlington.",
        "It’s nice to meet you! Now, follow me please. Before I show you where your dorm and classrooms are, you have some paperwork to fill.",
        "null",
        "null",//20 
        "It’s important for the school’s administration to know as much about you as possible so that Arlington can give you the education you need to tackle the world when you graduate.",
        "I am sure you are aware, since you did apply and got accepted to the Academy, but for the sake of getting things ready for you, I’m going to explain how the departments work around here.",
        "Arlington Academy has 7 departments in total in total: Business and Commerce, Pure and Applied Sciences, Medical Sciences, Fine Arts, Performing Arts, Fashion, and Athletics.",
        "Each department houses students with specific skills and personality traits, and it’s up to you to choose which one suits you best based on your talents and on who you are!",
        "First off, there is the <b>Department of Business, Commerce and Politics</b>, for all of the future entrepreneurs, CEOs, and politicians. If you love to lead and dream of changing the world, then this department is for you!",//25 
        "Next, there is the <b>Department of Pure and Applied Sciences</b>, for all of the future engineers and inventors of this world. If technology is your passion and you’re curious, logical and open-minded, then sign up for this department.",
        "Then, there is the <b>Department of Health Sciences</b>, for all of the future doctors and medical researchers of the nation. If you are caring, hardworking, and always willing to help, then this department is for you!",
        "Next is the <b>Department of Athletics</b>, for students with extraordinary skills in sports and other physical disciplines. If you are disciplined, headstrong, and love to compete, this department is for you!",
        "Next up is the <b>Department of Fine Arts</b>, for students with exceptional skills in the visual arts. If you want the opportunity to explore your creativity in painting, drawing and even more, sign up for this department!",
        "Next is the <b>Department of Performing Arts</b>, for students who love to be part of a show! If you’re outgoing, bold and love to perform in front of an audience, then this department is for you!",//30 
        "And lastly, there is the <b>Department of Fashion</b>, for students who love to design, model and keep aware of the trends. If you are sharp, ambitious and stylish, this department is for you!",
        "The Academy already has your choice registered in our computers, but I’d like you to sign and fill in this form to confirm your choice once and for all.",
        "Choose wisely! You won’t be able to change it afterwards",
        "Do you want me to repeat, or are you ready to choose?",
        "Alright here's the form.",//35 
        "null",
        "null",//37 Department Form
        "null",
        "Excellent!",
        "Thank you! Now let me show you where your dorm is.",//40 
        "This is where you’re going to be staying until the end of high school!",
        "The last thing I’m going to need you to do is to fill out this medical form. This is an important part of your file.",
        "null",
        "null",//44 Choose your name Form
        "Thanks! All the paperwork is now done!",//45 
        "Now that you know where your dorm is, try exploring the school a little.",
        "I’ll be waiting for you right here.",
        "null",
        "Hi again!",
        "Oh! I forgot to tell you about energy.",//50 
        "Each movement you make around the school will take out one energy point from your total energy.",
        "Each day you log in, you’ll automatically receive 10 energy points.",
        "Plus, the more days in a row you log in, the more energy points you will receive. If you log in two days in a row, you’ll get 15 points. If you log in three days in a row, you’ll get 20 points. Four days in a row is 25 points and five days in a row is a whopping 30 points!",
        "Be careful! If you miss one day, you’ll go back to 10 points.",
        "You’ll need your energy to fulfill your destiny here at Arlington Academy. You will also meet a lot of characters that will be with you until the very end.",//55 
        "Some people will be relatively easy to get along with, others… not so much.",
        "All the characters you’re going to meet will have an “infinity meter”. You will have several dialogue choices. You’re going to have to choose whether you want your choices to build on your friendship with them, or your romance.",
        "Friendship dialogue options will be indicated with a handshake button while romance dialogue options will be indicated with a heart button!",
        "Furthermore, if you choose to just stay friends with a character and only pick friendship dialogue options, your infinity meter will only go up to 50%, not one percent more.",
        "Only romance dialogue options will make your infinity meter with a character reach its max.",//60 
        "Once you choose, you’ll have to make yet another choice of dialogues that will either raise, drop, or leave your infinity meter as it is.",
        "Choose wisely! If your infinity meter is too low, you will not get the date you want with your favorite character at the end of each chapter.",
        "Haha! You’ll find that the students at Arlington Academy aren’t as simple to figure out.",
        "Go ahead and give it a try. I know some of my friends are in Classroom 1. Why don't you pay them a visit? Oh and also… Don’t mind the gas mask, it's for aesthetic purposes.",
        "null",//65 
        "Hi! You must be a new scholarship student. Welcome to Arlington!",
        "null",
        "null",
        "You look pretty tired, you should get back to your dorm and take a nap. See ya!",
        "I’m " + CharaY_username + " ! It’s nice to meet you. I bet you still have tons of things to unpack, so I’ll see you later!",//70 
        "That’s the spirit! I’ll let you finish the tutorial, you’re almost done. See you around!",
        "null",
        "My name is " + CharaY_username + ". You look pretty tired. I’ll let you get back to your dorm to get some rest. See ya!",
        "I’m " + CharaY_username + "! It’s nice to meet you too! I bet you still have tons of things to unpack, so I’ll see you later!",
        "Aw, it’s no biggie. I’m glad to meet a new player. I’ll let you finish the tutorial, you’re almost done. See you around!",//75 
        "null",
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "“Easy” you said?",
        "Not bad, but not perfect either.",
        "It looks like I underestimated you. That interaction was pretty smooth.",//85 
        "Haha! Well it seems like you’re ready to start your adventure here at Arlington.",
        "I’ll take you to the principal, Lady Arlington. She insists on welcoming all new students at the beginning of each year.",
        "HA! She’s nice alright… until you start breaking any rules.",
        "null",
        "null",//90 
        "null",
        "Here’s one of the new scholarship students Ms. Arlington!",
        "null",
        "null",
        "null",//95 
        "Well, this feels a bit awkward...so I’m going to head out. I’ve got a game to develop. Good luck and have fun at Arlington!",
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
        "null",
        "null",//20 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],//25 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],//30 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],//35 
        personnages.charaX[0],
        "null",//37 Department Form
        personnages.charaX[0],
        personnages.charaX[1],
        personnages.charaX[1],//40 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        "null",//44 Choose your name Form
        personnages.charaX[0],//45 
        personnages.charaX[0],
        personnages.charaX[0],
        "null",
        personnages.charaX[1],
        personnages.charaX[0],//50 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[1],
        personnages.charaX[0],
        personnages.charaX[1],//55 
        personnages.charaX[1],
        personnages.charaX[0],
        personnages.charaX[1],
        personnages.charaX[0],
        personnages.charaX[0],//60 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[1],
        personnages.charaX[1],
        "null",//65 
        personnages.charaY[0],
        personnages.charaY[0],
        personnages.charaY[0],
        personnages.charaY[0],
        personnages.charaY[0],//70 
        personnages.charaY[0],
        personnages.charaY[0],
        personnages.charaY[0],
        personnages.charaY[0],
        personnages.charaY[0],//75 
        "null",
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],//85 
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],
        personnages.charaX[0],//90 
        personnages.charaX[0],
        personnages.charaX[0],
        "null",
        "null",
        "null",//95 
        personnages.charaX[0],
        personnages.l_arlington[5],
        personnages.l_arlington[5],
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
        "null",//37 Department Form
        "null",
        "null",
        "null",//40 
        "null",
        "null",
        "null",
        "null",//44 Choose your name Form
        "null",//45 
        "null",
        "null",
        "null",
        "null",
        "null",//50 
        "null",
        "null",
        "null",
        "null",
        "null",//55 
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
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "null",
        "null",
        "null",//85 
        "null",
        "null",
        "null",
        "null",
        "null",//90 
        "null",
        "null",
        "Thank you, I’ll be handling it from no-",
        "*GASP*",
        "null",//95 
        "null",
        "null",
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
        "null",//37 Department Form
        "null",
        "null",
        "null",//40 
        "null",
        "null",
        "null",
        "null",//44 Choose your name Form
        "null",//45 
        "null",
        "null",
        "null",
        "null",
        "null",//50 
        "null",
        "null",
        "null",
        "null",
        "null",//55 
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
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "null",
        "null",
        "null",//85 
        "null",
        "null",
        "null",
        "null",
        personnages.l_arlington[0],//90 
        personnages.l_arlington[0],
        "null",
        personnages.l_arlington[0],
        personnages.l_arlington[5],
        personnages.l_arlington[5],//95 
        "null",
        "null",
        "null",
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
        locations.entrance,
        locations.hall1,//20 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//25 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//30 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//35 
        locations.hall1,
        locations.hall1,//37 Department Form
        locations.hall1,
        locations.hall1,
        locations.hall1,//40 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//44 Choose your name Form
        locations.dorm,//45 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//50 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//55 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//60 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//65 
        locations.class1,
        locations.class1,
        locations.class1,
        locations.class1,
        locations.class1,//70 
        locations.class1,
        locations.class1,
        locations.class1,
        locations.class1,
        locations.class1,//75 
        locations.class1,
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        locations.hall1,
        locations.hall1,
        locations.hall1,//85 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//90 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//95 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        ];
    //story[6] === Special Option: Specific state of this slide
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
        -5,
        -1,//35 
        -1,
        -3,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -31,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -2,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
        -1,
        -1,
        -1,
        -1,
        -1,//60 
        -1,
        -1,
        -1,
        -1,
        -2,//65 
        -1,
        -4,
        -5,
        64,
        64,//70 
        64,
        -5,
        64,
        64,
        64,//75 
        -2,
        -6,//77 ghost slide
        -6,//78 ghost slide
        -6,//79 ghost slide
        -6,//80 ghost slide
        -6,//81 ghost slide
        -6,//82 ghost slide
        74,
        74,
        74,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[7] === Objective -> "0" is no objective, all other numbers are specific cases
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
        0,//37 Department Form
        0,
        0,
        0,//40 
        0,
        0,
        0,
        0,//44 Choose your name Form
        0,//45 
        0,
        0,
        0,
        0,
        0,//50 
        0,
        0,
        0,
        0,
        0,//55 
        0,
        0,
        0,
        0,
        0,//60 
        0,
        0,
        0,
        0,
        3,//65 
        0,
        0,
        0,
        0,
        0,//70 
        0,
        0,
        0,
        0,
        0,//75 
        2,
        0,//77 ghost slide
        0,//78 ghost slide
        0,//79 ghost slide
        0,//80 ghost slide
        0,//81 ghost slide
        0,//82 ghost slide
        0,
        0,
        0,//85 
        0,
        0,
        0,
        0,
        0,//90 
        0,
        0,
        0,
        0,
        0,//95 
        0,
        0,
        0,
        ];
    //story[8] === Friendship Link -> "-1" is no link, otherwise the number represents the array number of the slide
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
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        55,
        -1,
        -1,
        -1,//70 
        -1,
        -1,
        -1,
        -1,
        -1,//75 
        -1,
        -1,//77 ghost slide
        -1,//78 ghost slide
        -1,//79 ghost slide
        -1,//80 ghost slide
        -1,//81 ghost slide
        -1,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[9] === Romance Link -> "-1" is no link, otherwise the number represents the array number of the slide
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
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        59,
        -1,
        -1,
        -1,//70 
        -1,
        -1,
        -1,
        -1,
        -1,//75 
        -1,
        -1,//77 ghost slide
        -1,//78 ghost slide
        -1,//79 ghost slide
        -1,//80 ghost slide
        -1,//81 ghost slide
        -1,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[10] === Choice 1 Link -> "-1" is no link, otherwise the number represents the array number of the slide
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
        24,
        -1,//35 
        -1,
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        -1,
        56,
        -1,
        -1,//70 
        -1,
        60,
        -1,
        -1,
        -1,//75 
        -1,
        -1,//77 ghost slide
        -1,//78 ghost slide
        -1,//79 ghost slide
        -1,//80 ghost slide
        -1,//81 ghost slide
        -1,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[11] === Choice 2 Link -> "-1" is no link, otherwise the number represents the array number of the slide
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
        35,
        -1,//35 
        -1,
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        -1,
        57,
        -1,
        -1,//70 
        -1,
        61,
        -1,
        -1,
        -1,//75 
        -1,
        -1,//77 ghost slide
        -1,//78 ghost slide
        -1,//79 ghost slide
        -1,//80 ghost slide
        -1,//81 ghost slide
        -1,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[12] === Choice 3 Link -> "-1" is no link, otherwise the number represents the array number of the slide
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
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        -1,
        58,
        -1,
        -1,//70 
        -1,
        62,
        -1,
        -1,
        -1,//75 
        -1,
        -1,//77 ghost slide
        -1,//78 ghost slide
        -1,//79 ghost slide
        -1,//80 ghost slide
        -1,//81 ghost slide
        -1,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[13] === Choice 1 Text -> "null" is no link, otherwise the number represents the array number of the slide
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
        "Can you repeat, please?",
        "null",//35 
        "null",
        "null",//37 Department Form
        "null",
        "null",
        "null",//40 
        "null",
        "null",
        "null",
        "null",//44 Choose your name Form
        "null",//45 
        "null",
        "null",
        "New Objective: Explore the School!",
        "Objective Complete: Explore the school!",
        "null",//50 
        "null",
        "null",
        "null",
        "null",
        "null",//55 
        "null",
        "null",
        "null",
        "null",
        "null",//60 
        "null",
        "null",
        "null",
        "null",
        "New Objective: Go Talk to the Person inside Classroom 1",//65 
        "Objective Complete: Go Talk to the Person inside Classroom 1",
        "null",
        "Yeah, hi.",
        "null",
        "null",//70 
        "null",
        "And...who are you?",
        "null",
        "null",
        "null",//75 
        "New Objective: Go Talk to the Person inside Hallway 1",
        "Objective Complete: Go Talk to the Person inside Hallway 1",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "null",
        "null",
        "null",//85 
        "null",
        "null",
        "null",
        "null",
        "null",//90 
        "null",
        "null",
        "null",
        "null",
        "null",//95 
        "null",
        "null",
        "null",
        ];
    //story[14] === Choice 2 Text -> "null" is no link, otherwise the number represents the array number of the slide
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
        "I’m ready to choose!",
        "null",//35 
        "null",
        "null",//37 Department Form
        "null",
        "null",
        "null",//40 
        "null",
        "null",
        "null",
        "null",//44 Choose your name Form
        "null",//45 
        "null",
        "null",
        "null",
        "null",
        "null",//50 
        "null",
        "null",
        "null",
        "null",
        "null",//55 
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
        "null",
        "Hi! I'm " + user.scholarname + ".",
        "null",
        "null",//70 
        "null",
        "Hi! I’m " + user.scholarname + ". It’s nice to meet you!",
        "null",
        "null",
        "null",//75 
        "null",
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "null",
        "null",
        "null",//85 
        "null",
        "null",
        "null",
        "null",
        "null",//90 
        "null",
        "null",
        "null",
        "null",
        "null",//95 
        "null",
        "null",
        "null",
        ];
    //story[15] === Choice 3 Text -> "null" is no link, otherwise the number represents the array number of the slide
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
        "null",//37 Department Form
        "null",
        "null",
        "null",//40 
        "null",
        "null",
        "null",
        "null",//44 Choose your name Form
        "null",//45 
        "null",
        "null",
        "null",
        "null",
        "null",//50 
        "null",
        "null",
        "null",
        "null",
        "null",//55 
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
        "null",
        "Thank you! I'm so excited to start!",
        "null",
        "null",//70 
        "null",
        "Thank you! It feels really nice to be so warmly welcomed!",
        "null",
        "null",
        "null",//75 
        "null",
        "null",//77 ghost slide
        "null",//78 ghost slide
        "null",//79 ghost slide
        "null",//80 ghost slide
        "null",//81 ghost slide
        "null",//82 ghost slide
        "null",
        "null",
        "null",//85 
        "null",
        "null",
        "null",
        "null",
        "null",//90 
        "null",
        "null",
        "null",
        "null",
        "null",//95 
        "null",
        "null",
        "null",
        ];
    //story[16] === Infinity meter consequence of going on that slide -> "0" is no consequence, otherwise the number represents what we add to the meter of the active person (the one talking, "relevant character")
    story[16] = [
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
        0,//37 Department Form
        0,
        0,
        0,//40 
        0,
        0,
        0,
        0,//44 Choose your name Form
        0,//45 
        0,
        0,
        0,
        0,
        0,//50 
        0,
        0,
        0,
        0,
        0,//55 
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
        0,
        0,
        0,
        -5,
        0,//70 
        5,
        0,
        -5,
        0,
        5,//75 
        0,
        0,//77 ghost slide
        0,//78 ghost slide
        0,//79 ghost slide
        0,//80 ghost slide
        0,//81 ghost slide
        0,//82 ghost slide
        0,
        0,
        0,//85 
        0,
        0,
        0,
        0,
        0,//90 
        0,
        0,
        0,
        0,
        0,//95 
        0,
        0,
        0,
        ];
    //story[17] === Infinity meter consequence of going on that slide -> "0" is no consequence, otherwise the number represents what we add to the meter of the active person (the one talking, "relevant character")
    story[17] = [
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
        0,//37 Department Form
        0,
        0,
        0,//40 
        0,
        0,
        0,
        0,//44 Choose your name Form
        0,//45 
        0,
        0,
        0,
        0,
        0,//50 
        0,
        0,
        0,
        0,
        0,//55 
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
        0,
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
        0,//77 ghost slide
        0,//78 ghost slide
        0,//79 ghost slide
        0,//80 ghost slide
        0,//81 ghost slide
        0,//82 ghost slide
        0,
        0,
        0,//85 
        0,
        0,
        0,
        0,
        0,//90 
        0,
        0,
        0,
        0,
        0,//95 
        0,
        0,
        0,
        ];
    //story[18] === visited -> FALSE by default, TRUE si le joueur a visité la slide
    story[18] = [
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
        false,//37 Department Form
        false,
        false,
        false,//40 
        false,
        false,
        false,
        false,//44 Choose your name Form
        false,//45 
        false,
        false,
        false,
        false,
        false,//50 
        false,
        false,
        false,
        false,
        false,//55 
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
        false,//77 ghost slide
        false,//78 ghost slide
        false,//79 ghost slide
        false,//80 ghost slide
        false,//81 ghost slide
        false,//82 ghost slide
        false,
        false,
        false,//85 
        false,
        false,
        false,
        false,
        false,//90 
        false,
        false,
        false,
        false,
        false,//95 
        false,
        false,
        false,
        ];
    //story[19] === Point of interest -> -1 by defaut, we look if we have visited slide X so that we can manipulate that information
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
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        56,//77 ghost slide
        57,//78 ghost slide
        58,//79 ghost slide
        60,//80 ghost slide
        61,//81 ghost slide
        62,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];
    //story[20] === landing slide -> -1 by defaut, but we go to a specific slide after the current one
    story[20] = [
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
        -1,//37 Department Form
        -1,
        -1,
        -1,//40 
        -1,
        -1,
        -1,
        -1,//44 Choose your name Form
        -1,//45 
        -1,
        -1,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        -1,
        -1,
        -1,//55 
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
        70,//77 ghost slide
        71,//78 ghost slide
        72,//79 ghost slide
        70,//80 ghost slide
        71,//81 ghost slide
        72,//82 ghost slide
        -1,
        -1,
        -1,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        -1,//95 
        -1,
        -1,
        -1,
        ];

}

Chapter0();//the simple act of appending the .js file will load the chapter into memory