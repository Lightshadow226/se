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
            "Oh-I'm, uh, my name is " + user.scholarname + ".",//20 
            "How did you kno-",
            "(That last bit is not completely wrong.) Well, it's nice to meet you Karolina! I'm assuming those bags in the hallway are yours...is your dorm the one next door?",
            "(Next)",
            "(Her glare intimidated me more that I'd like to admit.) Woah! Okay, look I promise I'm really not going to-",
            "(She held up a finger, stopping me mid-sentence, and I watched as she pulled out a phone and gasped.)",//25 
            "(Her mood had changed almost instantly.)",
            "(And with a flip of her hair, she turned and walked out of the room, a sway in her hips that was hard to miss but could still pass as natural.)",
            "(...)",
            "(I’m going to end up with a huge headache today.)",
            "*sigh* All that aside, I should go and explore this place while I can. Don’t want to get myself lost in the hallways once school starts tomorrow…",//30 
            "null",
            "(Just as I turned the corner into another hallway, I collided head-first into a warm mass and instinctively reached out and grabbed it to steady myself.)",
            "(A mass with green eyes, blond hair, and really muscular arms.)",
            "(An embarrassing squeak left my mouth as I quickly let go of him and took a step back.)",
            "S-Sorry.",//35 
            "Y-Yeah, I’m " + user.scholarname + ". Sorry about almost throwing us both to the ground...",
            "(Next)",
            "(Next)",
            "(I turned to see a tall, lean boy with dark black hair walking briskly towards us.)",
            "(He stopped suddenly upon noticing my presence.)",//40 
            "H-hi I’m " + user.scholarname + "... (I extended my hand for him to shake.)",
            "(His handshake was solid and confident.) The pleasure's all mine. I was just looking around trying to familiarize myself with the layout of this place, but I completely forgot how huge it is.",
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
            "(Next)",//55 
            "(Next)",
            "(Next)",
            "(They started heading in the same direction, Alistair grumbling all the way. Once they we’re at the end of the hallway, Tadashi turned back to look at me.)",
            "(Next)",
            "null",//60 
            "Whoa… is every room in this place incredibly huge?",
            "(For it being such a huge cafeteria there was no one in it apart from myself, a few workers that were behind the counter…)",
            "(...and a girl with short brown hair who was fretting with her blouse.)",
            "(Wait… maybe that’s the girl Karolina was looking for!",
            "(I quickly approached her.)",//65 
            "(She’s too busy dealing with that stain on her shirt to notice me) Um… excuse me?",
            "(She sighed, dropping her hands from their incessant scrubbing against the fabric.)",
            "(Next)",
            "null",
            "…Sorry, you’re right, I’m just a bit stressed today.",//70 
            "It always does the job for me.",
            "No problem!",
            "" + user.scholarname + ", I’m new here. Actually, I ran into a girl called Karolina who was looking for someone with your description. Do you know her?",
            "(She began to quickly clean up the remnants of her breakfast and stood up to throw them out)",
            "N-not that long ago and no, she didn’t say what she--",//75 
            "(The words hadn't even fully left my mouth before she was dashing out of the cafeteria.)",
            "--wanted from... you…",
            "Nice to meet you too.",
            "null",
            "(A boy with short red hair was sitting at one of the desks; working on his laptop. He looked up once he heard me come in.)",//80 
            "(He was mumbling and furiously typing on his keyboard, his eyes red and eyebrows knitted together.)",
            "(After a few seconds of going over the contents of his screen, he pressed the Enter key, an anxious look on his face.)",
            "(Something I couldn't quite decipher changed on his laptop's screen and the boy jumped, letting out a tiny cry of victory.)",
            "(Next)",
            "(I felt like I was intruding and turned my heels to leave the classroom, when the boy noticed me and cleared his throat.)",//85 
            "(His face reddened slightly, and I figured he had not expected anybody to catch him in his moment of glory.)",
            "(Ugh, way to be a creep " + user.scholarname + ".)",
            "Hmm? Oh, ah, no. I’m just looking around the school, I’m [Scholar’s name]. (I quickly moved forward and offered my hand to shake.)",
            "(He shook my hand.)",
            "(I glanced at the screen of his laptop, my curiosity getting the best of me.) What are you working on? If you don’t mind me asking.",//90 
            "(His eyes widened slightly and he quickly minimized his window and replaced it with a generic spreadsheet.)",
            "Oh… (I nodded, focusing my gaze on the floor.)",
            "null",
            "…",
            "Pfft! (I burst out laughing, causing Tegan to jump slightly and look up from his laptop.)",//95 
            "I-I’m sorry… *snort* it took me a moment t-to get that… *laugh* but good one. (I smiled.)",
            "(I’m gonna take a wild guess and say that not a lot of people get that joke.)",
            "Well, it was nice meeting you Tegan… I should get going now.",
            "(Next)",
            "null",//100 
            "(Next)",
            "(I looked up to see a dark skinned girl kicking a soccer ball straight at me.)",
            "null",
            "Not really.",
            "You think so?",//105 
            "(Next)",
            "Y-yeah, that kinda startled me a bit…",
            "(Next)",
            "I don’t do well with people who throw stuff at me. Especially if I don’t know them.",
            "(Next)",//110 
            "" + user.scholarname + ".  Athletics department, then?",
            "(She walked away without waiting for a reply. Soccer ball tucked under her arm.)",
            "…kid?",
            "(Everybody here seems to have things to do later today, I wonder if there’s something I don’t know about...? )",
            "(Anyway, I should go back to exploring the school. )",//115 
            "null",
            "(A loud clunking noise immediately drew my attention to one of the corners of the room, where a girl stood sorting through what appeared to be scraps of metal. She stopped upon noticing me.)",
            "Yeah… I just got here. I’m " + user.scholarname + ".",
            "null",
            "(Next)",//120 
            "(Next)",
            "(Next)",
            "null",
            "(I stayed around for a while longer watching Ellie transform the scraps of metal into… some sort of contraption that I honestly could not make head or tails out of.)",
            "So...any advice for a newbie like me? (She giggled.)",//125 
            "(Next)",
            "(Next)",
            "Haha, thanks for the advice!",
            "I've got to get going, explore this place a little more before classes. Nice to meet you, Ellie!",
            "(Next)",//130 
            "null",
            "Holy… this place has to have every type of plant there is in the world…",
            "(Next)",
            "(I turned around to see a girl with long blonde hair kneeling in front of one of the large rectangular pots.)",
            "Oh! Hi… I didn’t think there was anyone else in here…",//135 
            "null",
            "(Next)",
            "(Next)",
            "(Next)",
            "...Well, I’m kinda new here and I was just looking around the place, sorry if I interrupted you or anything. I’m " + user.scholarname + ", by the way.",//140 
            "(Next)",
            "(A small ringing sound suddenly came from one of Claire’s pockets. Startling us both.)",
            "(She took out her phone from it and took a look at her screen before shutting the alarm off.)",
            "(Next)",
            "Nice meeting you too.",//145 
            "(She stood up to dust herself off and then left the garden with a small wave in my direction)",
            "null",
            "(Next)",
            "T-Tadashi? Wh-?",
            "My-my what?",//150 
            "(Next)",
            "(He sighed, pinching the bridge of his nose between his fingers.)",
            "Um, Tadashi?",
            "(Next)",
            "Wait, I have to take a picture? <em>Now</em>?",//155 
            "But-",
            "(Next)",
            "(Next)",
            "(Next)",
            "(Next)",//160 
            "(Oh my god...) T-Tadashi...",
            "What do you mean by \"ranking\"?",
            "(Next)",
            "Tadashi, I don't mean to interrupt but...",
            "(Next)",//165 
            "(Next)",
            "(Next)",
            "(Next)",
            "(What!? I new I had to work hard to keep my scholarship but...how in the world will I be able to compete with the top twenty best students in the entire <em>country</em>?!)",
            "(Next)",//170 
            "Tadashi, if you don't mind me asking, what ranking are you?",
            "(Are you kidding me?! He says this so nonchalantly too?!) W-Wait...what do you mean I can check your school file. Isn't it private?",
            "R-Reference purposes?! (What does that even mean?! Oh god, this is too much...)",
            "(Next)",
            "(Something about this made me extremely anxious… Everything at Arlington was so meticulously planned… so serious.)",//175 
            "(He turned around and left without giving me a chance to ask him anything else.)",
            "Oh god…",
            "(I’ve spent the whole day moving boxes and running around, and now I’m supposed to take a picture!?)",
            "(And that picture is going to be seen by the entire school...along with nearly every single other piece of information about me.)",
            "(...)",//180 
            "(God, I need a nap to process all of this.)",
            "(But I better go back to my dorm and put my uniform on and freshen up.)",
            "null",
            "(Change Uniform, Options = -10)",//184 -10
            "Scholar: (I took a glance at myself in the mirror and groaned.)",//185 
            "It’ll have to do.",
            "null",
            "Scholar: (As I entered the gym, I saw two others in line to take their picture.)",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "(Next)",//197 Karolina + Neha
            "(Next)",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "(I noticed that the stain on Neha’s shirt had completely disappeared.)",
            "(Neha looked back at me and gave me a small smile.) ",
            "(Her voice was very soft, as if she didn’t want Karolina to hear her.)",
            "You guys haven’t taken your picture either?",
            "(Next)",//205 
            "(She flipped her hair and gestured to herself with a flair of her hand)",
            "...and you, Neha?",
            "(Her monotonous response struck me as odd, but she was smiling at me so I didn’t think much of it.)",
            "(It only took a couple of minutes for the guy to take our picture, and before long, Neha was inviting me to come help them redecorate Karolina’s room.)",//209 No Sprites
            "(Karolina didn’t complain and I think she was glad for the extra set of hands.)",//210 Karolina and Neha's Dorm
            "(Next)",//211 TODO: popup
            "(In the end, I had a lot of fun. Even if I did end up with glue and pieces of wallpaper shoved into unimaginable areas.)",
            "(Next)",//213 Ellie + Tegan
            "Hi Ellie, Tegan. You guys haven’t taken your picture either?",
            "(Next)",//215 
            "(I smiled) Yeah…",
            "(It only took a couple of minutes for the guy to take our picture, and before long, Tegan was asking me if I wanted to go play videogames with Ellie for a while.)",
            "(Tegan blushed at that, looking down at his feet)",
            "No, no, I’d love to!",
            "(It turned out to be a lot of fun. Ellie kept losing no matter how much she tried and her fake ire made both Tegan and me laugh freely.)",//220 Tegan & Tyler's dorm
            "(Next)",//221 TODO: popup
            "(I was surprised yet pleased at how relaxed the pair made me feel. Especially since I had just met them.)",
            "Hey Raquel. Yeah, I took a little too long looking around the school. What about you and Claire?",//223 Claire + Raquel
            "(Next)",
            "(Next)",//225 
            "(Next)",
            "At least we’re all here now!",
            "(They both smiled at me.)",
            "(Next)",
            "(It only took a couple of minutes for the guy to take our picture, and before long, Raquel was asking me to join her and Claire in the garden.)",//230 No Sprites
            "(Turns out Claire was an expert in all things plant related. You’d think hearing about the properties of each individual plant in the garden would be boring, but Claire’s clear enthusiasm and Raquel’s hilarious inputs every now and then made the experience surprisingly fun.)",
            "(Next)",//232 TODO: popup
            "(We ended up talking until night had fallen and it was then that we reluctantly decided that it was time to head back to the dorms.)",
            "(He waved me over as if I didn’t already see them, given that we were the only people here. I smiled)",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "(Despite him glaring at me an hour ago, Tadashi seemed very calm in my presence. It kind of made me feel nervous.)",
            "Hey Tadashi, I hope I didn’t upset you too much today…",
            "(Tadashi grinned.)",
            "(Though his reply was slightly conceited, I was relieved to not have Tadashi pissed at me anymore.)",//240 
            "You were pestering me about being late and yet here you are?",
            "(I cocked my head to the side and raised an eyebrow at them. Tadashi smirked.)",
            "(Next)",
            "(Next)",
            "(I laughed, shaking my head at the both of them.)",//245 
            "(It only took a couple of minutes for the guy to take our picture, and before long, Alistair was inviting me to join his and Tadashi’s study session.)",
            "(Although I’d never think of studying as fun, Alistair and Tadashi’s banter made it entirely worthwhile. Before long, I was up to date with almost everything that I had missed in the school year.)",
            "(Next)",
            "(I seriously think there isn’t a better pair of study-buddies than these two.)",
            "(When I got back to my dorm, I realized how exhausted I am.)",//250 
            "(All I wanted was to go to bed.)",
            "(This really wasn't what I was expecting for my first day here. The amount of information was overwhelming, and the students just seem like they're from a completely different world.)",
            "(And the school's ranking system...I can't believe I have to make it into the top 20 to stay.)",
            "(It's going to be hard. I'm going to have to put in many hours of work per week. No time to fool around.)",
            "(I might not have time to make friends either...)",//255 
            "(The thought made me somewhat sad...)",
            "(But can I really go through the rest of my high school days like this? Slaving away to make it into the silver tier?)",
            "(...)",
            "(I should get some rest. Classes start tomorrow and I need to be ready for them if I am to make it high into the rankings.)",
            "(I took off my uniform and slipped into my pajamas, not even bothering to finish unpacking all of my bags.)",//260 
            "(I yawned as I drew the covers over my body and rested my head on my pillow.)",
            "(For some reason, I couldn’t help but feel that I was forgetting something… something important.)",
            "(But I was too tired to think.)",
            "I’ll figure it out in the morning.",
            "(Next)",//265 Dialogue Box
            "(I woke up suddenly as the sun touched my face.)",
            "Oh my gosh, what time is it?!",
            "(I reached for my phone and my heart nearly stopped when I saw the time.)",
            "Oh no...",
            "(Classes had started five minutes ago.)",//270 
            "(I jumped out of bed and rushed to put on my uniform.)",
            "I can’t freaking believe this!",
            "END CHAPTER 1",
            "null",// 
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
            "Once I was done with him, he regretted it. A lot.",
            "null",//25 
            "Oh god, look at the time! ",
            "I really should be going now, things to do and hearts to break, you know! Oh, and if you happen to see a girl with short brown hair who goes by the name Neha, tell her I’m looking for her. Later~",
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
            "Fine! Whatever, man. It’s not like this is going to completely screw over my whole schedule for the week!",
            "null",
            "null",
            "null",
            "null",//60 
            "null",
            "null",
            "null",
            "null",
            "null",//65 
            "Oh no, you've got to be kidding me!",
            "W-what? Oh! I’m sorry, it’s just-- I just spilled coffee all over my shirt! I can’t--",
            "It’s no use… it’s ruined.",
            "null",
            "Well, <em>excuse me</em> if I seem to care about the money lost with the ruining of this shirt.",//70 
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
            "Let's hope it works this time…",
            "Tegan... I-I’m from the Pure and Applied Sciences department.",
            "Come on, work with me…",
            "Yes!",
            "Now, he owes me big time.",//85 
            "...Can I help you?",
            "null",
            "null",
            "Tegan... I-I’m from the Pure and Applied Sciences department.",
            "null",//90 
            "null",
            "It-it's just some school stuff… w-which, I really should… get back to… I need to finish this before noon. ",
            "null",
            "Yeah, I have another pair just like it.",
            "null",//95 
            "null",
            "...T-Thanks",
            "null",
            "Yeah… you too.",
            "null",//100 
            "Heads up!",
            "null",
            "null",
            "Niiice, you’ve got a good kick there. You play?",
            "You should give it a try then. I mean, if you play as good as you kick…",//105 
            "Totally!",
            "Haha! Well, at least you’ve got nice reflexes!",
            "Sorry ‘bout that, just trying to see if the new kid had some skills.",
            "...You could’ve at least made the attempt to catch it.",
            "...Alright then.",//110 
            "Name’s Raquel and as you might have noticed, soccer’s what I live for.",
            "The one and only. Which reminds me, I don’t have a lot of time to practice today, something important I have to do this afternoon so I really should get going. See you kid!",
            "null",
            "null",
            "null",//115 
            "null",
            "null",
            "Hi! I don’t think I’ve seen you around before. Are you new?",
            "Nice to meet you " + user.scholarname + "! I’m Ellie Collins, president of the robotics club.",
            "Yup. I know having two science departments can be a bit confusing but you’ll get the hang of it.",//120 
            "Haha! I think we’re at club capacity right now but I’ll be sure to let you know if we have space for next year, if you’re still interested.",
            "Maybe you should give things a shot before condemning them based on how they look from the outside…",
            "In any case, I really should get back to finishing this, but you’re welcomed to stick around and watch if you want.",
            "null",
            "null",//125 
            "Well, aside for its prestige, massive funding and crazy amounts of pretentiousness, Arlington Academy is like any other school out there you know?",
            "Be yourself, don't let people intimidate you and if you break any rules, don't get caught!",
            "Oh, and watch out for Coach Davis' gym classes. He's crazy.",
            "You're welcome!",
            "Likewise!",//130 
            "null",
            "null",
            "O-only about a hundred of them actually…",
            "null",
            "null",//135 
            "It’s okay… it’s easy for me to pass unnoticed.",
            "It’s okay. I’m used to it.",
            "...Thank you.",
            "…",
            "null",//140 
            "I-It’s alright, I was just looking through the school’s medical herbs. Pleased to meet you " + user.scholarname + ", I’m Claire.",
            "null",
            "null",
            "Oh my, it's almost time!",
            "I-I have to go now, but it was nice meeting you!",//145 
            "null",
            "null",
            "Hey! " + user.scholarname + "!",
            "null",
            "How long have you been wandering through the halls? Why haven’t you taken your student ID picture at the gymnasium yet?",//150 
            "…",
            "No one told you, of course.",
            "I swear, I sometimes wonder how this school hasn’t gone up in flames yet!",
            "Right, you’re supposed to be at the gym taking your student picture right now.",
            "So run to your room, put on your uniform, then run to the gymnasium and take your picture. Otherwise it’s going to end up being more paperwork for me.",//155 
            "Yes. ",
            "You don’t understand do you? You’re an Arlington student now. ",
            "Your file, your skills and competences… all of this represents Arlington Academy from now on. The administration is going to advertise all of those things to help you succeed. ",
            "That file will be used by the top people of your field. We're talking worldclass masters, universities and companies. It will be the cornerstone of your reputation as someone who represents Arlington Academy and all that it stands for. ",
            "It will be compared with others. It will show your official ranking, your strengths and your weaknesses as well as your academic and professional history. ",//160 
            "It is a comprehensive guide on <em>who you are</em>.",
            "null",
            "...And of course, nobody told you about this either. ",
            "I swear to god, the senior students in charge of showing you around should really step up their game. I can't keep picking up after their sh-",
            "Oh, sorry. I'm just a little stressed out. Well, you see...",//165 
            "At the end of each school year, Arlington Academy gives every student a ranking. This ranking is essentially your position as a student relative to everyone else. They take into account your grades, your extra-curricular activities, your professional work, your skills, the awards you've gotten and all that jazz.",
            "If you make it into the top 50, you're in the Bronze tier. If you make it into the top 20, you're in the Silver tier and if you make it into the top 10, you've reached Gold tier. ",
            "All students aim to reach at least the top 50 as it automatically places you as higher than average. ",
            "However, to keep your scholarship, you will need to make it into the top 20, " + user.scholarname + ".",
            "Being in Gold tier is one of the highest achievements possible here. You will get recruitment offers from many universities and businesses trying to get you into their inner circle. Celebrities and established professionals will want to mentor you. ",//170 
            "It's an elite status granted to only the best of the best.",
            "You can see for yourself by checking my school file. I'm number one.",
            "Oh no, every student and faculty member will have access to your file for reference purposes. So, you better make it good.",
            "You can't screw around with this " + user.scholarname + ". Your file isn't merely a file. It's an integral part of your time here at the Academy.",
            "But to build your file, <em>they need your picture</em>. ",//175 
            "Now hurry up and <em>go</em>.",
            "null",
            "null",
            "null",
            "null",//180 
            "null",
            "null",
            "null",
            "null",//184 -10
            "null",//185 
            "null",
            "null",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "Well look who it is.",//197 Karolina + Neha
            "null",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "null",
            "null",
            "null",
            "null",
            "null",//205 
            "Are you kidding me? I was too busy taking care of my room! It’s still nowhere near done but I needed time to get ready anyway.",
            "It takes time to look this fabulous you know. Not as much as other people though, of course.",
            "null",
            "null",//209 No Sprites
            "null",//210 Karolina and Neha's Dorm
            "Congratulations! You’ve unlocked an illustration! Go to your dorm and click on the book on your desk to check it out.",//211 TODO: popup
            "null",
            "Hey! " + user.scholarname + "!",//213 Ellie + Tegan
            "null",
            "null",//215 
            "That sort of thing happens a lot to the both of us. No biggie! Means we get to hang out a little more with you!",
            "null",
            "Look at that! I thought I’d have to ask " + user.gender + " myself.",
            "null",
            "null",//220 Tegan & Tyler's dorm
            "Pop up: Congratulations! You’ve unlocked an illustration! Go to your dorm and click on the book on your desk to check it out.",//221 TODO: popup
            "null",
            "Hey, look who it is! You taking your picture too, new kid?",//223 Claire + Raquel
            "null",
            "And so the both of us ended up being late.",//225 
            "null",
            "Hey, no! It wasn’t your fault. I’m the one who keeps forgetting this stuff.",
            "null",
            "Exactly.",
            "null",//230 No Sprites
            "null",
            "Congratulations! You’ve unlocked an illustration! Go to your dorm and click on the book on your desk to check it out.",//232 TODO: popup
            "null",
            "" + user.scholarname + "! Over here!",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "null",
            "null",
            "null",
            "null",//240 
            "null",
            "null",
            "null",
            "Hey man, I told you I needed to work out today!",
            "null",//245 
            "null",
            "null",
            "Congratulations! You’ve unlocked an illustration! Go to your dorm and click on the book on your desk to check it out.",
            "null",
            "null",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "The Next Day…",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            personnages.karolina[3],
            personnages.karolina[0],//25 
            personnages.karolina[0],
            personnages.karolina[0],
            "null",
            "null",
            "null",//30 
            "null",
            "null",
            personnages.alistair[0],
            personnages.alistair[0],
            personnages.alistair[0],//35 
            personnages.alistair[1],
            personnages.alistair[0],
            "null",
            "null",
            "null",//40 
            "null",
            "null",
            "null",
            personnages.alistair[5],
            "null",//45 
            personnages.alistair[3],
            personnages.alistair[3],
            personnages.alistair[3],
            personnages.alistair[1],
            "null",//50 
            "null",
            personnages.alistair[0],
            "null",
            personnages.alistair[0],
            "null",//55 
            personnages.alistair[3],
            "null",
            "null",
            "null",
            "null",//60 
            "null",
            "null",
            personnages.neha[3],
            "null",
            "null",//65 
            personnages.neha[3],
            personnages.neha[5],
            personnages.neha[3],
            personnages.neha[3],
            personnages.neha[0],//70 
            personnages.neha[0],
            personnages.neha[0],
            personnages.neha[0],
            personnages.neha[5],
            personnages.neha[0],//75 
            "null",
            "null",
            "null",
            "null",
            personnages.tegan[0],//80 
            personnages.tegan[0],
            personnages.tegan[0],
            personnages.tegan[3],
            personnages.tegan[1],
            personnages.tegan[1],//85 
            personnages.tegan[2],
            personnages.tegan[0],
            personnages.tegan[0],
            personnages.tegan[0],
            personnages.tegan[0],//90 
            personnages.tegan[5],
            personnages.tegan[0],
            personnages.tegan[0],
            personnages.tegan[0],
            personnages.tegan[5],//95 
            personnages.tegan[0],
            personnages.tegan[2],
            personnages.tegan[0],
            "null",
            "null",//100 
            "null",
            personnages.raquel[0],
            personnages.raquel[0],
            personnages.raquel[1],
            personnages.raquel[0],//105 
            personnages.raquel[1],
            personnages.raquel[0],
            personnages.raquel[0],
            personnages.raquel[0],
            personnages.raquel[0],//110 
            personnages.raquel[0],
            personnages.raquel[0],
            "null",
            "null",
            "null",//115 
            "null",
            personnages.ellie[0],
            personnages.ellie[0],
            personnages.ellie[1],
            personnages.ellie[0],//120 
            personnages.ellie[1],
            personnages.ellie[3],
            personnages.ellie[0],
            personnages.ellie[0],
            personnages.ellie[0],//125 
            personnages.ellie[0],
            personnages.ellie[1],
            personnages.ellie[3],
            personnages.ellie[1],
            personnages.ellie[1],//130 
            "null",
            "null",
            "null",
            personnages.claire[0],
            personnages.claire[0],//135 
            personnages.claire[0],
            personnages.claire[0],
            personnages.claire[0],
            personnages.claire[0],
            personnages.claire[0],//140 
            personnages.claire[0],
            personnages.claire[5],
            personnages.claire[5],
            personnages.claire[5],
            personnages.claire[0],//145 
            "null",
            "null",
            "null",
            personnages.tadashi[0],
            personnages.tadashi[3],//150 
            personnages.tadashi[0],
            personnages.tadashi[3],
            personnages.tadashi[4],
            personnages.tadashi[0],
            personnages.tadashi[0],//155 
            personnages.tadashi[0],
            personnages.tadashi[3],
            personnages.tadashi[3],
            personnages.tadashi[0],
            personnages.tadashi[0],//160 
            personnages.tadashi[3],
            personnages.tadashi[0],
            personnages.tadashi[3],
            personnages.tadashi[4],
            personnages.tadashi[0],//165 
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],//170 
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],//175 
            personnages.tadashi[3],
            "null",
            "null",
            "null",
            "null",//180 
            "null",
            "null",
            "null",
            "null",//184 -10
            "null",//185 
            "null",
            "null",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            personnages.karolina[0],//197 Karolina + Neha
            "null",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "null",
            "null",
            "null",
            personnages.karolina[0],
            "null",//205 
            personnages.karolina[3],
            personnages.karolina[1],
            "null",
            "null",//209 No Sprites
            personnages.karolina[1],//210 Karolina and Neha's Dorm
            "null",//211 TODO: popup
            personnages.karolina[1],
            "null",//213 Ellie + Tegan
            personnages.ellie[0],
            "null",//215 
            personnages.ellie[1],
            "null",
            personnages.ellie[1],
            "null",
            personnages.ellie[1],//220 Tegan & Tyler's dorm
            "null",//221 TODO: popup
            personnages.ellie[1],
            personnages.raquel[0],//223 Claire + Raquel
            "null",
            personnages.raquel[0],//225 
            "null",
            personnages.raquel[0],
            personnages.raquel[1],
            personnages.raquel[0],
            "null",//230 No Sprites
            "null",
            "null",//232 TODO: popup
            personnages.raquel[1],
            personnages.alistair[0],//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "null",
            "null",
            "null",
            "null",//240 
            "null",
            "null",
            "null",
            personnages.alistair[3],
            "null",//245 
            personnages.alistair[0],
            personnages.alistair[0],
            "null",
            personnages.alistair[1],
            "null",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "null",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            "null",
            "See you around, newbie!",
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
            "null",
            "null",
            "null",
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
            "null",//184 -10
            "null",//185 
            "null",
            "null",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "null",//197 Karolina + Neha
            "Oh, hi " + user.scholarname + ".",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "null",
            "null",
            "It worked. Thank you.",
            "null",
            "We were-",//205 
            "null",
            "null",
            "I was helping Karolina redecorate.",
            "null",//209 No Sprites
            "null",//210 Karolina and Neha's Dorm
            "null",//211 TODO: popup
            "null",
            "null",//213 Ellie + Tegan
            "null",
            "We… kinda lost track of time.",//215 
            "null",
            "null",
            "null",
            "It’s okay if you don’t want to of course.",
            "null",//220 Tegan & Tyler's dorm
            "null",//221 TODO: popup
            "null",
            "null",//223 Claire + Raquel
            "I knew Raquel would forget so I tried to find her after you and I spoke but I forgot that today was practice day.",
            "null",//225 
            "Sorry…",
            "null",
            "null",
            "null",
            "null",//230 No Sprites
            "null",
            "null",//232 TODO: popup
            "null",
            "null",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "null",
            "null",
            "null",
            "Upset me? That’s funny. I’ve handled bigger sharks at this school. ",//240 
            "Glad you could make it newbie.",
            "null",
            "I spent the whole day working, unlike a certain someone else.",
            "null",
            "Wasn’t talking about you, Al.",//245 
            "null",
            "null",
            "null",
            "null",
            "null",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "null",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            personnages.tadashi[3],//45 
            "null",
            personnages.tadashi[3],
            personnages.tadashi[3],
            "null",
            personnages.tadashi[3],//50 
            personnages.tadashi[0],
            "null",
            "null",
            personnages.tadashi[0],
            personnages.tadashi[0],//55 
            "null",
            personnages.tadashi[0],
            "null",
            personnages.tadashi[0],
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
            "null",
            "null",
            "null",
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
            "null",//184 -10
            "null",//185 
            "null",
            "null",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "null",//197 Karolina + Neha
            personnages.neha[0],
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            personnages.neha[0],
            personnages.neha[1],
            personnages.neha[1],
            personnages.neha[0],
            personnages.neha[0],//205 
            "null",
            "null",
            personnages.neha[1],
            "null",//209 No Sprites
            personnages.neha[1],//210 Karolina and Neha's Dorm
            "null",//211 TODO: popup
            personnages.neha[1],
            "null",//213 Ellie + Tegan
            personnages.tegan[0],
            personnages.tegan[0],//215 
            "null",
            "null",
            "null",
            personnages.tegan[0],
            personnages.tegan[1],//220 Tegan & Tyler's dorm
            "null",//221 TODO: popup
            personnages.tegan[1],
            "null",//223 Claire + Raquel
            personnages.claire[0],
            "null",//225 
            personnages.claire[0],
            "null",
            personnages.claire[1],
            "null",
            "null",//230 No Sprites
            "null",
            "null",//232 TODO: popup
            personnages.claire[1],
            "null",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],
            personnages.tadashi[0],//240 
            personnages.tadashi[0],
            personnages.tadashi[1],
            personnages.tadashi[1],
            "null",
            personnages.tadashi[1],//245 
            personnages.tadashi[0],
            personnages.tadashi[0],
            "null",
            personnages.tadashi[1],
            "null",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "null",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            "null",
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//60 
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
            locations.class2,
            locations.class2,
            locations.class2,//95 
            locations.class2,
            locations.class2,
            locations.class2,
            locations.class2,
            locations.class2,//100 
            locations.hall2,
            locations.hall2,
            locations.hall2,
            locations.hall2,
            locations.hall2,//105 
            locations.hall2,
            locations.hall2,
            locations.hall2,
            locations.hall2,
            locations.hall2,//110 
            locations.hall2,
            locations.hall2,
            locations.hall2,
            locations.hall2,
            locations.hall2,//115 
            locations.hall2,
            locations.class1,
            locations.class1,
            locations.class1,
            locations.class1,//120 
            locations.class1,
            locations.class1,
            locations.class1,
            locations.class1,
            locations.class1,//125 
            locations.class1,
            locations.class1,
            locations.class1,
            locations.class1,
            locations.class1,//130 
            locations.class1,
            locations.garden,
            locations.garden,
            locations.garden,
            locations.garden,//135 
            locations.garden,
            locations.garden,
            locations.garden,
            locations.garden,
            locations.garden,//140 
            locations.garden,
            locations.garden,
            locations.garden,
            locations.garden,
            locations.garden,//145 
            locations.garden,
            locations.garden,
            locations.hall1,
            locations.hall1,
            locations.hall1,//150 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//155 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//160 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//165 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//170 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//175 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.hall1,//180 
            locations.hall1,
            locations.hall1,
            locations.hall1,
            locations.dorm,//184 -10
            locations.dorm,//185 
            locations.dorm,
            locations.dorm,
            locations.gym,
            locations.gym,//189 Karolina
            locations.gym,//190 Neha
            locations.gym,//191 Ellie
            locations.gym,//192 Tegan
            locations.gym,//193 Claire
            locations.gym,//194 Raquel
            locations.gym,//195 Alistair
            locations.gym,//196 Tadashi
            locations.gym,//197 Karolina + Neha
            locations.gym,
            locations.gym,//199 If 71, go to 201
            locations.gym,//200 else, go to 204
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,//205 
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,//209 No Sprites
            locations.dorm,//210 Karolina and Neha's Dorm
            locations.dorm,//211 TODO: popup
            locations.dorm,
            locations.gym,//213 Ellie + Tegan
            locations.gym,
            locations.gym,//215 
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,
            locations.dorm,//220 Tegan & Tyler's dorm
            locations.dorm,//221 TODO: popup
            locations.dorm,
            locations.gym,//223 Claire + Raquel
            locations.gym,
            locations.gym,//225 
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,//230 No Sprites
            locations.garden,
            locations.garden,//232 TODO: popup
            locations.garden,
            locations.gym,//234 Alistair + Tadashi
            locations.gym,//235 go to 237
            locations.gym,//236 go to 241
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,//240 
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,
            locations.gym,//245 
            locations.gym,
            locations.class2,
            locations.class2,
            locations.class2,
            locations.dorm,//250 
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,//255 
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,//260 
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,//265 Dialogue Box
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,
            locations.dorm,//270 
            locations.dorm,
            locations.dorm,
            locations.dorm,
            "null",// 
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
            60,
            -1,
            -1,//55 
            -1,
            -1,
            -1,
            60,
            -2,//60 
            -1,
            -1,
            -1,
            -1,
            -1,//65 
            -1,
            -1,
            -1,
            -5,
            73,//70 
            73,
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
            -1,//85 
            -1,
            -1,
            -1,
            -1,
            -1,//90 
            -1,
            -1,
            -5,
            -1,
            -1,//95 
            -1,
            -1,
            -1,
            100,
            -2,//100 
            -1,
            -1,
            -5,
            -1,
            -1,//105 
            111,
            -1,
            111,
            -1,
            111,//110 
            -1,
            -1,
            -1,
            -1,
            -1,//115 
            -2,
            -1,
            -1,
            -5,
            123,//120 
            123,
            123,
            -5,
            -1,
            -1,//125 
            -1,
            -1,
            -1,
            -1,
            -1,//130 
            -2,
            -1,
            -1,
            -1,
            -1,//135 
            -5,
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
            -2,
            -1,
            -1,
            -1,//150 
            -1,
            -1,
            -1,
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
            -2,
            -1,//184 -10
            -1,//185 
            -1,
            -2,
            -1,
            -7,//189 Karolina
            -7,//190 Neha
            -7,//191 Ellie
            -7,//192 Tegan
            -7,//193 Claire
            -7,//194 Raquel
            -7,//195 Alistair
            -7,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            -6,//199 If 71, go to 201
            -6,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            250,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            250,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            250,
            -1,//234 Alistair + Tadashi
            -6,//235 go to 237
            241,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            250,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            0,
            6,//60 
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
            0,
            0,
            0,
            0,//95 
            0,
            0,
            0,
            0,
            5,//100 
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
            3,
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
            9,
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
            2,
            0,
            0,
            0,//150 
            0,
            0,
            0,
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
            12,
            0,//184 -10
            0,//185 
            0,
            10,
            0,
            0,//189 Karolina
            0,//190 Neha
            0,//191 Ellie
            0,//192 Tegan
            0,//193 Claire
            0,//194 Raquel
            0,//195 Alistair
            0,//196 Tadashi
            0,//197 Karolina + Neha
            0,
            0,//199 If 71, go to 201
            0,//200 else, go to 204
            0,
            0,
            0,
            0,
            0,//205 
            0,
            0,
            0,
            0,//209 No Sprites
            0,//210 Karolina and Neha's Dorm
            0,//211 TODO: popup
            0,
            0,//213 Ellie + Tegan
            0,
            0,//215 
            0,
            0,
            0,
            0,
            0,//220 Tegan & Tyler's dorm
            0,//221 TODO: popup
            0,
            0,//223 Claire + Raquel
            0,
            0,//225 
            0,
            0,
            0,
            0,
            0,//230 No Sprites
            0,
            0,//232 TODO: popup
            0,
            0,//234 Alistair + Tadashi
            0,//235 go to 237
            0,//236 go to 241
            0,
            0,
            0,
            0,//240 
            0,
            0,
            0,
            0,
            0,//245 
            0,
            0,
            0,
            0,
            0,//250 
            0,
            0,
            0,
            0,
            0,//255 
            0,
            0,
            0,
            0,
            0,//260 
            0,
            0,
            0,
            0,
            0,//265 Dialogue Box
            0,
            0,
            0,
            0,
            0,//270 
            0,
            0,
            0,
            0,// 
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            -1,//189 Karolina
            -1,//190 Neha
            -1,//191 Ellie
            -1,//192 Tegan
            -1,//193 Claire
            -1,//194 Raquel
            -1,//195 Alistair
            -1,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            -1,//199 If 71, go to 201
            -1,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            -1,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            -1,//189 Karolina
            -1,//190 Neha
            -1,//191 Ellie
            -1,//192 Tegan
            -1,//193 Claire
            -1,//194 Raquel
            -1,//195 Alistair
            -1,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            -1,//199 If 71, go to 201
            -1,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            -1,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            48,
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
            73,
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
            100,
            -1,
            -1,//95 
            -1,
            -1,
            -1,
            -1,
            -1,//100 
            -1,
            -1,
            104,
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
            120,
            -1,//120 
            -1,
            -1,
            124,
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
            137,
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            -1,//189 Karolina
            -1,//190 Neha
            -1,//191 Ellie
            -1,//192 Tegan
            -1,//193 Claire
            -1,//194 Raquel
            -1,//195 Alistair
            -1,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            -1,//199 If 71, go to 201
            -1,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            -1,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            54,
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
            -1,//85 
            -1,
            -1,
            -1,
            -1,
            -1,//90 
            -1,
            -1,
            94,
            -1,
            -1,//95 
            -1,
            -1,
            -1,
            -1,
            -1,//100 
            -1,
            -1,
            107,
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
            121,
            -1,//120 
            -1,
            -1,
            131,
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
            138,
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            -1,//189 Karolina
            -1,//190 Neha
            -1,//191 Ellie
            -1,//192 Tegan
            -1,//193 Claire
            -1,//194 Raquel
            -1,//195 Alistair
            -1,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            -1,//199 If 71, go to 201
            -1,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            -1,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            60,
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
            71,
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
            109,
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
            122,
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
            139,
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            -1,//189 Karolina
            -1,//190 Neha
            -1,//191 Ellie
            -1,//192 Tegan
            -1,//193 Claire
            -1,//194 Raquel
            -1,//195 Alistair
            -1,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            -1,//199 If 71, go to 201
            -1,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            -1,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            "null",//85 
            "null",
            "null",
            "null",
            "null",
            "null",//90 
            "null",
            "null",
            "(Leave without saying anything else.)",
            "null",
            "null",//95 
            "null",
            "null",
            "null",
            "null",
            "null",//100 
            "null",
            "null",
            "(Moving as if on auto mode, I took a step back and then used my leg to kick it as hard as I could, back to its owner.)",
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
            "Robots so… you’re in the Pure and Applied Science department?",
            "null",//120 
            "null",
            "null",
            "(Stay and watch)",
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
            "Oh come on, I doubt that.",
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
            "Objective Complete: Explore the school!",
            "null",
            "null",
            "null",//150 
            "null",
            "null",
            "null",
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
            "New Objective: Quick! Go back to your dorm and put on your uniform!",
            "null",//184 -10
            "null",//185 
            "null",
            "Objective Complete: Quick! Go back to your dorm and put on your uniform!",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "null",//197 Karolina + Neha
            "null",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "null",
            "null",
            "null",
            "null",
            "null",//205 
            "null",
            "null",
            "null",
            "null",//209 No Sprites
            "null",//210 Karolina and Neha's Dorm
            "null",//211 TODO: popup
            "null",
            "null",//213 Ellie + Tegan
            "null",
            "null",//215 
            "null",
            "null",
            "null",
            "null",
            "null",//220 Tegan & Tyler's dorm
            "null",//221 TODO: popup
            "null",
            "null",//223 Claire + Raquel
            "null",
            "null",//225 
            "null",
            "null",
            "null",
            "null",
            "null",//230 No Sprites
            "null",
            "null",//232 TODO: popup
            "null",
            "null",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "null",
            "null",
            "null",
            "null",//240 
            "null",
            "null",
            "null",
            "null",
            "null",//245 
            "null",
            "null",
            "null",
            "null",
            "Objective Copmlete: Go to they gym and take your picture!",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "null",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            "null",//85 
            "null",
            "null",
            "null",
            "null",
            "null",//90 
            "null",
            "null",
            "...Are you wearing mismatched socks?",
            "null",
            "null",//95 
            "null",
            "null",
            "null",
            "null",
            "null",//100 
            "null",
            "null",
            "(Startled, I had just enough time to move my hands and catch it.)",
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
            "A robotics club?! Think it might be possible for me to join?",
            "null",//120 
            "null",
            "null",
            "(Say goodbye and leave)",
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
            "It’s easy to miss you if you squat on a corner like that, it doesn’t mean that you’re unnoticeable, though.",
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
            "Objective Complete: Talk to some students.",
            "null",
            "null",
            "null",//150 
            "null",
            "null",
            "null",
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
            "null",//184 -10
            "null",//185 
            "null",
            "New Objective: Go to they gym and take your picture!",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "null",//197 Karolina + Neha
            "null",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "null",
            "null",
            "null",
            "null",
            "null",//205 
            "null",
            "null",
            "null",
            "null",//209 No Sprites
            "null",//210 Karolina and Neha's Dorm
            "null",//211 TODO: popup
            "null",
            "null",//213 Ellie + Tegan
            "null",
            "null",//215 
            "null",
            "null",
            "null",
            "null",
            "null",//220 Tegan & Tyler's dorm
            "null",//221 TODO: popup
            "null",
            "null",//223 Claire + Raquel
            "null",
            "null",//225 
            "null",
            "null",
            "null",
            "null",
            "null",//230 No Sprites
            "null",
            "null",//232 TODO: popup
            "null",
            "null",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "null",
            "null",
            "null",
            "null",//240 
            "null",
            "null",
            "null",
            "null",
            "null",//245 
            "null",
            "null",
            "null",
            "null",
            "null",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "null",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            "null",//95 
            "null",
            "null",
            "null",
            "null",
            "null",//100 
            "null",
            "null",
            "(Quickly, I moved to the side just in time for the ball to go flying past me.)",
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
            "Robots… yeah, that’s too nerdy for my tastes.",
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
            "…",
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
            "New Objective: Go finish exploring",
            "null",
            "null",
            "null",//150 
            "null",
            "null",
            "null",
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
            "null",//184 -10
            "null",//185 
            "null",
            "null",
            "null",
            "null",//189 Karolina
            "null",//190 Neha
            "null",//191 Ellie
            "null",//192 Tegan
            "null",//193 Claire
            "null",//194 Raquel
            "null",//195 Alistair
            "null",//196 Tadashi
            "null",//197 Karolina + Neha
            "null",
            "null",//199 If 71, go to 201
            "null",//200 else, go to 204
            "null",
            "null",
            "null",
            "null",
            "null",//205 
            "null",
            "null",
            "null",
            "null",//209 No Sprites
            "null",//210 Karolina and Neha's Dorm
            "null",//211 TODO: popup
            "null",
            "null",//213 Ellie + Tegan
            "null",
            "null",//215 
            "null",
            "null",
            "null",
            "null",
            "null",//220 Tegan & Tyler's dorm
            "null",//221 TODO: popup
            "null",
            "null",//223 Claire + Raquel
            "null",
            "null",//225 
            "null",
            "null",
            "null",
            "null",
            "null",//230 No Sprites
            "null",
            "null",//232 TODO: popup
            "null",
            "null",//234 Alistair + Tadashi
            "null",//235 go to 237
            "null",//236 go to 241
            "null",
            "null",
            "null",
            "null",//240 
            "null",
            "null",
            "null",
            "null",
            "null",//245 
            "null",
            "null",
            "null",
            "null",
            "null",//250 
            "null",
            "null",
            "null",
            "null",
            "null",//255 
            "null",
            "null",
            "null",
            "null",
            "null",//260 
            "null",
            "null",
            "null",
            "null",
            "null",//265 Dialogue Box
            "null",
            "null",
            "null",
            "null",
            "null",//270 
            "null",
            "null",
            "null",
            "null",// 
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
            5,
            0,//105 
            0,
            0,
            0,
            -5,
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
            5,
            -5,
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
            5,
            0,
            -5,
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
            0,
            0,
            0,
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
            0,//184 -10
            0,//185 
            0,
            0,
            0,
            0,//189 Karolina
            0,//190 Neha
            0,//191 Ellie
            0,//192 Tegan
            0,//193 Claire
            0,//194 Raquel
            0,//195 Alistair
            0,//196 Tadashi
            0,//197 Karolina + Neha
            0,
            0,//199 If 71, go to 201
            0,//200 else, go to 204
            0,
            0,
            0,
            0,
            0,//205 
            0,
            0,
            0,
            0,//209 No Sprites
            0,//210 Karolina and Neha's Dorm
            0,//211 TODO: popup
            0,
            0,//213 Ellie + Tegan
            0,
            0,//215 
            0,
            0,
            0,
            0,
            0,//220 Tegan & Tyler's dorm
            0,//221 TODO: popup
            0,
            0,//223 Claire + Raquel
            0,
            0,//225 
            0,
            0,
            0,
            0,
            0,//230 No Sprites
            0,
            0,//232 TODO: popup
            0,
            0,//234 Alistair + Tadashi
            0,//235 go to 237
            0,//236 go to 241
            0,
            0,
            0,
            0,//240 
            0,
            0,
            0,
            0,
            0,//245 
            0,
            0,
            0,
            0,
            0,//250 
            0,
            0,
            0,
            0,
            0,//255 
            0,
            0,
            0,
            0,
            0,//260 
            0,
            0,
            0,
            0,
            0,//265 Dialogue Box
            0,
            0,
            0,
            0,
            0,//270 
            0,
            0,
            0,
            0,// 
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
            0,
            0,
            0,
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
            0,//184 -10
            0,//185 
            0,
            0,
            0,
            0,//189 Karolina
            0,//190 Neha
            0,//191 Ellie
            0,//192 Tegan
            0,//193 Claire
            0,//194 Raquel
            0,//195 Alistair
            0,//196 Tadashi
            0,//197 Karolina + Neha
            0,
            0,//199 If 71, go to 201
            0,//200 else, go to 204
            0,
            0,
            0,
            0,
            0,//205 
            0,
            0,
            0,
            0,//209 No Sprites
            0,//210 Karolina and Neha's Dorm
            0,//211 TODO: popup
            0,
            0,//213 Ellie + Tegan
            0,
            0,//215 
            0,
            0,
            0,
            0,
            0,//220 Tegan & Tyler's dorm
            0,//221 TODO: popup
            0,
            0,//223 Claire + Raquel
            0,
            0,//225 
            0,
            0,
            0,
            0,
            0,//230 No Sprites
            0,
            0,//232 TODO: popup
            0,
            0,//234 Alistair + Tadashi
            0,//235 go to 237
            0,//236 go to 241
            0,
            0,
            0,
            0,//240 
            0,
            0,
            0,
            0,
            0,//245 
            0,
            0,
            0,
            0,
            0,//250 
            0,
            0,
            0,
            0,
            0,//255 
            0,
            0,
            0,
            0,
            0,//260 
            0,
            0,
            0,
            0,
            0,//265 Dialogue Box
            0,
            0,
            0,
            0,
            0,//270 
            0,
            0,
            0,
            0,// 
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
            false,
            false,
            false,
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
            false,//184 -10
            false,//185 
            false,
            false,
            false,
            false,//189 Karolina
            false,//190 Neha
            false,//191 Ellie
            false,//192 Tegan
            false,//193 Claire
            false,//194 Raquel
            false,//195 Alistair
            false,//196 Tadashi
            false,//197 Karolina + Neha
            false,
            false,//199 If 71, go to 201
            false,//200 else, go to 204
            false,
            false,
            false,
            false,
            false,//205 
            false,
            false,
            false,
            false,//209 No Sprites
            false,//210 Karolina and Neha's Dorm
            false,//211 TODO: popup
            false,
            false,//213 Ellie + Tegan
            false,
            false,//215 
            false,
            false,
            false,
            false,
            false,//220 Tegan & Tyler's dorm
            false,//221 TODO: popup
            false,
            false,//223 Claire + Raquel
            false,
            false,//225 
            false,
            false,
            false,
            false,
            false,//230 No Sprites
            false,
            false,//232 TODO: popup
            false,
            false,//234 Alistair + Tadashi
            false,//235 go to 237
            false,//236 go to 241
            false,
            false,
            false,
            false,//240 
            false,
            false,
            false,
            false,
            false,//245 
            false,
            false,
            false,
            false,
            false,//250 
            false,
            false,
            false,
            false,
            false,//255 
            false,
            false,
            false,
            false,
            false,//260 
            false,
            false,
            false,
            false,
            false,//265 Dialogue Box
            false,
            false,
            false,
            false,
            false,//270 
            false,
            false,
            false,
            false,// 
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            -15,//189 Karolina
            -16,//190 Neha
            -14,//191 Ellie
            -19,//192 Tegan
            -13,//193 Claire
            -17,//194 Raquel
            -11,//195 Alistair
            -18,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            71,//199 If 71, go to 201
            -1,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            48,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
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
            -1,
            -1,
            -1,
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
            -1,//184 -10
            -1,//185 
            -1,
            -1,
            -1,
            197,//189 Karolina
            197,//190 Neha
            213,//191 Ellie
            213,//192 Tegan
            -1,//193 Claire
            -1,//194 Raquel
            -1,//195 Alistair
            -1,//196 Tadashi
            -1,//197 Karolina + Neha
            -1,
            201,//199 If 71, go to 201
            204,//200 else, go to 204
            -1,
            -1,
            -1,
            -1,
            -1,//205 
            -1,
            -1,
            -1,
            -1,//209 No Sprites
            -1,//210 Karolina and Neha's Dorm
            -1,//211 TODO: popup
            -1,
            -1,//213 Ellie + Tegan
            -1,
            -1,//215 
            -1,
            -1,
            -1,
            -1,
            -1,//220 Tegan & Tyler's dorm
            -1,//221 TODO: popup
            -1,
            -1,//223 Claire + Raquel
            -1,
            -1,//225 
            -1,
            -1,
            -1,
            -1,
            -1,//230 No Sprites
            -1,
            -1,//232 TODO: popup
            -1,
            -1,//234 Alistair + Tadashi
            237,//235 go to 237
            -1,//236 go to 241
            -1,
            -1,
            -1,
            -1,//240 
            -1,
            -1,
            -1,
            -1,
            -1,//245 
            -1,
            -1,
            -1,
            -1,
            -1,//250 
            -1,
            -1,
            -1,
            -1,
            -1,//255 
            -1,
            -1,
            -1,
            -1,
            -1,//260 
            -1,
            -1,
            -1,
            -1,
            -1,//265 Dialogue Box
            -1,
            -1,
            -1,
            -1,
            -1,//270 
            -1,
            -1,
            -1,
            -1,// 
            ];
    }

Chapter();//the simple act of appending the .js file will load the chapter into memory