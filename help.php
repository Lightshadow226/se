<!DOCTYPE html>
<html>
<?php include_once 'partials/head.php' ?>

<body>

	<?php include_once 'partials/headers.php' ?>

	<div class = "main_content">
        <div class = "card-firstdiv add_padding">
            <h1 class = "add_padding">Help & Frequently Asked Questions</h1>
        </div>
        <div class="card flex-container">
            <div class="tab">
                <button class="tablinks" onclick="openCity(event, 'cat1')" id="defaultOpen" style="border-top-left-radius: 10px;">Player Support & Bugs</button>
                <button class="tablinks" onclick="openCity(event, 'cat2')">Your Account & Game Experience</button>
                <button class="tablinks" onclick="openCity(event, 'cat3')">Energy, Money & Replays</button>
                <button class="tablinks" onclick="openCity(event, 'cat4')">Infinity Meter</button>
                <button class="tablinks" onclick="openCity(event, 'cat5')">Illustrations & Achievements</button>
                <button class="tablinks" onclick="openCity(event, 'cat6')">Arlington Departments</button>
                <button class="tablinks" onclick="openCity(event, 'cat7')">The Future of Sweet Elite</button>
                <button class="tablinks" onclick="openCity(event, 'cat8')" style="border-bottom-left-radius: 10px;">Miscellaneous</button>
            </div>

            <div id="cat1" class="tabcontent">
                <h2>I found a bug! How do I report it to you guys?</h2>
                <p>Contact us at <a href="mailto:support@sweetelitegame.com?Subject=Support" target="_top">support@sweetelitegame.com</a> with <em>as many details as possible</em> on the bug. Screenshots are highly appreciated. We will get to you as soon as we can. Thanks for reporting it! :)</p><br>

                <h2>Some bug is preventing me from advancing through the game! I’m stuck! How can you help me?</h2>
                <p>Try refreshing the page or coming back to the game later in the day. Most of our bugs are due to the servers being slow, which means they are having problems handling a lot of players online at once!</p><br>
                <p>If refreshing or coming back later didn’t help and the bug is still bothering you, contact us at <a href="mailto:support@sweetelitegame.com?Subject=Support" target="_top">support@sweetelitegame.com</a> with <em>as many details as possible</em> on the bug. We will get to you as soon as we can.</p><br>

                <h2>Someone just asked me for my login information, I think it’s a staff member. What do I do?</h2>
                <p>NEVER GIVE YOUR LOGIN INFORMATION TO ANYONE. Even if you think they are a staff member. The staff member trying to help you will always contact you using this email address: <b>support@sweetelitegame.com.</b> ANY OTHER EMAIL is NOT a staff member trying to contact you. They are a sham.</p><br>

                <h2>I think my account has been hacked, what do I do?</h2>
                <p>First of all, never give any of your login information to anybody. Ever. If you suspect that your account has been hacked, change your account email and password. You can do so on your profile page. If this doesn’t solve your problem, email us at <a href="mailto:support@sweetelitegame.com?Subject=Support" target="_top">support@sweetelitegame.com</a>.</p><br>

                <h2>I forgot my password!</h2>
                <p>You can reset your password by email <a href="password_reset.php">right here!</a></p><br>

                <h2>I forgot my username!</h2>
                <p>Email us at <a href="mailto:support@sweetelitegame.com?Subject=Support" target="_top">support@sweetelitegame.com</a> and include as many details about your account as possible</p><br>

                <h2>What browsers do you recommend me playing Sweet Elite on?</h2>
                <p>The absolute best browser to play Sweet Elite on is on Google Chrome. We cannot guarantee that your game experience will be as good on other browsers.</p><br>
                
                <h2>How do I reset my progress in the game? I want to start over.</h2>
                <p>You can do so on your profile page! Just click on "Reset Progress".</p><br>
                <p><b>WARNING: If you reset your progress, you will lose all of your Infinity points, achievements and illustrations!</b></p>
            </div>

            <div id="cat2" class="tabcontent">
                <h2>What is a “Scholar”?</h2>
                <p><em>Scholar</em> is the default name we give to the playable character/main character. You can name your Scholar in Chapter 0!</p><br>

                <h2>Why aren’t there more hairstyles to customize my Scholar with?</h2>
                <p>Because we offer the option of playing as either a boy or a girl, the artists need to work very hard to make illustrations for all 4 feminine hairstyles and 4 male hairstyles. This necessitates a lot of work, and we cannot afford to spend any more time on the hairstyles. Less hairstyles = faster chapter updates!</p><br> 

                <h2>Am I allowed to create multiple accounts?</h2>
                <p>Yes you can, but you will need multiple email addresses. We only allow <em>one</em> account per email address.</p><br>
            </div>

            <div id="cat3" class="tabcontent">
                <h2>What is energy?</h2>
                <p>Energy points are what you need to play Sweet Elite. Each energy point gives you the ability to make <em>one</em> movement throughout the school and explore. You don't need energy points to advance through a dialog once you've initiated it.</p><br>
                <p>Since this is a demo, your current energy is infinite and you can play Sweet Elite over and over again!</p><br>

                <h2>What is money?</h2>
                <p>Money is the in-game currency you will need to buy new clothes and accessories for your Scholar! You will be able to use it in shops and during special occasions.</p><br>
                <p>Since this is a demo, your current money is infinite. You can currently not buy any other clothing items for your Scholar. We will announce the release of the boutique when it is ready!</p><br>

                <h2>How can I get more energy/money?</h2>
                <p>During the demo, all energy and money is infinite, so you don't have to worry about that!</p><br>
                <p>Once we release the full version of the game, we will also explain the different ways you'll be able to get energy and money. Thank you for your patience!<p></br>

                <h2>What are replays and how do they work?</h2>
                <p>Replays give you the ability to re-start your story from a certain chapter and make different choices. For example, if you want to replay Chapter 1, your data about Chapter 0 will be saved, but it will be as if you had never played Chapters 1 and 2. The inifnity points you have accumulated will be reverted. You will, however, keep your unlocked illustrations and achievements!</p><br>
            </div>

            <div id="cat4" class="tabcontent">
                <h2>What is an “Infinity Meter”?</h2>
                <p>The Infinity Meter is Sweet Elite’s version of the Otome “love meter” that shows your relationship with a certain character. The higher the percentage, the more the character likes you! Unlike other meters though, the Infinity Meter is designed to showcase both your friendships and romances with each character!</p><br>

                <h2>Why is it called the Infinity Meter?</h2>
                <p>Because, why not?</p><br>

                <h2>How does the Infinity Meter work?</h2>
                <p>The Infinity Meter allows your Scholar to choose whether they’ll stay friends with a character, or move into the romance route.</p><br>
                <p>You can have two stages in your relationship with a character, and thus, in your Infinity Meter:</p>
                <ul><b>0 to 51 Points:</b> Friendship Stage. Both romance and friendship options raise your meter until 51.</ul>
                <ul><b>52 to 100 Points:</b> Romance stage. You can only get to that stage if you chose the romance option at 51 affinity. If you keep choosing friendship options, your meter will not go up!</ul>
                <br><p>If you want a more in-depth explanation, <a href="http://sweetelite-staff.tumblr.com/post/146021399493/sweet-elites-infinity-meter#notes">Click here!</a></p><br>
                
                <h2>Can I raise my romance and/or Infinity points with more than one character?</h2>
                <p>Of course you can! But at some point, you will need to choose who your ultimate crush is :)</p><br>

                <h2>How do I increase my Infinity with characters?</h2>
                <p>To increase your Infinity points with a character, you will need to choose the right dialog choices when they come up in the game. You will usually need to choose among 3 different choices.</p><br>
                <p>Do not ask any of the staff members for the answers! We won't tell you. Play with friends instead :)<p><br>

                <h2>What are the romance and friendship options?</h2>
                <p>The Infinity Meter allows your Scholar to choose whether they’ll stay friends with a character, or move into the romance route. Depending on if you choose romance or friendship, the dialogs will change and the story will adapt to that choice!</p><br>

                <h2>How will I know when to choose a friendship or romance option?</h2>
                <p>As you're playing, once a character gets to the point in the dialogue that requires a response from the you, these buttons will come up:</p><br>
                <p><img src="_new_images_folder/romancefriendship.jpg"></p><br>
                <p>Before you continue you will have to choose the Friendship (Handshake) or Romantic (Heart). Which ever you choose will then give you three dialogue options to choose from; Positive, negative or neutral options that will effect your affinity with that character as such.</p><br>
                
                <h2>What happens if I have the same amount of infinity with more than one character?</h2>
                <p>When that happens, we will randomize between them to give you your Highest Infinity character.</p><br>
            </div>

            <div id="cat5" class="tabcontent">
                <h2>What are illustrations?</h2>
                <p>An illustration is a moment in your adventure that has been captured in an image the artists drew! You can see your illustrations by going to "My Dorm" and clicking on the book on your desk!</p><br>
                <p>Illustrations can differ greatly. They can be your Scholar hanging out with friends, or a full on date with your crush! You'll just have to wait and see. Every chapter will have at least one illustration available to unlock.</p><br>

                <h2>How do I get illustrations?</h2>
                <p>As you're playing the game, you will need to make the right combinations of choices to get the illustrations. This could be only one dialog choice, or a set of them. Once you unlock an illustration, it is unlocked for life! You can replay chapters in order to collect all illustrations.</p><br>

                <h2>Can I change my Scholar’s appearance in the illustrations?</h2>
                <p>You can do that by going to "My Dorm", clicking on the wardrobe and making your changes. All of your unlocked illustrations will be changed to reflect your new appearance!</p><br>

                <h2>What are achievements?</h2>
                <p>Achievements are mini-goals spread out all over the game. We will not tell you what they are, you will need to unlock them to see what is required to get them. Once you unlock an achievement, it is unlocked for life!</p><br>
                <p>Consider them bonuses as they give you insights on what kind of player you are: some achievements can only be unlocked by choosing very specific choices!</p><br>

                <h2>How do I get achievements?</h2>
                <p>It will depend. Some achievements are unlocked by choosing a certain dialog choice, others take several combinations of choices and others will depend on which ending you will end up having!</p><br>

                <h2>What happens if I unlock every achievement in the game?</h2>
                <p>You can't currently do that during the demo. We have many more planned. But... you'll see ;)</p><br>
            </div>

            <div id="cat6" class="tabcontent">
                <h2>What are the Arlington Academy departments? Does my choice affect the story at any kind?</h2>
                <p>It's a part of the story! As a student at Arlington Academy, your Scholar can choose between seven specializations offered to study in. Once they choose, they will be given a badge corresponding to their chosen department. Each department is different and houses students with specific personalities and skills. It's a way to customize your character!</p><br>
                <p>You can choose any department and this will have no effect on the story and on which character you will be allowed to pursue. You can romance anybody you want regardless of chosen department.</p><br>

                <h2>Can you choose more than one department?</h2>
                <p>No, you may choose only one. If you want to change your department, you need to restart your story on Chapter 0.</p><br>

                <h2>What is included in each department? Where does (insert thing here) fit in?</h2>
                <p>See <a href="http://sweetelite-staff.tumblr.com/post/145279114103/the-arlington-academy-departments-faq#notes">this post</a> for a rundown! If you don’t see what you want in this list, <a href="http://sweetelite-staff.tumblr.com/post/145815292883/about-arlington-academy#notes">this post</a> will most likely explain why.</p><br>
            </div>

            <div id="cat7" class="tabcontent">
                <h2>What is the full version of the game? Won’t it be like this demo?</h2>
                <p>The full version of the game is the more "complete" version of Sweet Elite that is going to be released later during the year! It will include a city map and a boutique, as well as mini-games and paying options to get energy and money.</p><br>
                <p>The full version will be very similar to the demo. The game itself will not change. Once we release the full version, you will not longer have infinite energy and money.</p><br>
                <p>You will be able to keep the account you've created for the demo!</p><br>

                <h2>Will I have to pay for the full version?</h2>
                <p>No, you will be able to keep playing the game for free, but you will no longer have infinite money and energy. We will give you free alternatives to get them as well as paying ones. We do need to make money to grow Sweet Elite and support ourselves.</p><br>
                
                <h2>Will you include more clothing items and a clothing shop in the full version?</h2>
                <p>Yes!</p><br>
                
                <h2>Will we be able to buy wigs for our Scholar?</h2>
                <p>Yes!</p><br>
                
                <h2>What about mini-games?</h2>
                <p>There will be mini-games! But again, since they have a specific purpose, we will not reveal anything about them until they are ready.</p><br>

                <h2>Are you guys going to release a mobile app?</h2>
                <p>Yes, that's the plan! The mobile release will be after the full version release.</p><br>
                
                <h2>Will the game be available in multiple languages? Will you need translators?</h2>
                <p>We’re planning on releasing versions of the game in other languages but that’s a long-term goal. Our focus is currently to finish the English version first. We cannot say whether or not we’ll need translators. If we do, we will announce it when it’s time. Do NOT ask us if we want help to translate the game before we make that announcement.</p><br>
                
                <h2>Are you guys going to include music and/or sound effects in the game?</h2>
                <p>Music and sound effects are low priority right now, but if we do get the resources and skills to implement those, we will definitely do it! If you want to apply as a musician, <a href="mailto:contact@sweetelitegame.com?Subject=Business%20Inquiry" target="_top">contact us here!</a></p><br> 

                <h2>Will you need voice actors?</h2>
                <p>No, we will not be needing voice actors for now. Voicing the characters might happen in the future once we’re fully established, but I would not put it in my list of priorities.</p><br>

                <h2>When will the next chapter be released? How frequently do you plan on releasing them?</h2>
                <p>Please do not ask us when the next chapter release will be. We will announce it when it is ready. For now, we do not have a regular update schedule. Keep in mind that we are a team of volunteers, some of us have full-time jobs and cannot afford to work on Sweet Elite non-stop. The artists need time to draw your clothing items and illustrations and programmers need time to implement the new chapters properly.</p><br>
                
                <h2>Will there be a forum for the players on the website?</h2>
                <p>No. They’re hard to manage. Other games like My Candy Love have a big team of game developers and managers and they still struggle to keep things calm sometimes. We’re barely 10 people and we already have our hands full with producing in-game content. A forum is simply not manageable with our resources. We’d much rather spend our time working on the next chapter and releasing it early than to spend time managing a forum.</p><br>
                
                <h2>Are you guys planning on releasing merchandise I can buy? </h2>
                <p>Yes! It is still in development, but we will release them as they are ready in our shop. Keep your eye out for them!</p><br>

                <h2>How can I donate money to support you guys?</h2>
                <p>You're awesome for wanting to help us, but we're not accepting money right now. Later, however, we will offer merchandise and other products for all of you to enjoy. Save your money for those!</p><br>

                <h2>Are we allowed to pitch in ideas for datable characters?</h2>
                <p>No. Ten datable characters is enough work as it is.</p><br>

                <h2>Can I date Arlington Academy's teachers?</h2>
                <p>No, this will never be an option on this website. Scholar is a minor.</p><br>

                <h2>Will this game be 18+ ?</h2>
                <p>No. We are keeping this game around 14+. No sex scenes or extreme gore/violence will be included.</p><br> 
            </div>

            <div id="cat8" class="tabcontent">
                <h2>You copied Mystic Messenger’s 707. </h2>
                <p>Listen, we get it. They look similar. But no, we did not copy 707. Read about it <a href="http://sweetelite-staff.tumblr.com/post/170126706338/not-to-be-rude-but-you-literally-ripped-off-707#notes">here.</a></p><br>

                <h2>Can I make a Sweet Elite fan blog? Fan art? Fan fiction?Can I post my walkthroughs and guides of the episodes?</h2>
                <p>Yes, yes, yes and yes! Of course you can do these things! :)</p><br>

                <h2>Who is the Staff’s favorite character?</h2>
                <p>We can't choose! They're all awesome in their own way.</p><br>

                <h2>What timeline does the game take place in? In the past? The future?</h2>
                <p>Sweet Elite’s event will take place in the near future, with the start of the timeline being marked as September 20XX.</p><br>
            </div>

        </div>
	</div>

    <?php include_once 'partials/footers.php' ?>

</body>

<script>
function openCity(evt, cityName)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>


</html>

