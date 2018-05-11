/*
Chapter 1 of the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

September 02, 2017
*/
var story = new Array();

user.last_chapter_played = 1;
saveVariables(x.lastChapterPlayed);
// pushVariablesToDB();

const c = 19;//TODO: update this because it should be 20

function Chapter()
{
    for (var i = 0; i < c; i++)
    {
        story[i]= new Array();//il faut créer des arrays pour chaque array. Donc pour x[0], il faut créer des arrays, mais pour x[1] aussi, les deux sont indépendents. Il peut y avoir x[0][1][1][10] et x[1][2] qui coexistent
    }

    //story[0] === Story Text
    story[0] = [
        "(Lady Arlington stands there for a couple of seconds, a look of utter shock in her face, before quickly composing herself and extending her hand for me to shake.)",//0 
        "(Next)",
        "(She trailed off once more as she gazed at me; seeming to lose herself in her thoughts for a second before quickly shaking her head and trying to offer me what I assumed was an attempt at a warm smile.)",
        "(Next)",
        "(Next)",
        "(She picked up the files that she had dropped to the floor and walked off in the other direction.)",//5 
        "Okay… that was odd.",
        "Nevermind that, " + user.username +"! You’re here; you’ve made it. Let’s just focus on getting these bags to my dorm.",
        "(My dorm… It still feels weird to say that… like this is all just a dream. Like I’m going to wake up any second now in my bed, still at home and waiting to see if I’d gotten accepted into the most prestigious school in the United States.)",
        "null",
        "(It's definitely a high-end room, but I still can’t believe how simple yet homey-looking it is… I was expecting golden handles and hand-carved wood!)",//10 
        "And to think I was actually worried…",
        "(Next)",
        "(I jumped, startled by the sudden sound, and quickly swiveled around to see a girl with long red hair walking into my room)",
        "null",
        "I’m sorry, who are you? (I didn’t bother correcting her.)",//15 
        "I’m sorry, who are you? (I didn’t bother correcting her.)",
        "I’m sorry, who are you? (I didn’t bother correcting her.)",
        "(Next)",
        "(Her gaze seemed to survey me as she looked me up and down. Giving me the sudden urge to cover myself with something.)",
        "Oh-I'm, uh, my name is [Scholar's name].",//20 
        "How did you kno-",
        "(That last bit is not completely wrong.) Well, it's nice to meet you Karolina! I'm assuming those bags in the hallway are yours...is your dorm the one next door?",
        "(Next)",
        "(She held up a finger, stopping me mid-sentence, and I watched as she pulled out a phone and gasped.)",
        "(Next)",//25 
        "(Next)",
        "(And with a flip of her hair, she turned and walked out of the room, a sway in her hips that was hard to miss but could still pass as natural.)",
        "(...)",
        "(I’m going to end up with a huge headache today.)",
        "*sigh* All that aside, I should go and explore this place while I can. Don’t want to get myself lost in the hallways once school starts tomorrow…",//30 
        "null",
        "(Just as I turned the corner into another hallway, I collided head-first into a warm mass and instinctively reached out and grabbed it to steady myself.)",
        "(A mass with green eyes, blond hair, and really muscular arms.)",
        "(An embarrassing squeak left my mouth as I quickly let go of him and took a step back.)",
        "S-Sorry.",//35 
        "Y-Yeah, I’m " + user.username + ". Sorry about almost throwing us both to the ground...",
        "(Next)",
        "(Next)",
        "(I turned to see a tall, lean boy with dark black hair walking briskly towards us.)",
        "(He stopped suddenly upon noticing my presence.)",//40 
        "H-hi I’m " + user.username + "... (I extended my hand for him to shake.)",
        "Same… I was just looking around trying to familiarize myself with the layout of this place, but I completely forgot how huge it is.",
        "(Next)",
        "(Next)",
        "(Next)",//45 
        "(Next)",
        "null",
        "Yeah. His workout shouldn’t take that long anyway.",
        "(Next)",
        "(He glared at me… maybe pissing this guy off might not be very smart.)",//50 
        "(He took one more look at me and scoffed before walking off)",
        "S-Sure. (I smiled)",
        "(He grinned back at me before heading off in the opposite direction of Tadashi. Probably to the gym.)",
        "Maybe it would be best to get whatever it is that you need to do, done now? That way you’d have the rest of the day free.",
        "(He took one more look at me and scoffed before walking off)",//55 
        "(Next)",
        "(They started heading in the same direction, Alistair grumbling all the way. Once they we’re at the end of the hallway, Tadashi turned back to look at me.)",
        "(Next)",
        "null",
        "Whoa… is every room in this place incredibly huge?",//60 
        "(For it being such a huge cafeteria there was no one in it apart from myself, a few workers that were behind the counter…",
        "(...and a girl with short brown hair who was fretting with her blouse.)",
        "(Wait… maybe that’s the girl Karolina was looking for!",
        "(I quickly approached her.)",
        "(She’s too busy dealing with that stain on her shirt to notice me) Um… excuse me?",//65 
        "(Next)",
        "(She sighed, dropping her hands from their incessant scrubbing against the fabric)",
        "(Next)",
        "null",
        "…sorry, you’re right, I’m just a bit stressed today.",//70 
        "It always does the job for me.",
        "(Next)",
        "" + user.username + ", I’m new here. Actually, I ran into a girl called Karolina who was looking for someone with your description. Do you know her?",
        "(She began to quickly clean up the remnants of her breakfast and stood up to throw them out)",
        "N-not that long ago and no, she didn’t say what she--",//75 
        "(The words hadn't even fully left my mouth before she was dashing out of the cafeteria.)",
        "--wanted from... you…",
        "Nice to meet you too.",
        "null",
        "(A boy with short red hair was sitting at one of the desks; working on his laptop. He looked up once he heard me come in.)",//80 
        "Hmm? Oh, ah, no. I’m just looking around the school, I’m " + user.username + ". (I quickly moved forward and offered my hand to shake.)",
        "(He shook my hand.)",
        "(I glanced at the screen of his laptop.) What are you working on? If you don’t mind me asking.",
        "Oh… (I nodded, focusing my gaze on the floor.)",
        "null",//85 
        "…",
        "Pfft! (I burst out laughing, causing Tegan to jump slightly and look up from his laptop.)",
        "I-I’m sorry… *snort* it took me a moment t-to get that… *laugh* but good one. (I smiled.)",
        "(I’m going to take a wild guess and say that not a lot of people get that joke.)",
        "Well, it was nice meeting you Tegan… I should get going now.",//90 
        "(Next)",
        "null",
        "(Woah!)",
        "(I looked up to see a dark skinned girl kicking a soccer ball straight at me.)",
        "null",//95 
        "Not really.",
        "You think so?",
        "(Next)",
        "Y-yeah, that kinda startled me a bit…",
        "(Next)",//100 
        "I don’t do well with people who throw stuff at me. Especially if I don’t know them.",
        "(Next)",
        "" + user.username + ".  Athletics department, then?",
        "(She walked away without waiting for a reply. Soccer ball tucked under her arm.)",
        "…kid?",//105 
        "Everybody here seems to have things to do later today, I wonder if there’s something I don’t know about...? ",
        "Anyway, I should go back to exploring the school. ",
        "null",
        "(A loud clunking noise immediately drew my attention to one of the corners of the room, where a girl stood sorting through what appeared to be scraps of metal. She stopped upon noticing me.)",
        "Yeah… I just got here. I’m " + user.username + "",//110 
        "null",
        "(Next)",
        "Alright!",
        "(Next)",
        "(Next)",//115 
        "null",
        "(I stayed around for a while longer watching Ellie transform the scarps of metal into… some sort of contraption that I honestly could not make head or tails out of, before waving goodbye and leaving the room.)",
        "null",
        "(Holy… this place has to have every type of plant there is in the world…",
        "(I turned around to see a girl with long blonde hair kneeling in front of one of the large rectangular pots.)",//120 
        "Oh! Hi… I didn’t think there was anyone else in here…",
        "(Next)",
        "null",
        "(Next)",
        "(Next)",//125 
        "(Next)",
        "Well, I’m kinda new here and I was just looking around the place, sorry if I interrupted you or anything. I’m " + user.username + ", by the way.",
        "(Next)",
        "(A small ringing sound suddenly came from one of Claire’s pockets. Startling us both.)",
        "(She took out her phone from it and took a look at her screen before shutting the alarm off.)",//130 
        "Nice meeting you too.",
        "(She stood up to dust herself off and then left the garden with a small wave in my direction)",
        "null",
        "(Next)",
        "T-Tadashi? Wh--?",//135 
        "My-my what?",
        "(Next)",
        "(Next)",
        "(He sighed, pinching the bridge of his nose between his fingers.)",
        "Um, Tadashi?",//140 
        "(Next)",
        "Wait… I have to take a picture? Now?",
        "But-",
        "(Next)",
        "(Next)",//145 
        "(Something about this made me extremely anxious… Everything at Arlington was so meticulously planned… so serious.)",
        "(He turned around and left without giving me a chance to ask him anything else.)",
        "Oh god…",
        "(I’ve spent the whole day moving boxes and running around, and now I’m supposed to take a picture!?)",
        "null",//150 
        "(Confirm Choice)",//151 illustrations
        "(I took a glance at myself in the mirror and groaned)",//152 illustrations
        "It’ll have to do.",//153 illustrations
        "null",
        "(As I entered the gym, I saw two others in line to take their picture.)",//155 
        "(Next)",
        "(Next)",
        "(I noticed that the stain on Neha’s shirt had completely disappeared.)",
        "(Neha looked back at me and gave me a small smile.)",
        "(Neha looked back at me and gave me a small smile.)",//160 
        "You guys haven’t taken your picture either?",
        "(Next)",
        "(Next)",
        "(She flipped her hair and gestured to herself with a flair of her hand)",
        "...and you Neha?",//165 
        "(Her monotonous response struck me as odd, but she was smiling at me so I didn’t think much of it.)",
        "(It only took a couple of minutes for the guy to take our picture, and before long, Neha was inviting me to come help them redecorate Karolina’s room.)",
        "(Karolina didn’t complain and I think she was glad for the extra set of hands.)",
        "(In the end, I had a lot of fun. Even if I did end up with glue and pieces of wallpaper shoved into unimaginable areas.)",
        "(Next)",//170 
        "(As I entered the gym, I saw two others in line to take their picture.)",
        "Hi Ellie, Tegan. You guys haven’t taken your picture either?",
        "(Next)",
        "(I smiled) Yeah…",
        "(It only took a couple of minutes for the guy to take our picture, and before long, Tegan was asking me if I wanted to go play videogames with Ellie for a while.)",//175 
        "(Tegan blushed at that, looking down at his feet)",
        "No, no, I’d love to!",
        "(It turned out to be a lot of fun. Ellie kept losing no matter how much she tried and her fake ire made both Tegan and I laugh freely.)",
        "(I was surprised yet pleased at how relaxed the pair made me feel. Especially since I had just met them.)",
        "(Next)",//180 
        "(As I entered the gym, I saw two others in line to take their picture.)",
        "Hey Raquel. Yeah, I took a little too long looking around the school. What about you and Claire?",
        "(Next)",
        "(Next)",
        "(Next)",//185 
        "(Next)",
        "At least we’re all here now.",
        "(They both smiled at me.)",
        "(They both smiled at me.)",
        "(It only took a couple of minutes for the guy to take our picture, and before long, Raquel was asking me to join her and Claire in the garden.)",//190 
        "(Turns out Claire was an expert in all things plant related. You’d think hearing about the properties of each individual plant in the garden would be boring, but Claire’s clear enthusiasm and Raquel’s hilarious inputs every now and then made the experience surprisingly fun.)",
        "(We ended up talking until night had fallen and it was then that we reluctantly decided that it was time to head back to the dorms.)",
        "(Next)",
        "(As I entered the gym, I saw two others in line to take their picture.)",
        "(He waved me over as if I didn’t already see them, given that we were the only people here. I smiled)",//195 
        "(Despite him glaring at me an hour ago, Tadashi seemed very calm in my presence. It kind of made me feel nervous.)",
        "Hey Tadashi, I hope I didn’t upset you too much today…",
        "(Though his reply was slightly conceited, I was relieved to not have Tadashi pissed at me anymore.)",
        "You were pestering me about being late and yet here you are?",
        "(I cocked my head to the side and raised an eyebrow at them.)",//200 
        "(Next)",
        "(Next)",
        "(Next)",
        "(I laughed, shaking my head at the both of them.)",
        "(It only took a couple of minutes for the guy to take our picture, and before long, Alistair was inviting me to join his and Tadashi’s study session.)",//205 
        "(Although I’d never think of studying as fun, Alistair and Tadashi’s banter made it entirely worthwhile. Before long, I was up to date with almost everything that I had missed in the school year.)",
        "(I seriously think there isn’t a better pair of study-buddies than these two.)",
        "(Next)",
        "(When I got back to my dorm, I realized how exhausted I am.)",
        "(All I wanted was to go to bed.)",//210 
        "(I took off my uniform and slipped into my pajamas, not even bothering to finish unpacking for tomorrow.)",
        "(I yawned as I drew the covers over my body and rested my head on my pillow.)",
        "(But for some reason, I couldn’t help but feel that I was forgetting something… something important.)",
        "(But I was too tired to think.)",
        "I’ll figure it out in the morning.",//215 
        "(Next)",
        "(I woke up suddenly as the sun touched my face.)",
        "Oh, my gosh, what time is it?!",
        "(I reached for my phone and my heart nearly stopped when I saw the time.)",
        "Oh no...",//220 
        "(Classes had started five minutes ago.)",
        "(I jumped out of bed and rushed to put on my uniform.)",
        "I can’t freaking believe this! ",
        "END CHAPTER 1",
        "null",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
        ];
    //story[1] === Bubble 1 === ce que le personnage 1 dit
    story[1] = [
        "null",//0 
        "Oh, I’m so sorry, it's just been a very stressful day for me.",
        "null",
        "In any case, welcome to Arlington Academy, my dear! It is, of course, an immense pleasure to have you here as part of our student body and, let me assure you, you won’t be regretting the decision of joining us.",
        "Now, I’d love to stay and chat, but there’s still a lot to do and I really must get going. It was a pleasure meeting you.",
        "null",//5 
        "null",
        "null",
        "null",
        "null",
        "null",//10 
        "null",
        "Worried about what?",
        "null",
        "null",
        "Bit of a scaredy cat, aren’t ya?",//15 
        "I hardly think that someone who likes talking to themselves in public should be judging me.",
        "Ugh, I know right? It’s just so… plain. Thankfully, we’re allowed to decorate it any way we want. I mean, there’s no way I’m going to leave my walls with that awful wallpaper.",
        "Excuse me? I’m Karolína Nováková, the greatest up-and-coming model of the year. Not to mention, the hottest student on campus.",
        "null",
        "And...you are?",//20 
        "New student, huh?",
        "Please, everybody in this school already knows me. Besides, you look like you have no clue what you're doing.",
        "Yes, and that's why I'm here. I do not tolerate shitty neighbors, the last one we've had blasted their heavy metal music up until one in the morning every Thursday.",
        "null",
        "Oh god, look at the time! ",//25 
        "I really should be going now, things to do and hearts to break, you know! Oh, and if you happen to see a girl with short brown hair who goes by the name Neha, tell her I’m looking for her. Later~",
        "null",
        "null",
        "null",
        "null",//30 
        "null",
        "null",
        "null",
        "Hey.",
        "null",//35 
        "Don’t worry, I was a bit lost in thought… are you the new kid?",
        "Again, no worries. I’m as sturdy as I look. My name’s Alistair.",
        "null",
        "null",
        "null",//40 
        "null",
        "null",
        "null",
        "What?? I was just on my way to the gym!",
        "null",//45 
        "That’d throw off my whole schedule! Why don’t you go and start on your own and I’ll catch up with you after my morning workout.",
        "null",
        "null",
        "Exactly! Thanks man.",
        "null",//50 
        "null",
        "Don’t mind him, he can be a bit hard-headed at times. Anyway, it was nice meeting you... maybe I’ll see you later.",
        "null",
        "null",
        "null",//55 
        "Fine! Whatever, man. It’s not like this is going to completely screw over my whole schedule for the day!",
        "null",
        "null",
        "null",
        "null",//60 
        "null",
        "null",
        "null",
        "null",
        "Oh no… why do these things always happen to me?!",//65 
        "W-what? Oh! I’m sorry, it’s just-- I just spilled coffee all over my shirt! I can’t--",
        "null",
        "It’s no use… it’s ruined.",
        "null",
        "Well, excuse me if I seem to care about the money lost with the ruining of this shirt.",//70 
        "That… might actually work, now that you mention it.",
        "Thank you so much!",
        "In any case, I’m Neha. And you? I don’t think I’ve met you before.",
        "Wait, what?! Karolina is looking for me? Why didn’t you lead with that?!",
        "Has it been long since you spoke with her? Did she say what she wanted? Is it about this afternoon?",//75 
        "null",
        "null",
        "null",
        "null",
        "null",//80 
        "...Can I help you?",
        "Tegan... I-I’m from the Pure and Applied Sciences department.",
        "null",
        "It-it's just some school stuff… w-which, I really should… get back to… I need to finish this before noon.",
        "null",//85 
        "Yeah, I have another pair just like it.",
        "null",
        "null",
        "...T-Thanks",
        "null",//90 
        "Yeah… you too.",
        "null",
        "Heads up!",
        "null",
        "null",//95 
        "Niiice, you’ve got a good kick there. You play?",
        "You should give it a try then. I mean, if you play as good as you kick…",
        "Totally!",
        "Haha! Well, at least you’ve got nice reflexes!",
        "Sorry ‘bout that, just trying to see if the new kid had some skills.",//100 
        "...You could’ve at least made the attempt to catch it.",
        "...Alright then.",
        "Name’s Raquel and as you might have noticed, soccer’s what I live for.",
        "The one and only. Which reminds me, I don’t have a lot of time to practice today, something important I have to do this afternoon so I really should get going. See you kid!",
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        "Hi! I don’t think I’ve seen you around before. Are you new?",//110 
        "Nice to meet you " + user.username + "! I’m Ellie Collins, president of the robotics club.",
        "Yup. I know having two science departments can be a bit confusing but you’ll get the hang of it.",
        "Haha! I think we’re at club capacity right now but I’ll be sure to let you know if we have space for next year, if you’re still interested.",
        "Maybe you should give things a shot before condemning them based on how they look from the outside…",
        "In any case, I really should get back to finishing this, but you’re welcomed to stick around and watch if you want.",//115 
        "null",
        "null",
        "null",
        "null",
        "O-only about a hundred of them actually…",//120 
        "null",
        "It’s okay… it’s easy for me to pass unnoticed.",
        "null",
        "It’s okay. I’m used to it.",
        "...Thank you.",//125 
        "…",
        "null",
        "I-It’s alright, I was just looking through the school’s medical herbs. Pleased to meet you " + user.username + ", I’m Claire.",
        "null",
        "null",//130 
        "I-I have to go now, but it was nice meeting you!",
        "null",
        "null",
        "Hey! " + user.username + "!",
        "null",//135 
        "How long have you been wandering through the halls? Why haven’t you taken your Student ID picture at the gymnasium yet?",
        "…",
        "No one told you, of course.",
        "null",
        "I swear, I sometimes wonder how this school hasn’t gone up in flames yet.",//140 
        "Right, you’re supposed to be at the gym taking your student picture right now. ",
        "So run to your room, put on your uniform, then run to the gymnasium and take your picture. Otherwise it’s going to end up being more paperwork for me.",
        "Yes.",
        "You don’t understand do you? You’re an Arlington student now.",
        "Your file, your skills and competences… all of this represents Arlington Academy from now on. The administration is going to advertise all of those things to help you succeed.",//145 
        "But to build your file, they need your picture.",
        "Now hurry up and GO.",
        "null",
        "null",
        "null",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        "null",//155 
        "null",
        "Oh, hi " + user.username + ".",
        "null",
        "null",
        "It worked. Thank you.",//160 
        "null",
        "We were--",
        "null",
        "null",
        "null",//165 
        "I was helping Karolina redecorate.",
        "null",
        "null",
        "null",
        "Congratulations! You’ve unlocked an illustration! Go to your dorm page and click on (insert name of the page here) to see it!",//170 
        "null",
        "null",
        "We… kinda lost track of time.",
        "null",
        "null",//175 
        "null",
        "It’s okay if you don’t want to of course.",
        "null",
        "null",
        "Congratulations! You’ve unlocked an illustration! Go to your dorm page and click on (insert name of the page here) to see it!",//180 
        "null",
        "null",
        "I knew Raquel would forget so I tried to find her after you and I spoke, but I forgot that today was practice day.",
        "null",
        "Sorry…",//185 
        "null",
        "null",
        "null",
        "null",
        "null",//190 
        "null",
        "null",
        "Congratulations! You’ve unlocked an illustration! Go to your dorm page and click on (insert name of the page here) to see it!",
        "null",
        "" + user.username + "! Over here!",//195 
        "null",
        "null",
        "null",
        "null",
        "null",//200 
        "null",
        "Hey man, I told you I needed to work out today!",
        "null",
        "null",
        "null",//205 
        "null",
        "null",
        "Congratulations! You’ve unlocked an illustration! Go to your dorm page and click on (insert name of the page here) to see it!",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "The Next Day…",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "null",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
        ];
    //story[2] === Character 1
    story[2] = [
        personnages.l_arlington[5],//0 
        personnages.l_arlington[5],
        personnages.l_arlington[0],
        personnages.l_arlington[0],
        personnages.l_arlington[0],
        "null",//5 
        "null",
        "null",
        "null",
        "null",
        "null",//10 
        "null",
        "null",
        personnages.karolina[0],
        personnages.karolina[0],
        personnages.karolina[0],//15 
        personnages.karolina[3],
        personnages.karolina[0],
        personnages.karolina[3],
        personnages.karolina[0],
        personnages.karolina[0],//20 
        personnages.karolina[0],
        personnages.karolina[0],
        personnages.karolina[3],
        personnages.karolina[0],
        personnages.karolina[0],//25 
        personnages.karolina[0],
        "null",
        "null",
        "null",
        "null",//30 
        "null",
        "null",
        personnages.alistair[0],
        personnages.alistair[0],
        personnages.alistair[0],//35 
        personnages.alistair[0],
        personnages.alistair[0],
        "null",
        personnages.alistair[0],
        "null",//40 
        "null",
        "null",
        "null",
        personnages.alistair[0],
        "null",//45 
        personnages.alistair[0],
        personnages.alistair[0],
        personnages.alistair[0],
        personnages.alistair[0],
        "null",//50 
        "null",
        personnages.alistair[0],
        "null",
        personnages.alistair[0],
        "null",//55 
        personnages.alistair[0],
        "null",
        "null",
        "null",
        "null",//60 
        "null",
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],//65 
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],//70 
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],//75 
        "null",
        "null",
        "null",
        "null",
        "null",//80 
        personnages.tegan[0],
        personnages.tegan[0],
        personnages.tegan[0],
        personnages.tegan[0],
        personnages.tegan[0],//85 
        personnages.tegan[0],
        personnages.tegan[0],
        personnages.tegan[0],
        personnages.tegan[0],
        personnages.tegan[0],//90 
        personnages.tegan[0],
        "null",
        "null",
        personnages.raquel[0],
        personnages.raquel[0],//95 
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],//100 
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        personnages.ellie[0],//110 
        personnages.ellie[0],
        personnages.ellie[0],
        personnages.ellie[0],
        personnages.ellie[0],
        personnages.ellie[0],//115 
        personnages.ellie[0],
        personnages.ellie[0],
        "null",
        "null",
        "null",//120 
        personnages.claire[0],
        personnages.claire[0],
        personnages.claire[0],
        personnages.claire[0],
        personnages.claire[0],//125 
        personnages.claire[0],
        personnages.claire[0],
        personnages.claire[0],
        personnages.claire[0],
        personnages.claire[0],//130 
        personnages.claire[0],
        "null",
        "null",
        "null",
        personnages.tadashi[0],//135 
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[3],//140 
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],//145 
        personnages.tadashi[0],
        personnages.tadashi[0],
        "null",
        "null",
        "null",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        personnages.neha[0],//155 
        "null",
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],//160 
        personnages.neha[0],
        personnages.neha[0],
        "null",
        "null",
        "null",//165 
        personnages.neha[0],
        personnages.neha[0],
        personnages.neha[0],
        "null",
        "null",//170 
        personnages.tegan[0],
        "null",
        personnages.tegan[0],
        "null",
        personnages.tegan[0],//175 
        "null",
        personnages.tegan[0],
        "null",
        "null",
        "null",//180 
        personnages.claire[0],
        "null",
        personnages.claire[0],
        "null",
        personnages.claire[0],//185 
        "null",
        personnages.claire[0],
        personnages.claire[0],
        "null",
        personnages.claire[0],//190 
        personnages.claire[0],
        "null",
        "null",
        personnages.alistair[0],
        personnages.alistair[0],//195 
        "null",
        "null",
        "null",
        "null",
        personnages.alistair[0],//200 
        "null",
        personnages.alistair[0],
        "null",
        personnages.alistair[0],
        personnages.alistair[0],//205 
        personnages.alistair[0],
        "null",
        "null",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "null",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "null",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
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
        "null",
        "Alistair!",
        "null",
        "Hey man, I’ve been looking for you. There’s still a ton of stuff to do before this afternoon, we really should get going...Oh.",//40 
        "Hello.",
        "Tadashi Nakano. Student Council President and member of the Business, Commerce, and Politics department. Pleasure to meet you.",
        "Well don’t let us stop you. Alistair and I need to take care of some stuff anyway.",
        "null",
        "What are you talking about man, I told you this yesterday. You can go to the gym after we’re done.",//45 
        "null",
        "null",
        "null",
        "null",
        "I don’t remember asking for your opinion, newbie.",//50 
        "Whatever, you know where to find me Al. Just find me when you think you have time",
        "null",
        "null",
        "null",
        "My point exactly. See Alistair, the new kid gets my logic.",//55 
        "null",
        "Yeah, yeah, I’ll make it up to you. Come on.",
        "See you around, newbie!",
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
        "null",
        "null",
        "null",
        "null",//80 
        "null",
        "null",
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
        "null",
        "null",//100 
        "null",
        "null",
        "null",
        "null",
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        "null",//110 
        "null",
        "null",
        "null",
        "null",
        "null",//115 
        "null",
        "null",
        "null",
        "null",
        "null",//120 
        "null",
        "null",
        "null",
        "null",
        "null",//125 
        "null",
        "null",
        "null",
        "null",
        "null",//130 
        "null",
        "null",
        "null",
        "null",
        "null",//135 
        "null",
        "null",
        "null",
        "null",
        "null",//140 
        "null",
        "null",
        "null",
        "null",
        "null",//145 
        "null",
        "null",
        "null",
        "null",
        "null",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        "null",//155 
        "Well look who it is.",
        "null",
        "null",
        "null",
        "null",//160 
        "null",
        "null",
        "Are you kidding me? I was too busy taking care of my room! It’s still nowhere near done but I needed time to get ready anyway.",
        "null",
        "It takes time to look this fabulous you know. Not as much as other people though, of course.",//165 
        "null",
        "null",
        "null",
        "null",
        "null",//170 
        "null",
        "Hey! " + user.username + "!",
        "null",
        "That sort of thing happens a lot to the both of us. No biggie! Means we get to hang out a little more with you!",
        "null",//175 
        "Look at that! I thought I’d have to ask [her/him/them] myself.",
        "null",
        "null",
        "null",
        "null",//180 
        "null",
        "Hey, look who it is! You taking your picture too, new kid?.",
        "null",
        "And so, the both of us ended up being late.",
        "null",//185 
        "Hey, no! It wasn’t your fault. I’m the one who keeps forgetting this stuff.",
        "null",
        "null",
        "Exactly.",
        "null",//190 
        "null",
        "null",
        "null",
        "null",
        "null",//195 
        "null",
        "null",
        "Upset me? That’s funny. I’ve handled bigger sharks at this school.",
        "Glad you could make it newbie.",
        "null",//200 
        "I spent the whole day working, unlike a certain someone else.",
        "null",
        "Wasn’t talking about you, Al.",
        "null",
        "null",//205 
        "null",
        "null",
        "null",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "null",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "null",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
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
        "null",
        "null",
        personnages.tadashi[0],
        personnages.tadashi[0],//40 
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        "null",
        personnages.tadashi[0],//45 
        "null",
        personnages.tadashi[0],
        personnages.tadashi[0],
        "null",
        personnages.tadashi[0],//50 
        personnages.tadashi[0],
        "null",
        "null",
        personnages.tadashi[0],
        personnages.tadashi[0],//55 
        "null",
        personnages.tadashi[0],
        personnages.tadashi[0],
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
        "null",
        "null",
        "null",
        "null",//80 
        "null",
        "null",
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
        "null",
        "null",//100 
        "null",
        "null",
        "null",
        "null",
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        "null",//110 
        "null",
        "null",
        "null",
        "null",
        "null",//115 
        "null",
        "null",
        "null",
        "null",
        "null",//120 
        "null",
        "null",
        "null",
        "null",
        "null",//125 
        "null",
        "null",
        "null",
        "null",
        "null",//130 
        "null",
        "null",
        "null",
        "null",
        "null",//135 
        "null",
        "null",
        "null",
        "null",
        "null",//140 
        "null",
        "null",
        "null",
        "null",
        "null",//145 
        "null",
        "null",
        "null",
        "null",
        "null",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        personnages.karolina[0],//155 
        personnages.karolina[0],
        "null",
        "null",
        "null",
        "null",//160 
        personnages.karolina[0],
        "null",
        personnages.karolina[0],
        personnages.karolina[0],
        personnages.karolina[0],//165 
        "null",
        personnages.karolina[0],
        personnages.karolina[0],
        "null",
        "null",//170 
        personnages.ellie[0],
        personnages.ellie[0],
        "null",
        personnages.ellie[0],
        personnages.ellie[0],//175 
        personnages.ellie[0],
        "null",
        "null",
        "null",
        "null",//180 
        personnages.raquel[0],
        personnages.raquel[0],
        "null",
        personnages.raquel[0],
        "null",//185 
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],
        personnages.raquel[0],//190 
        personnages.raquel[0],
        "null",
        "null",
        personnages.tadashi[0],
        "null",//195 
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],//200 
        personnages.tadashi[0],
        "null",
        personnages.tadashi[0],
        personnages.tadashi[0],
        personnages.tadashi[0],//205 
        personnages.tadashi[0],
        "null",
        "null",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "null",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "null",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
        ];
    //story[5] === Location
    story[5] = [
        locations.hall1,//0 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//5 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.dorm,//10 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//15 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//20 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//25 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//30 
        locations.dorm,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//35 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//40 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//45 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//50 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//55 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.cafeteria,//60 
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,//65 
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,//70 
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,//75 
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.cafeteria,
        locations.class2,//80 
        locations.class2,
        locations.class2,
        locations.class2,
        locations.class2,
        locations.class2,//85 
        locations.class2,
        locations.class2,
        locations.class2,
        locations.class2,
        locations.class2,//90 
        locations.class2,
        locations.class2,
        locations.hall2,
        locations.hall2,
        locations.hall2,//95 
        locations.hall2,
        locations.hall2,
        locations.hall2,
        locations.hall2,
        locations.hall2,//100 
        locations.hall2,
        locations.hall2,
        locations.hall2,
        locations.hall2,
        locations.hall2,//105 
        locations.hall2,
        locations.hall2,
        locations.hall2,
        locations.class1,
        locations.class1,//110 
        locations.class1,
        locations.class1,
        locations.class1,
        locations.class1,
        locations.class1,//115 
        locations.class1,
        locations.class1,
        locations.class1,
        locations.garden,
        locations.garden,//120 
        locations.garden,
        locations.garden,
        locations.garden,
        locations.garden,
        locations.garden,//125 
        locations.garden,
        locations.garden,
        locations.garden,
        locations.garden,
        locations.garden,//130 
        locations.garden,
        locations.garden,
        locations.garden,
        locations.hall1,
        locations.hall1,//135 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//140 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//145 
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,
        locations.hall1,//150 
        locations.dorm,//151 illustrations
        locations.dorm,//152 illustrations
        locations.dorm,//153 illustrations
        locations.dorm,
        locations.gym,//155 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//160 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//165 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//170 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//175 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//180 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//185 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//190 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//195 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//200 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,
        locations.gym,//205 
        locations.gym,
        locations.gym,
        locations.gym,
        locations.dorm,
        locations.dorm,//210 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//215 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//220 
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,
        locations.dorm,//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
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
        -2,
        -1,//10 
        -1,
        -1,
        -1,
        -5,
        18,//15 
        18,
        18,
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
        -2,
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
        -1,
        -1,//45 
        -1,
        -5,
        -1,
        -1,
        -1,//50 
        -1,
        -1,
        56,
        -1,
        -1,//55 
        -1,
        -1,
        56,
        -2,
        -1,//60 
        -1,
        -1,
        -1,
        -1,
        -1,//65 
        -1,
        -1,
        -1,
        -5,
        70,//70 
        -1,
        -1,
        -1,
        -1,
        -1,//75 
        -1,
        -1,
        -1,
        -2,
        -1,//80 
        -1,
        -1,
        -1,
        -1,
        -5,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -2,
        -1,
        -1,
        -5,//95 
        -1,
        -1,
        100,
        -1,
        100,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -2,
        -1,
        -1,//110 
        -5,
        112,
        112,
        112,
        -1,//115 
        -5,
        -1,
        -2,
        -1,
        -1,//120 
        -1,
        -1,
        -5,
        124,
        124,//125 
        124,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -2,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -2,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        222,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        206,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        206,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        206,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        206,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -10,
        -2,//225 
        -7,//226 Alistair
        -7,//227 Claire
        -7,//228 Ellie
        -7,//229 Karolina
        -7,//230 Neha
        -7,//231 Raquel
        -7,//232 Tadashi
        -7,//233 Tegan
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
        12,
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
        2,
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
        0,
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
        6,
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
        0,
        0,
        4,
        0,//80 
        0,
        0,
        0,
        0,
        0,//85 
        0,
        0,
        0,
        0,
        0,//90 
        0,
        5,
        0,
        0,
        0,//95 
        0,
        0,
        0,
        0,
        0,//100 
        0,
        0,
        0,
        0,
        0,//105 
        0,
        0,
        3,
        0,
        0,//110 
        0,
        0,
        0,
        0,
        0,//115 
        0,
        0,
        9,
        0,
        0,//120 
        0,
        0,
        0,
        0,
        0,//125 
        0,
        0,
        0,
        0,
        0,//130 
        0,
        0,
        2,
        0,
        0,//135 
        0,
        0,
        0,
        0,
        0,//140 
        0,
        0,
        0,
        0,
        0,//145 
        0,
        0,
        0,
        0,
        12,//150 
        0,//151 illustrations
        0,//152 illustrations
        0,//153 illustrations
        0,
        0,//155 
        0,
        0,
        0,
        0,
        0,//160 
        0,
        0,
        0,
        0,
        0,//165 
        0,
        0,
        0,
        0,
        0,//170 
        0,
        0,
        0,
        0,
        0,//175 
        0,
        0,
        0,
        0,
        0,//180 
        0,
        0,
        0,
        0,
        0,//185 
        0,
        0,
        0,
        0,
        0,//190 
        0,
        0,
        0,
        0,
        0,//195 
        0,
        0,
        0,
        0,
        0,//200 
        0,
        0,
        0,
        0,
        0,//205 
        0,
        0,
        0,
        0,
        0,//210 
        0,
        0,
        0,
        0,
        0,//215 
        0,
        0,
        0,
        0,
        0,//220 
        0,
        0,
        0,
        0,
        10,//225 
        0,//226 Alistair
        0,//227 Claire
        0,//228 Ellie
        0,//229 Karolina
        0,//230 Neha
        0,//231 Raquel
        0,//232 Tadashi
        0,//233 Tegan
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
        -1,
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
        -1,
        -1,
        -1,
        -1,//80 
        -1,
        -1,
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
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        -1,
        -1,
        -1,
        -1,
        -1,//115 
        -1,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        -1,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        -1,//226 Alistair
        -1,//227 Claire
        -1,//228 Ellie
        -1,//229 Karolina
        -1,//230 Neha
        -1,//231 Raquel
        -1,//232 Tadashi
        -1,//233 Tegan
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
        -1,
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
        -1,
        -1,
        -1,
        -1,//80 
        -1,
        -1,
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
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        -1,
        -1,
        -1,
        -1,
        -1,//115 
        -1,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        -1,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        -1,//226 Alistair
        -1,//227 Claire
        -1,//228 Ellie
        -1,//229 Karolina
        -1,//230 Neha
        -1,//231 Raquel
        -1,//232 Tadashi
        -1,//233 Tegan
        ];
    //story[10] === Choice 1 Link -> "-1"is no link, otherwise the number represents the array number of the slide
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
        15,
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
        -1,
        -1,//45 
        -1,
        45,
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
        70,
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
        -1,
        -1,
        -1,
        89,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        93,//95 
        -1,
        -1,
        -1,
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        109,
        -1,
        -1,
        -1,
        -1,//115 
        114,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        121,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        -1,//226 Alistair
        -1,//227 Claire
        -1,//228 Ellie
        -1,//229 Karolina
        -1,//230 Neha
        -1,//231 Raquel
        -1,//232 Tadashi
        -1,//233 Tegan
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
        16,
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
        -1,
        -1,//45 
        -1,
        51,
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
        67,
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
        -1,
        -1,
        -1,
        83,//85 
        -1,
        -1,
        -1,
        -1,
        -1,//90 
        -1,
        -1,
        -1,
        -1,
        96,//95 
        -1,
        -1,
        -1,
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        110,
        -1,
        -1,
        -1,
        -1,//115 
        115,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        122,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        -1,//226 Alistair
        -1,//227 Claire
        -1,//228 Ellie
        -1,//229 Karolina
        -1,//230 Neha
        -1,//231 Raquel
        -1,//232 Tadashi
        -1,//233 Tegan
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
        17,
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
        -1,
        -1,//45 
        -1,
        56,
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
        68,
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
        -1,
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
        98,//95 
        -1,
        -1,
        -1,
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        111,
        -1,
        -1,
        -1,
        -1,//115 
        -1,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        123,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        -1,//226 Alistair
        -1,//227 Claire
        -1,//228 Ellie
        -1,//229 Karolina
        -1,//230 Neha
        -1,//231 Raquel
        -1,//232 Tadashi
        -1,//233 Tegan
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
        "New Objective: Go to your dorm and unpack your bags.",
        "null",//10 
        "null",
        "null",
        "null",
        "Gah! You scared me...!",
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
        "New Objective: Explore the school!",
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
        "(Side with Alistair) ",
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
        "...",
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
        "null",
        "null",
        "null",
        "(Leave without saying anything else.)",//85 
        "null",
        "null",
        "null",
        "null",
        "null",//90 
        "null",
        "null",
        "null",
        "null",
        "(Moving as if on auto mode, I took a step back and then used my leg to kick it as hard as I could, back to its owner.)",//95 
        "null",
        "null",
        "null",
        "null",
        "null",//100 
        "null",
        "null",
        "null",
        "null",
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        "null",//110 
        "Robots so… you’re in the Pure and Applied Science department?",
        "null",
        "null",
        "null",
        "null",//115 
        "(Stay and watch)",
        "null",
        "null",
        "null",
        "null",//120 
        "null",
        "null",
        "Oh come on, I doubt that.",
        "null",
        "null",//125 
        "null",
        "null",
        "null",
        "null",
        "null",//130 
        "null",
        "null",
        "Objective Complete: Explore the school!",
        "null",
        "null",//135 
        "null",
        "null",
        "null",
        "null",
        "null",//140 
        "null",
        "null",
        "null",
        "null",
        "null",//145 
        "null",
        "null",
        "null",
        "null",
        "New Objective: Quick! Go back to your dorm and put on your uniform!",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        "null",//155 
        "null",
        "null",
        "null",
        "null",
        "null",//160 
        "null",
        "null",
        "null",
        "null",
        "null",//165 
        "null",
        "null",
        "null",
        "null",
        "null",//170 
        "null",
        "null",
        "null",
        "null",
        "null",//175 
        "null",
        "null",
        "null",
        "null",
        "null",//180 
        "null",
        "null",
        "null",
        "null",
        "null",//185 
        "null",
        "null",
        "null",
        "null",
        "null",//190 
        "null",
        "null",
        "null",
        "null",
        "null",//195 
        "null",
        "null",
        "null",
        "null",
        "null",//200 
        "null",
        "null",
        "null",
        "null",
        "null",//205 
        "null",
        "null",
        "null",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "null",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "Objective Complete: Quick! Go back to your dorm and put on your uniform!",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
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
        "Jesus! Do you just walk into strangers’ rooms like you own the place all the time?!",
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
        "New Objective: Talk to some students.",
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
        "(Side with Tadashi)",
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
        "Get over it, it’s just a shirt.",
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
        "null",
        "null",
        "null",
        "...Are you wearing mismatched socks?",//85 
        "null",
        "null",
        "null",
        "null",
        "null",//90 
        "null",
        "null",
        "null",
        "null",
        "(Startled, I had just enough time to move my hands and catch it.)",//95 
        "null",
        "null",
        "null",
        "null",
        "null",//100 
        "null",
        "null",
        "null",
        "null",
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        "null",//110 
        "A robotics club?! Think it might be possible for me to join?",
        "null",
        "null",
        "null",
        "null",//115 
        "(Say goodbye and leave)",
        "null",
        "null",
        "null",
        "null",//120 
        "null",
        "null",
        "It’s easy to miss you if you squat on a corner like that, it doesn’t mean that you’re unnoticeable, though.",
        "null",
        "null",//125 
        "null",
        "null",
        "null",
        "null",
        "null",//130 
        "null",
        "null",
        "Objective Complete: Talk to some students.",
        "null",
        "null",//135 
        "null",
        "null",
        "null",
        "null",
        "null",//140 
        "null",
        "null",
        "null",
        "null",
        "null",//145 
        "null",
        "null",
        "null",
        "null",
        "New Objective: Go to they gym and take your picture!",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        "null",//155 
        "null",
        "null",
        "null",
        "null",
        "null",//160 
        "null",
        "null",
        "null",
        "null",
        "null",//165 
        "null",
        "null",
        "null",
        "null",
        "null",//170 
        "null",
        "null",
        "null",
        "null",
        "null",//175 
        "null",
        "null",
        "null",
        "null",
        "null",//180 
        "null",
        "null",
        "null",
        "null",
        "null",//185 
        "null",
        "null",
        "null",
        "null",
        "null",//190 
        "null",
        "null",
        "null",
        "null",
        "null",//195 
        "null",
        "null",
        "null",
        "null",
        "null",//200 
        "null",
        "null",
        "null",
        "null",
        "null",//205 
        "null",
        "null",
        "null",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "null",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "New Objective: Go to they gym and take your picture!",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
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
        "W-what? Oh, nothing. I just thought the room would be more… extravagant.",
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
        "Objective Complete: Go to your dorm and unpack your bags.",
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
        "(Leave without saying anything)",
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
        "Why don’t you try washing it with baking soda?",
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
        "null",
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
        "(Quickly, I moved to the side just in time for the ball to go flying past me.)",//95 
        "null",
        "null",
        "null",
        "null",
        "null",//100 
        "null",
        "null",
        "null",
        "null",
        "null",//105 
        "null",
        "null",
        "null",
        "null",
        "null",//110 
        "Robots… yeah, that’s too nerdy for my tastes.",
        "null",
        "null",
        "null",
        "null",//115 
        "null",
        "null",
        "null",
        "null",
        "null",//120 
        "null",
        "null",
        "null",
        "null",
        "null",//125 
        "null",
        "null",
        "null",
        "null",
        "null",//130 
        "null",
        "null",
        "New Objective: Go finish exploring",
        "null",
        "null",//135 
        "null",
        "null",
        "null",
        "null",
        "null",//140 
        "null",
        "null",
        "null",
        "null",
        "null",//145 
        "null",
        "null",
        "null",
        "null",
        "null",//150 
        "null",//151 illustrations
        "null",//152 illustrations
        "null",//153 illustrations
        "null",
        "null",//155 
        "null",
        "null",
        "null",
        "null",
        "null",//160 
        "null",
        "null",
        "null",
        "null",
        "null",//165 
        "null",
        "null",
        "null",
        "null",
        "null",//170 
        "null",
        "null",
        "null",
        "null",
        "null",//175 
        "null",
        "null",
        "null",
        "null",
        "null",//180 
        "null",
        "null",
        "null",
        "null",
        "null",//185 
        "null",
        "null",
        "null",
        "null",
        "null",//190 
        "null",
        "null",
        "null",
        "null",
        "null",//195 
        "null",
        "null",
        "null",
        "null",
        "null",//200 
        "null",
        "null",
        "null",
        "null",
        "null",//205 
        "null",
        "null",
        "null",
        "null",
        "null",//210 
        "null",
        "null",
        "null",
        "null",
        "null",//215 
        "null",
        "null",
        "null",
        "null",
        "null",//220 
        "null",
        "null",
        "null",
        "null",
        "null",//225 
        "null",//226 Alistair
        "null",//227 Claire
        "null",//228 Ellie
        "null",//229 Karolina
        "null",//230 Neha
        "null",//231 Raquel
        "null",//232 Tadashi
        "null",//233 Tegan
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
        -5,
        5,
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
        0,
        0,//45 
        0,
        0,
        5,
        0,
        0,//50 
        0,
        0,
        0,
        -5,
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
        -5,//70 
        5,
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
        0,
        0,
        0,
        0,//85 
        5,
        0,
        0,
        0,
        0,//90 
        0,
        0,
        0,
        0,
        0,//95 
        5,
        0,
        -5,
        0,
        0,//100 
        0,
        0,
        0,
        0,
        0,//105 
        0,
        0,
        0,
        0,
        0,//110 
        0,
        0,
        5,
        -5,
        0,//115 
        0,
        0,
        0,
        0,
        0,//120 
        0,
        0,
        0,
        0,
        5,//125 
        -5,
        0,
        0,
        0,
        0,//130 
        0,
        0,
        0,
        0,
        0,//135 
        0,
        0,
        0,
        0,
        0,//140 
        0,
        0,
        0,
        0,
        0,//145 
        0,
        0,
        0,
        0,
        0,//150 
        0,//151 illustrations
        0,//152 illustrations
        0,//153 illustrations
        0,
        0,//155 
        0,
        0,
        0,
        0,
        0,//160 
        0,
        0,
        0,
        0,
        0,//165 
        0,
        0,
        0,
        0,
        0,//170 
        0,
        0,
        0,
        0,
        0,//175 
        0,
        0,
        0,
        0,
        0,//180 
        0,
        0,
        0,
        0,
        0,//185 
        0,
        0,
        0,
        0,
        0,//190 
        0,
        0,
        0,
        0,
        0,//195 
        0,
        0,
        0,
        0,
        0,//200 
        0,
        0,
        0,
        0,
        0,//205 
        0,
        0,
        0,
        0,
        0,//210 
        0,
        0,
        0,
        0,
        0,//215 
        0,
        0,
        0,
        0,
        0,//220 
        0,
        0,
        0,
        0,
        0,//225 
        0,//226 Alistair
        0,//227 Claire
        0,//228 Ellie
        0,//229 Karolina
        0,//230 Neha
        0,//231 Raquel
        0,//232 Tadashi
        0,//233 Tegan
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
        -5,
        0,
        0,//50 
        0,
        0,
        0,
        5,
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
        0,
        0,
        0,
        0,//80 
        0,
        0,
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
        0,
        0,//100 
        0,
        0,
        0,
        0,
        0,//105 
        0,
        0,
        0,
        0,
        0,//110 
        0,
        0,
        0,
        0,
        0,//115 
        0,
        0,
        0,
        0,
        0,//120 
        0,
        0,
        0,
        0,
        0,//125 
        0,
        0,
        0,
        0,
        0,//130 
        0,
        0,
        0,
        0,
        0,//135 
        0,
        0,
        0,
        0,
        0,//140 
        0,
        0,
        0,
        0,
        0,//145 
        0,
        0,
        0,
        0,
        0,//150 
        0,//151 illustrations
        0,//152 illustrations
        0,//153 illustrations
        0,
        0,//155 
        0,
        0,
        0,
        0,
        0,//160 
        0,
        0,
        0,
        0,
        0,//165 
        0,
        0,
        0,
        0,
        0,//170 
        0,
        0,
        0,
        0,
        0,//175 
        0,
        0,
        0,
        0,
        0,//180 
        0,
        0,
        0,
        0,
        0,//185 
        0,
        0,
        0,
        0,
        0,//190 
        0,
        0,
        0,
        0,
        0,//195 
        0,
        0,
        0,
        0,
        0,//200 
        0,
        0,
        0,
        0,
        0,//205 
        0,
        0,
        0,
        0,
        0,//210 
        0,
        0,
        0,
        0,
        0,//215 
        0,
        0,
        0,
        0,
        0,//220 
        0,
        0,
        0,
        0,
        0,//225 
        0,//226 Alistair
        0,//227 Claire
        0,//228 Ellie
        0,//229 Karolina
        0,//230 Neha
        0,//231 Raquel
        0,//232 Tadashi
        0,//233 Tegan
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
        false,
        false,
        false,
        false,//80 
        false,
        false,
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
        false,
        false,//100 
        false,
        false,
        false,
        false,
        false,//105 
        false,
        false,
        false,
        false,
        false,//110 
        false,
        false,
        false,
        false,
        false,//115 
        false,
        false,
        false,
        false,
        false,//120 
        false,
        false,
        false,
        false,
        false,//125 
        false,
        false,
        false,
        false,
        false,//130 
        false,
        false,
        false,
        false,
        false,//135 
        false,
        false,
        false,
        false,
        false,//140 
        false,
        false,
        false,
        false,
        false,//145 
        false,
        false,
        false,
        false,
        false,//150 
        false,//151 illustrations
        false,//152 illustrations
        false,//153 illustrations
        false,
        false,//155 
        false,
        false,
        false,
        false,
        false,//160 
        false,
        false,
        false,
        false,
        false,//165 
        false,
        false,
        false,
        false,
        false,//170 
        false,
        false,
        false,
        false,
        false,//175 
        false,
        false,
        false,
        false,
        false,//180 
        false,
        false,
        false,
        false,
        false,//185 
        false,
        false,
        false,
        false,
        false,//190 
        false,
        false,
        false,
        false,
        false,//195 
        false,
        false,
        false,
        false,
        false,//200 
        false,
        false,
        false,
        false,
        false,//205 
        false,
        false,
        false,
        false,
        false,//210 
        false,
        false,
        false,
        false,
        false,//215 
        false,
        false,
        false,
        false,
        false,//220 
        false,
        false,
        false,
        false,
        false,//225 
        false,//226 Alistair
        false,//227 Claire
        false,//228 Ellie
        false,//229 Karolina
        false,//230 Neha
        false,//231 Raquel
        false,//232 Tadashi
        false,//233 Tegan
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
        -1,
        -1,
        -1,
        -1,//80 
        -1,
        -1,
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
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        -1,
        -1,
        -1,
        -1,
        -1,//115 
        -1,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        -1,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        -11,//226 Alistair
        -13,//227 Claire
        -14,//228 Ellie
        -15,//229 Karolina
        -16,//230 Neha
        -17,//231 Raquel
        -18,//232 Tadashi
        -19,//233 Tegan
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
        -1,
        -1,
        -1,
        -1,//80 
        -1,
        -1,
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
        -1,
        -1,//100 
        -1,
        -1,
        -1,
        -1,
        -1,//105 
        -1,
        -1,
        -1,
        -1,
        -1,//110 
        -1,
        -1,
        -1,
        -1,
        -1,//115 
        -1,
        -1,
        -1,
        -1,
        -1,//120 
        -1,
        -1,
        -1,
        -1,
        -1,//125 
        -1,
        -1,
        -1,
        -1,
        -1,//130 
        -1,
        -1,
        -1,
        -1,
        -1,//135 
        -1,
        -1,
        -1,
        -1,
        -1,//140 
        -1,
        -1,
        -1,
        -1,
        -1,//145 
        -1,
        -1,
        -1,
        -1,
        -1,//150 
        -1,//151 illustrations
        -1,//152 illustrations
        -1,//153 illustrations
        -1,
        -1,//155 
        -1,
        -1,
        -1,
        -1,
        -1,//160 
        -1,
        -1,
        -1,
        -1,
        -1,//165 
        -1,
        -1,
        -1,
        -1,
        -1,//170 
        -1,
        -1,
        -1,
        -1,
        -1,//175 
        -1,
        -1,
        -1,
        -1,
        -1,//180 
        -1,
        -1,
        -1,
        -1,
        -1,//185 
        -1,
        -1,
        -1,
        -1,
        -1,//190 
        -1,
        -1,
        -1,
        -1,
        -1,//195 
        -1,
        -1,
        -1,
        -1,
        -1,//200 
        -1,
        -1,
        -1,
        -1,
        -1,//205 
        -1,
        -1,
        -1,
        -1,
        -1,//210 
        -1,
        -1,
        -1,
        -1,
        -1,//215 
        -1,
        -1,
        -1,
        -1,
        -1,//220 
        -1,
        -1,
        -1,
        -1,
        -1,//225 
        191,//226 Alistair
        178,//227 Claire
        168,//228 Ellie
        152,//229 Karolina
        152,//230 Neha
        178,//231 Raquel
        191,//232 Tadashi
        168,//233 Tegan
        ];

}



/*
Talk to some students

HALL 1 (Tadashi, Alistair)
CAFETERIA (Neha)
CLASS 2 (Tegan)
HALL 2 (Raquel)
CLASS 1 (Ellie)
GARDEN (Claire)
HALL 1 (Tadashi)

*/

Chapter();//the simple act of appending the .js file will load the chapter into memory