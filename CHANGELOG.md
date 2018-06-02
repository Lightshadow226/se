`Important: put more than 2 spaces at the end of a line if you want a line break`       
`Two tabs should work`

# Version 1.14.3 (Minor Fixes, Google Ads)
## Fixed
- `googleAds.php`: the numbers are correct now
- `all other files`
    - changed user from root to Serena
    - made small fixes to chapter 2
    - fixed the department form (was not using the right parameters)


# Version 1.14.2 (Major Bug Fix - Saving & Loading)
## Fixed
- `gameengine.js` `variables.js`
    - fixed the -11 option (look at past chapters)
    - it was saving the wrong chapter
    - it weas never swapping back
- `variables.js`    `library.js`    `chapter0.js`   `chapter1.js`   `chapter2.js`
    - Minor changes (renamed to user.lastChapterPlayed)
- `chapter2.js/xlsx`: minor changes


# Version 1.14.1 (Shop and Help/Faq Pages)
## Added (Affinity Wiping)
- `help.php` `shop.php` `headers.php` `footers.php` `se-faq.css`
    - added help.php and shop.php
    - updated footer and header to reflect those pages


# Version 1.14.0 (Affinity Wiping & In-game outfits)
## Added (Affinity Wiping)
- `gameboot.js`
    - added saving of affinity one the game.php page
    - when we restart a chapter, it wipes all subsequent chapters

## Added (Outfits)
- `gameengine.js` `chapter1.js/xlsx` `chapter2.js/xlsx`
    - added option -14: in-game outfits
    - it works in sync with the database
    - TODO: make the underwear *pants0.png*
- `variables.js`
    - added the outfit constants
- `dorm.js`
    - added proper highlighting

## Changed
- `chapter0.js` `chapter1.js` `chapter2.js`
    - removed useless code
- `library.js`
    - modified wipeCurrentChapter to display more in the console.log
    - removed useless code
    - moved the function getNumber() from *dorm.js* to *library.js*, because it is now used in *gameengine.js*

# Version 1.13.0 (Completed Dorm)
## Changed
- `profile.php`
    - put back updateGameBar()
- `headers.php`
    - highlighted "My Dorm" when we are on the illustration/achievements page
- `dorm.js` `se-dorm.css`
    - selecting an outfit now unequips pants
    - we cannot equip pants when an outfit is equipped
    - now the category is highlighted when we click on it
    - the sprite has a minimum width so that the transition is more smooth
- `character_small_portrait.php`
    - the image now takes the same pictures as the normal sprite
    - it resizes the clothes to fit the image
    - **TODO: HOLY SHIT we can actually specify a width and height and use EXACTLY the same images!!!**
- `scholar_sprite.php`
    - added shirt, pants and shoes
    - optimized the file
- `imageGenerator.php`
    - optimized THE SHIT out of the page


# Version 1.12.2 (Aesthetic Fixes for Images for Illustration Generator)
## Changed
- `new_images_folder`
    - Adjusted issues that the artists made when drawing the art (aka "Michael Jackson")
    - Illustrations are now much more pleasing to the eye and have less artistic mistakes

# Version 1.12.1 (Images for Illustration Generator)
## Changed
- `new_images_folder` `imageGenerator.php`
    -Added all modifications for images for the illustrations
    -Tweaked colors in imageGenerator.php so that it looks pretty no matter which combination the player chooses


# Version 1.12.0 (Dorm Customize your appearance)
## Changed
- `dorm.js` `se-dorm.css`
    - optimized the dorm engine
    - added shirts and pants
    - improved design
- `library.js`  `variales.js`   `push_variables.js`   `get_variables.js`
    - changed the saving and loading of db variables
    - now it saves and loads all the variables from the scholarinfo table


# Version 1.11.1 (Greyscale images + Chapters 1 and 2 Bug Fixes)
## Modified
- `chapter2.xlsx` `chapter1.xlsx`
    - Bug fixes suggested by the betas, endless loops, etc.
- `new_images_folder`
    - Modified the illustration images to make them greyscaled
    - Added more images for the dorm dollmaker


# Version 1.11.0 (Illustrations Optimization)
## Optimized
- `illustrationX.php`
    - optimized (the memory usage...?)
    - further optimization will be required

## Added
- `generateGameContainer.php`
    - placed the progress and objectives side by side
    - added a slide counter

## Fixed
- `illustration_achievements.php`   `library.js`
    - now the images only appear when fully loaded
- `googleAds.php`: updated
- `chapter1.xlsx/js`: small changes
- `chapter2.xlsx/js`: fixed critical issue (nehaDorm)


# Version 1.10.4 (Registration System Fixes and Chapter 2 Fixes)
## Modified
- `chapter2.xlsx`
    - Bug fixes suggested by the betas
- `activate.php` `password_reset.php` `registration_succesful.php` `parseSignup.php`
    - Fixed bug that would not let the user activate by email.
    - Added relevant sql scripts in signup script.


# Version 1.10.3 (Chapter 0 & 1 Beta Fixes)
## Modified
- `chapter1.xlsx`
    - Grammar changes suggested by the betas
- `gameengine.js` `variables.js` `chapter1.js3
    - added option -13 to game engine
    - (GHOST SLIDE - directly go to landing slide)

# Version 1.10.2 (Optimization - Saving IsVisited)
## Modified
- `variables.js`        `save_is_visited.php`
    - now we're saving only slides that have to be saved
- `library.js`
    - removed obnoxious console logs
- `chapter0.xlsx`  `chapter1.xlsx`
    - Added one line in the MySQL generation code

## Database
- `users.sql`
    - Updated Database
    - there were slides missing in chapter 1


# Version 1.10.1 (Affinity Fix)
## Modified
- `gameengine.js`   `library.js`
    - fixed the affinity bug
    - now, we can save negative affinities in the DB, but the lowest that can be seen is 0
    - we might have to force a value of 0 in the future, when say:
        - we have been mean to Karolina
        - thus we're at -50 at chapter 6
        - we decide to be nice to her
        - it will take a fuckton of time to win her back and to even see a change


# Version 1.10.0 (Illustrations and Achievement DB Tables)
## Added
- `illustrations_achievements.php`
    - added a loader for all the images
    - added locked vs unlocked functionality
- `library.js`  `se-loaders.css`
    - added a loader that automatically deletes itself once the parent loads
    - (the code is a bit weird, but it works in very specific situations)
    - (be alert when using it)

## Modified
- `saveachievements.php`    `loadachievements.js`       `library.js`
    - wrote the scripts to load and save achievements and illustrations
- `gameengine.js`
    - included the script to test for achievements and illustrations on each click
- `users.sql`
    - Updated Database


# Version 1.9.1 (Achievement Images and Excel Files)
## Modified
- `chapter0.xlsx`  `chapter1.xlsx`
    - Small changes to excel files

- `Achievement images`
    - Small tweaks to achievement images

# Version 1.9.0 (Illustration Generator)
## Added
- `illustration_achivements.php`    `illustration_achivements.js`
    - replaced the old images by actual generated images
    - TODO: make the images have the same width (as if there's always 4 images)
- `illustrationGenerator.php`
    - created a file to generate an image based on the chapter and the illustration number
- `illustrationX.php`
    - chapter 1:
        - illustration 1
        - illustration 2
        - illustration 3
        - illustration 4
    - chapter 2:
        - illustration 1
        - illustration 2
- `images`
    - added all the images for the illustration generator
    - made sure all the names were correct

## Changed
- `dorm.css`
    - added some box-shadow to the choices in the customize your character form


# Version 1.8.5 (All Achievements)
## Added
- `illustrations_achievements.php`      `illustrations_achievements.js`     `se-illustrations_achievements.css`
    - better buttons
    - added DB_Handle
    - changed the appearance of the achievements
    - added the code to determine whether the achievement is unlocked or not

## Fixed
- `library.js`
    - issue: saveVariables() did not change the values of oldUser
- `relationships.js`
    - better buttons
- `variables.js`
    - optimized loadIsVisited()
- `parents.php`
    - aligned the text to the left


# Version 1.8.4 (Achievements & Wardrobe Images + Small Fixes)
## Added
- `_new_images_folder`
    - new achievement images
    - new wardrobe images
    - some outfit images (still need to do the chapter 2 outfits)

## Fixed
- `index.php`
    - Changed the chapter thumbnails to the new ones
- `registration_successful.php`
    - Added cute message
- `signup.php`
    - Added message + cosmetic fix


# Version 1.8.3 (popups, different chapter isVisited)
## Added
- `variables.js`
    - isVisited of a different chapter
- `gameengine.js`
    - choice -11: isVisited of a different chapter
    - choice -15: popups ("Congratulations")

## Fixed
- `chapter1.js`  `chapter1.xlsx`
    - small fixes
- `chapter2.js`  `chapter2.xlsx`
    - small fixes


# Version 1.8.2 (Ch. 0, 1 & 2 fixes)
## Fixed
- `gameengine.js`
    - issue fixed: department form didn't work as intended
- `library.js`
    - made better console.log of affinity reversion (in wipe chapter)
- `chapter1.js`  `chapter1.xlsx`
    - small fixes
    - changed formulas in the excel
- `chapter2.js`  `chapter2.xlsx`
    - small fixes
    - changed formulas in the excel
    - changed the conditional formatting

## Added
- `gameengine.js`
    - added option -14: choose your uniform
- `images`
    - added the special backgrounds


# Version 1.8.1 (Ch. 1 & 2 fixes)
## Fixed
- `gameengine.js`
    - issue: when there are 2 choices and there were 3 choices previously in the game, choice A and B are overlapping
    - (choice A was at the right place, but choice B didn't move)
    - fix: put choice B at the bottom
- `variables.js`
    - issue: when the affinity went up/down, the affinity was saved in the DB, but in the next slide, the affinity went back down/up as if nothing happened
    - fix: the function resetOldUserValues() inverted the variables (typo)
- `CSS`
    - changed the width of the page
    - was 80%, now 71%
    - the website looks better when it's more narrow
    - the game plays better as well
    - a search with 71% will only produce 3 results, thus it's easier to find
- `chapter2.js`  `chapter2.xlsx`
    - small fixes
- `users.sql`
    - Updated Database


# Version 1.8.0 (Ch. 0 & 2 Objectives)
## Fixed
- `chapter0.js`  `chapter0.xlsx`
    - added objectives to Ch. 0
- `chapter2.js`  `chapter2.xlsx`
    - added objectives to Ch. 2

## Added
- `sprite proportions`      `library.js`        `variables.js`
    - added the proportions for Mrs. Rodriguez (Math Teacher)
    - added the teacher's variables
    - TODO: get more expressions for all characters


# Version 1.7.7 (Ch. 1 Objectives)
## Fixed
- `headers.php`
    - placed the jquery in the <head> tag so that profile can load 
- `chapter1.js`  `chapter1.xlsx`
    - added objectives to Ch. 1
    - TODO: the same for the other 2 chapters
- `chapter2.js`  `chapter2.xlsx`
    - Minor fixes to chapter 2 (in excel)
- `sprite proportions`
    - fixed the proportions for Lady Arlington (she only has 1 expression: base)
    - TODO: get more expressions for all characters
- `se-game.css`
    - placed the text bubbles in a more natural way
- `library.js`  `generateGameContainer.php`
    - remade the objectives, progress and characters in the game
    - The objectives work as intended for ch. 1
    - ch. 0 and 2 are not adjusted yet in their excel files


# Version 1.7.6 (Chapter 1 Issues, Sprite Proportions)
## Fixed
- `gameengine.js`
    - issue: 2 choices were not displaying properly (overlapping choices)
    - fixed this issue
- `sprite proportions`
    - fixed the proportions for all main 10 characters
    - added tegan's sprites
- `library.js`
    - removed unused, commented code
    - relocated get_button_href() from `gameboot.js`
- `load_is_visited.php`     `save_is_visited.php`
    - issue: chapter 1 and 2 were only saving for 103 slides
    - saving and loading now works for any amount of slides and all chapters
- `index.php`   `index.js`
    - issue: there was an error generated by the carrousel when logged on
    - fix: relocated the carousel script
- `chapter2.js`  `chapter2.xlsx`
    - Debug/Audit of chapter 2 in excel

## Added
- `users.sql`
    - Updated Database


# Version 1.7.5 (Chapter 2 Excel)
## Changed
- `chapter2.js`  `chapter2.xlsx`
    - Debug/Audit of chapter 2 in excel
    - TODO: Chapter 2 Issues (Google Doc)


# Version 1.7.4 (Chapter 2 Excel)
## Changed
- `chapter2.js`  `chapter2.xlsx`
    - Finished chapter 2 in excel (100% done)
    - TODO: There are still many bugs to debug
- `gameengine.js`
    - option == -8
        - affect the affinity of a character without displaying it
        > then goto next slide
        * GHOST SLIDE
    - option == -11
        - look at a slide from a previous chapter (same as -7)
        > then go to current chapter landing slide
        * GHOST SLIDE
- `chapter1.js`
    - fixed the problem of slide 274
    - issue: there was one too many slides
    - this was causing a slide with "null" values all across


# Version 1.7.3 (Chapter 1 Excel & Debug)
## Changed
- `chapter1.js`  `chapter1.xlsx`
    - updated chapter 1
    - fixed errors
    - see todo on google drive
- `load_is_visited.php`     `save_is_visited.php`       `variables.js`
    - Now it loads and saves any chapter number
    - there are still some bugs
    - TODO: make sure that the chapter size is the right one across all 4 functions
        - PHP load
        - PHP save
        - JS load
        - JS save

- `images`
    - created files to make up for missing sprites
    - TODO: get all the correct sprites for all characters

- `library.js`      `generateGameContainer.php`     `headers.php`
    - made debugging a bit better


# Version 1.7.2 (Chapter 2)
## Added
- `chapter2.js`  `chapter2.xlsx`
    - Drafted chapter 2 in excel (50% done)
    - TODO: There are many bugs...


# Version 1.7.1 (Successful registration page)
## Added
- `registration_successful.php`
    - added a new page to confirm the registration

## Changed
- `parseSignup.php`
    - commented the previous confirmation
    - added a link to redirect to the new page


# Version 1.7.0 (Chapter 1)
## Added
-  `chapter1.js`  `chapter1.xlsx`
    - Drafted chapter 1 in excel
    - we will need to review every slide one after the other

## Changed
- `index.php`   `se-index.css`
    - changed class "active" to "dot-active" to be more accurate
- `variables.js`
    - changed "Serena" to "serena"
    - this was causing some issues


# Version 1.6.4 (Departments Carousel on index.php)
## Added
-  `index.php`  `se-stylesheet.css`   `se-index.css`
    - Added the departments carousel
    - Added the css for the departments carousel in se-index.css
    - Small fixes for spelling and grammar
    - Slight change in design for <i> and <h5>
    - Added relevant images in new images folder


# Version 1.6.3 (Amendment of v1.6.2 - Saving modified variables only)
## Changed
-  `variables.js`
    - put back the values of x as they should be
    - user.karolina etc. are not used
        - however, oldUser.karolina is used
        - we use the character's affinity directly, since it's already built in
        - we could find a way to change it to require 2 variables instead of 3, but it doesn't change performance at all
        - NOT A BIG DEAL
    - changed chapter_size so that it yields the proper amount of slides
    - I was having fun, so it can tell whether you are saving 1 variable or many variables, and it will write it correctly in the console log

-  `library.js`
    - All the saving functions are here now
    - put back all the saving in pushVariablesToDB(); (no more subfunctions of one line)
    - modified saveVariables() so only save the prescribed variables if they require saving (A.K.A. if they were modified during the session)
    - created a function hasToBeSaved() that determines whether a variable has been modified since the loading of the page
        - returns true or false
        - affinities are determined in this function as well, although through a slightly different approach
        - affinities compare [karolina.affinity to oldUser.karolina] rather than [user.karolina to oldUser.karolina]

- `gameengine.js`
    - put back pushVariablesToDB(); everywhere

# Version 1.6.2 (Optimisation)
## Changed
-  `variables.js`
    - changed the definition of "x" and "user"
    - changed the function pullVariablesFromDB so it would change "user"'s affinity and not each of the
    character's affinities individually
    - added a variable "oldUser"
    - created an "initialiseOldUser" function that pulls the old user's variables from the database (as an 
    element of comparison)
    - created a "saveGameVariables" function that compares each "user" and "oldUser" variable and calls
    "saveVariable" when there's a difference between both variables
- `gameengine.js`
    - calling "initialiseOldUser" in the beginning of each "refreshInterface" 
    - calling "saveGameVariables" at the end of each "refreshInterface"
    - deleting calls to "pushVariablesToDB" as it became obsolete.
    

# Version 1.6.1 (Bug fixes)
## Added
- `push_variables.php`  `variables.js`
    - nbreplays to the list of variables that can be pulled and pushed
    - prepared the scholarinfo JS array for future DB manipulations (not present in the php file)
    
## Fixed
- `chapter0.php`
    - issue: the footer was not the correct width (it was too narrow)
    - solution: there was a missing </div> at the end of the DB_handle
- `chapter1.php`
    - issue: the header was not there and it was causing multiple bugs
    - solution: added the headers php include_once
- `se-game.css`         `chapter0.php`
    - issue: the background image was not the correct proportions, the image was streched vertically
    - solution: #game_frame was in flex mode

## Deleted
- `relationships.php`   `illustrations_achievements.php`
    - deleted the jQuery include on those pages
    - jQuery is already included in the headers
    - we should also include variables.js and library.js in the headers

# Version 1.6.0 (Major changes to saving to the DB)
## Changed
- `push_variables.php`
    - fixed the file
    - now the file is less than 100 lines instead of 246
    - the file is optimized and works when any variables are posted
- `variables.js`
    - modified pushVariablesToDB()
    - created functions to break down saving variables by functions
    - now everything passes through the function saveVariables()
    - saveVariables() is fully optimized, and free of bugs
    - we might have to create another JS file to handle all the DB related content

# Version 1.5.19 (Optimization of saving to DB)
## Added
- `variables.js`        `library.js`
    - added a functionality to save specific variables
    - saveVariables(user.username, user.energy);
    - we can list as many variables as we want

## Changed
- `push_variables.php`
    - there were mismatching queries
    - money was never saved because it was using $sqlQuery2 instead of 3
    - all numbers were removed because they are all independently isolated in their own try/catch loops

- `chapter0.js`         `chapter1.js`
    - changed pushVariablesToDB() for saveVariables(user.lastChapterPlayed);
    - much more efficient
    - it saves one variable instead of all of them

- `index.php`           `charactersmeet.js`
    - included a try/catch to make sure no error messages are displayed in the console when logged in
    - essence, this doesn't change anything

- `gameengine.js`
    - TODO:  Write a function to push all variables modified in the gameengine loop
    - changed pushVariablesToDB() to saveVariables() where possible


# Version 1.5.18 (Beta fixes)
- `chapter0.php`
- `chapter1.php`
    - design of logged off game


# Version 1.5.17 (Appearance changes)
##Changed
- `activate.php`
    - redesign of the email confirmation page
- `profile.php`
    - redesign of the profile page when logged off
- `game.php`
    - redesign of the game page when logged off


# Version 1.5.16 (Todo list)
## Changed
- `todo.md`
    - changed the entire list
    - rearranged the order in terms of files, not of importance
    - structure is still subject to change


# Version 1.5.15 (Beta Fixes - Small Changes)
## Changed
- `profile.php`
    - fixed the order of the divs so that the offline and online versions are both working as they should
- `headers.php`
    - changed the "Signup" to "signup"
- `users.sql`
    - updated the user database again
- `gameengine.js`
    - fixed the write your name form of slide 49
    - now it works properly and every key prints a log in the developper console
- `library.js`
    - the debugging tool removes the forms
- `signup.php`
    - "Log In" instead of "Login"
- `parseSignup.php`
    - changed the way a user row is created
    - now it is created much more efficiently


# Version 1.5.14 (Beta Fixes - Spelling, Small Bugs and School Files)
## Changed
- `multiple files`
    - Spelling and Grammar fixes
    - index.php, about.php, variables.js, parents.php
- `School Files`
    - Added updates images for the school files.


# Version 1.5.13 (Design changes)
## Added
- `headers.php`
    - added "replays" at the top of the purple bar
    - moved the "Welcome Back!" to the left of the bar
    - moved the "Login" to the right of the bar
    - TODO: we can put something like "help" next to the logout
- `users.sql`
    - added the database for users to the root folder
    - use the "import" feature in phpmyadmin to import the new database to your machine

## Changed
- `game.php`        `gameboot.php`
    - changed the appearance of the start episode buttons (when they are disabled, they are now grey)
    - TODO: build the table for ch. 1 and ch. 2 (tentative)
    - TODO: uncomment the loop so that ch. 1 and ch. 2 can be included in the replay function (with wiping of memory)
    - TODO: create a database variable to know if the chapter currently being played is in mode #1 or #2
- `gameengine.js`
    - the game bar (purple top bar) is updated at every click
    - TODO: update the 10 images at the bottomat every click as well
    - TODO: popups dans le jeu (please enter a username, please do X)
    - TODO: mettre ce popup dans library.js


# Version 1.5.12 (Replay Story type #1 - Infinity consequences)
## Added
- `library.js`      `gameboot.js`
    - undo all infinity consequences for the chapter
    - the code is now a function in library.js called "wipeCurrentChapter()"
    - this function will wipe the contextual chapter

## Changed
- `push_variables.php`
    - changed the strings of characters, as they were different across files
    - this was causing an issue when saving to the database
    - all the characters after coach davis and lady arlington were not read (such as cecile and serena)
    - now it works as intended
- `replay.php`
    - remove the "Next Chapter" button
    - TODO: put it back lol
- `variables.js`
    - removed the refreshInterface call in the variables.js file (it was calling it twice in the game engine)
    - this is a result of trying to fix the async bug a few months ago
    - the async bug is now fixed and there is no need for this


# Version 1.5.11 (Replay Story type #1 - isVisited)
## Added
- `gameboot.js`
    - coded the first type of replay
    - replay type 1 = reset progress (replay story) -> ex.: if we replay chapter 13, all subsequent chapters must be replayed (memory is wiped out as well)
    - ex. 1: we're currently playing ch. 1, we click on ch. 0.
        - it will wipe the memory of chapter 0 for now (    the SQL table chapter1_story is not yet created)
        - isVisited is going to be 0 for all of the slides and we will restart ch. 0 at slide 0
    - ex. 2: if we're playing ch. 0 and we click on ch. 0, it will NOT reset progress and will proceed with the story (as intended)

## Changed
- `library.js`
    - changed the way the chapter size is found
    - now it will try to get the size from story[0].length
    - if that doesn't work, manually inputted numbers will do


# Version 1.5.10 (Appearance)
## Changed
- `index.php`
    - Bug fixing (the wrong classes were being called for the buttons)
- `se-buttons.css`      `se-index.css`
    - Adding fading effect to the buttons


# Version 1.5.9 (Forgotten PassWord Appearence)
## Changed
- `forgot_password.php`
    - Changed its appearance to fit with the rest of the theme of the website


# Version 1.5.8 (Small Fixes - about.php and images)
## Added
- `relationships.php`
    - Added a higher resolution file for classified school files

## Changed
- `about.php`   
    - removed the buttons to sign up and log in if the user is already logged in


# Version 1.5.7 (isVisited)
## Added
- `variables.js`
    - added loading of the isVisited of ch. 0
    - added saving of the isVisited of ch. 0
- `database`        
    - added the chapter0_story table

## Changed
- `gameboot.js`
    - optimized the file
    - a instead of div and .href instead of .onclick


# Version 1.5.6 (New Gameboot appearance and functionality)
## Added
- `gameboot.js`       `game.php`
    - added chapters finished vs next chapters
    - added the replay type (#1 vs #2) -> we still have to code the specifics, which are detailed in the file [gameboot.js]

## Changed
- `variables.js`
    - added pullVariablesFromDB as a default to the file (it will pull database variables if we include the file)
- `chapter0.js`       `chapter0.js`       `gameengine.js`
    - changed the variable used for the chapter location, because it was redundant -> now it's in each chapter's JS file
- `README.md`
    - git tag -a v1.1.1 -m "Version 1.1.1 (Title)" was a bit long and redundant so I changed it for `git tag v1.1.1`


Version 1.5.5 (Solution to the Async problem)
- *EXCEL*               [chapter0.js]
                        [chapter0.xlsx]     made some changes to slide links
- *TODO*                [todo.md]           placed the chapter 1 todo list on the Google Drive
- *ASYNC*               [variables.php]     fixed the async problem once and for all (pull AND push)

Version 1.5.4 (Async Solution)
- *TOP BAR DESIGN*      [headers.php]       Added information on the purple bar on top of the page
- *README*              [README.md]         updated the README
- *CSS*                 [.css]              updated >b< to be purple and >strong< to be white
- *ASYNC*               [headers.php]       found a solution to the Async problem (link in TODO.md) and used it to display information on the top purple bar

Version 1.5.3 (Ch. 0 Improvements)
- *EXCEL*               [chapter0.js]
                        [chapter0.xlsx]     made some changes to the dialog
- *DORM IMAGE*          [dorm.jpg]          modified the image of the dorm (the wardrobe was missing...?)
- *DESIGNS*             [replay.php]        
- *REPLAY*              [replay.php]        
                        [gameengine.js      Implemented the replay/next chapter function when you reach the end of a chapter

Version 1.5.2 (June forgot to write patch notes)
- *JUNE FORGOT*

Version 1.5.1 (Game Engine, TODO, DataBase)
- *STRUCTURE*           [gameengine.js]
                        [header.js]         arrangment of all string continuations in JS files

- *ADDITION*            [TODO.md]           addition of compiling link
- *CODE*                [127_0_0_1.sql]     addition of default value to variable "physicalallocationint"            

Version 1.5.0 (Game Engine, Google Ads)
- *STRUCTURE*           [gameengine.js]     creation of the game DOM is now in a php file [generateGameContainer.php], with the style in a css file rather than directly in JS
- *CSS*                 [map.php]           rounded the corners
- *GOOGLE ADS*          [googleAds.php]     added google ads to all pages with [footers.php, headers.php]
- *DESIGN*              [.jpg]              changed the friendship and romance options (they are now square and no shading, and they appear as round)
- *CODE*                [library.js]        added serena and cecile as coded objects

Version 1.4.0 (Split CSS, Ch. 0 - Completed V2)
- *DELETION*            [/beta]             removed the beta folder
- *STRUCTURE*           [.css]              split the css into multiple files
- *CHAPTER 0*           [gameengine.js]     Terminé Ch.0 - Form 2 (avec le DB, le nom, et les pronoms)

Version 1.3.30 (Ch. 0 - Completed V1)
- *OBJECTIVES*          [library.js]        implemented the "Objective Complete" functionality
- *CHAPTER 0*           [chapter0.js/xlsx]  chapter 0 is updated with the new template (pretty much done)

Version 1.3.29 (Ch. 0 - Form 2)
- *TOOLTIPS*            [.css]              fixed the tooltips (there were 2 classes with the same name that overlapped)
- *CODE - NEW FORM*     [gameengine.js]     commencé le Ch.0 - Form 2 (il reste à terminer les pronoms)

Version 1.3.28 (Character Tooltips in Objectives Container)
- *TOOLTIPS*            [library.js]        added centered tooltips for the characters
- *CSS*                 [.css]              optimized css and added some classes
- *BUG FIXED*           [edit_password.php] fixed the bug of the password that was not changing
- *CONTACT US*          [contact.php]       locked the footer to the bottom of the page
- *ANIMATIONS*          [.css]              added animations (zoom, transitions) to buttons and the school files on relationship.php

Version 1.3.27 (Illustrations & Achievements)
- *ILLUSTRATIONS*       [illustration.php]  changed the design (now it's in HTML, not JS)
- *ACHIEVEMENTS*        [illustration.php]  changed the design AND removed the achievements for the beta
- *DELETE ACCOUNT*      [profile.php]       removed the "delete your profile" button
- *DORM*                [dorm.js]           added the escape function to get out of the dollmaker
- *LOADER*               [headers.php]      fixed the position of the loader (no longer absolute)

Version 1.3.26 (Dollmaker)
- *DORM*                [dorm.js]           fixed the dollmaker

Version 1.3.25 (School Files)
- *RELATIONSHIPS*       [relationships.js]  Made pop up images for school file

Version 1.3.24 (Terms.pgp)
- *TERMS & CONDITIONS*  [terms.php]         Added the terms
- *FOOTER*              [footers.php]       Added the link to the terms page
- *HEADER*              [headers.php]       Added the link to the terms page
- *PERSONALITY QUIZ*                        Completed it and released it

Version 1.3.23 (Chapter 1 - Next slide related to Highest Affinity)
- *STRUCTURE*           [chapter1.js/xlsx]  added another variable POSSIBILITY to Point of Interest for highest affinity manipulations
- *GAME ENGINE*         [gameengine.js]     made changes for manipulations regarding affinity (go to slide X if highest affinity is with Y)
- *CHAPTER INPUT*       [chpater1.js/xlsx]  ajouté les ghost slides pour la 2e moitié (selon les affinités)
- *CHAPTER 1*           [chapter1.js/xlsx]  chapter 1 is updated (pretty much done??!)

Version 1.3.22 (EXCEL Significant changes, Chapter 1)
- *CHAPTER 1*           [chapter 1.xlsx]    finished inputting variables for chapter 1
- *CHAPTER 1*           [chapter 1.js]      chapter 1 is updated in the JS file
- *GAME ENGINE*         [gameengine.js]     made changes for the affinity calculations (now it works perfectly)
- *STRUCTURE*           [chapter1.js]       added another variable to track changes in affinity (characters 1 & 2)
- *CHAPTER INPUT*       [chapter1.js]       ajouté les ghost slides pour la slide 44 (pour des affinités multiples)

Version 1.3.21 (EXCEL Chap. 0)
- *EXCEL TEMPLATE*      [chapter 0.xlsx]    made an excel template to make creating chapter data easy 
- *CHAPTER 0*           [chapter 0.xlsx]    inputted chapter 0

Version 1.3.20 (Index, Dorm Loader)
- *INDEX*               [index.php]         highest affinity is done, and the colours are 
- *INDEX*               [index.php]         card headers are now pink instead of yellow
- *HEADER*              [headers.php]       the game tag is highlighted when we're playing the game
- *GAME*                [library.js]        progress bar doesn't show the progress % number under 10%
- *DATABASE*            [get.php]           scholar_info est pulled (pas pushed!!!)
- *DORM*                [dorm.php]          dorm loader is done (when we click on a new item)
- *CODE - RESTRUCT*     [variables.js]      transféré les variables de relationships.js (et index.js) à variables.js

Version 1.3.19 (New structure, Dorm images)
- *FILE MANAGEMENT*     [images]            Added a new structure (not implemented yet, but a tentative version is in the images folder)
- *DORM - IMAGES*       [dorm.php]          modifié le engine pour customize l'apparence avec des images plutôt que tu texte (IL MANQUE LES IMAGES POUR LES SOULIERS)

Version 1.3.18 (Profile Page)
- *STUDENT ID*          [profile.php]       Added a better font and more info on the student ID card. Still missing highest infinity and current episode (will have to colaborate with Olivier)
- *PROFILE SPRITE*      [profile.php]       Cuter scholar sprite
- *DESIGN*              [profile.php]       Made the page overall better designed
- *IMG GENERATOR*       [imageGenerator.php]    Added relevant changes to account for changes in profile.php

Version 1.3.17 (Loader, Database)
- *DATABASE*            [variables.js]
                        [getvariables.php]
                        [pushvariables.php] AJOUTÉ "user.physicalLocation" dans le get et le push de DB_handle, et modifié un peu le game engine
- *DORM - IMAGES*       [dorm.php]          ajouté les images des highlights (laptop, le wardrobe, le book et le bag)
- *DESIGN*              [headers.php]       ajouté un loader à toutes les pages (il va rester à l'adapter pour le dorm.php -> wardrobe)

Version 1.3.16 (Dollmaker images)
- *VISUALS - DOLLMAKER* [dorm.php]          Images necessary for the dollmaker have been uploaded
- *CODE - CHAPTERBETA*  [chapterbeta.js]    beta players test, not important for the demo

Version 1.3.15 (INDEX, DORM, DESIGN)
- *DESIGN*              [index.php]         terminé le design page (il reste à faire le infinity et mettre le CSS dans un autre fichier)
- *CODE - DORM*         [dorm.php]          terminé la page dorm.php (terminé les tooltips, les liens, le positionnement des objets, etc.)
- *DESIGN*              [CSS]               changé les couleurs des boutons, centralisé les couleurs, ajouté OFFICIAL colors vs LIGHT vs DARK
- *DESIGN*              [CSS]               modifié l'apparence et la structure du header
- *CODE - INDEX*        [index.php]         mis plus de HTML dans index.php, pour que ce soit plus facile à visualiser VS du JavaScript
- *CODE - HEADER*       [index.php]         le header fait automatiquement l'inclusion de jQuery pour toutes les pages
- *DESIGN - HEADER*     [index.php]         la page courante est highlightée (SAUF POUR LES CHAPITRES)

Version 1.3.14 (BETA testing)
- *CODE - DESIGN*       [CSS]               amélioré les chevrons (charactersScroll n'est plus utilisé)
- *BETA AUDITIONS*      ['beta' folder]     créé un fichier standalone pour les auditions du beta testing

Version 1.3.13 (Index Logged In)
- *INDEX*               [index.php]         continued the design for the index page (il va rester à faire en sorte que le affinity truc fonctionne)
- *CODE - DESIGN*       [index.js]          créé un fichier JS propre à index.php pour générer l'image du chapitre courant
- *CODE - DESIGN*       [gameboot.js]       changé la génération, pour qu'on puisse générer d'autres types de containers in the future (using a string vs boolean)
- *CODE - DESIGN*       [imageGenerator.php]        changé les types d'image qui peuvent être générées -> il reste quelques améliorations à faire ici
- *DESIGN*              [CSS]               utilsé le ".card-firstdiv" pour changer les pages qui l'utilisent
- *DESIGN*              [CSS]               le header a maintenant du box-shadow

Version 1.3.12 (JUNE - New Images & visuals)
- *NEW CHEVRONS*        [index.php]         Prettier and cooler chevrons for the scholar randomizer
- *NEW VISUAL*          [index.php]         dashboard.png
- *NEW VISUAL*          [index.php]         Vertical_divider.png
- *NEW SPRITE IMAGES*   [profile.php]       New sprites with cute decorations for the profile page
- *ILLUSTRATION*        [illus_generator.php]       Started the illustration generator

Version 1.3.11 (Minor Design Upgrades)
- *DORM*                [dorm.php]          fixed the goddamn m_shoes.png issue
- *DESIGN*              [about.php]         minor design changes
- *DESIGN*              [CSS]               create a ".card-firstdiv" class for a card that only has rounded bottom corners
- *DESIGN*              [index.php]         mettre le overlay des characters avec un rounded border, comme toutes les autres cartes

Version 1.3.10 (QUIZ)
- *PERSONALIY QUIZ*     [quiz.html]         le  quiz peut accepter n'importe quelle quantité de questions, et les questions sont maintenant dans un fichier JS séparé

Version 1.3.9 (JUNE - Static pages + small aesthetic fixes + m_shoes fix)
- Created the following static pages: about.php, contact.php, parents.php
- Added additional images to come with the new static pages update
- Small aesthetic fixes to index.php, footer.php and header.php
- Small edits to se-stylesheet.css that came with the static pages 

Version 1.3.8 (QUIZ)
- *PERSONALIY QUIZ*     [quiz.html]         le personality quiz est entièrement complété et fonctionne comme désiré
- *DESIGN*              [index.php]         enlevé la marchandise

Version 1.3.7

- *DESIGN*              [CSS]               added the rounded corners everywhere
- *PERSONALIY QUIZ*     [quiz.html]         added the quiz for the website that is currently online (almost done, small details to add)
- *OLD WEBSITE*         [old HTML]          added the old website folder

Version 1.3.6
- *DATABASE*            [variables.js]      enregistré toutes les variables dans la DB d'une shot (à chaque fois qu'on clique quelque part sur la page)
- *CHAPTER INPUT*       [variables.js]
                        [getvariables.php]
                        [pushvariables.php] terminé toutes les manipulations PHP/JS (push and pull)
- *DATABASE*            [variables.js]      Fixed the affinity = "" (a string worth nothing or 0) -> when adding -5, would give "0-5"
- *DOLL MAKER*          [dorm.js]           added the skin color as a customization option
- *DEBUG*               [gameengine.js]     added back the debugging feature of the game
- *RELATIONSHIPS*       [relationships.js]
                        [library.js]        added back the infinity meter in the relationships page (added the characters as variables, and in the library.js function)

Version 1.3.5 (June)
- Added more content in the "Start Playing" div in index.php
- Added relevant additions in se-stylesheet.css
- Changed the banner on index.php logged off (now includes male and female scholar because it's pretty)
- Fixed layer colorization mistake in profile_idcard.php
- Added all of the trimmed scholar images for the randomizer in index.php

Version 1.3.4 (STABLE)

- *TYPO*            [ALL FILES]                 changé "Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!<" pour enlever le typo
- *DOLL MAKER*      [dorm.php]                  finished the Doll Maker
- *DM - NOTE*       [characterGenerator.php]    this file is unused, but is kept just in case we want to try to make it work
- *DM - NOTE*       [randomizer.php]
                    [imageGenerator.php]
                    [profileidcard.php]
                    [ scholar_sprite.php]       optimization
- *DM - NOTE*       [dorm.js]                   le wardrobe est sélectionné par défaut, par AJAX $(function(){});
- *BUG*             [profile_idcard]            the colors are weird

Version 1.3.3 (UNSTABLE)

- *DOLL MAKER*      [dorm.php]
                    [characterGenerator.php]    Started the Doll maker (this is the things that works best) -> les variables se passent en paramètre quand on ne veut pas créer une image, mais l'image ne fonctionne pas quand on l'appelle.

Version 1.3.2 (June)
- Added 'locked' image for illustrations that are still locked
- Fixed Chapter thumbnails for game.php

Version 1.3.1 (June)
- Added the "Others" and "Classmates" section of the relationships.php, incomplete due to lack of infinity meter that are commented
- Added the name and icons of the achievements on illustrations_achievements.php

Version 1.3.0 - WORKING IMAGE GENERATOR

- *New page*            [dorm.php]                  Commencé le dorm page
- *CODE - RESTRUCT*     [many, many pages]          all the footers now use the 'partials/footers.php' file
- *CODE*                [randomizer.php]            fixed the character randomizer
- *CODE - PLUGIN*       [index.php]                 character randomizer on index.php (Solution found at: https://stackoverflow.com/questions/900207/return-a-php-page-as-an-image)

- Notes: the randomizer works perfectly, but we should make sure it fits all screens (width is set at 300px)

Version 1.2.13

- Added a changelog
- changed the design of the profile.php page (header and footer didn't work properly, because old classes were used and the header was called twice)
- changed the design of edit-email.php, edit-username.php, edit-password.php
- added the "current chapter" section in game.php, and changed the design of that page as well (the current chapter is bigger than the others, and the chapter list actually looks like a list now, because all the items are smaller)
- Arrangé l'apparence de relationships.php (les lignes fonctionnent en hauteur avec les images, et le bouton est placé à 10px du bas -> position: absolute)
- enlevé le overlay de Karolina dans le game engine
- Fixed le "relationship_enabled"
- Arrangé le blur des boutons dans game.php (le blur était causé par un "transform: translate" dans le CSS -> apparemment, faire un translate sur du texte résulte en un bug de blur sur Google Chrome.) *(Source: https://stackoverflow.com/questions/27385126/chrome-font-appears-blurry)*
- Arrangé la page relationship.php -> design (le background blanc)
- Fait  fonctionner le bouton "resume playing" 
- Cleaned up the files; Menage (June)
- Work on profile_idcard.php; generation of student id + writing info on the image (June)
- identifier le chapitre le plus récent
- le mettre en emphase dans la page "game load" -> faire un nouveau design pour le chapitre en emphase (différentes couleurs/size/font/images)
- `Changed the TODO list, and going forward, we will cut and paste the TODOs in here once we're done with them`

Version 1.2.12

- Added Profile folder with sprite generation: contains image files + scholar_sprite.php (file that generates the sprite depending on what the user's info is in the database)
- profile_idcard.php will contain the generation of the student id card
- added the database to Relationships.js, and highlighted the active button in pink

Version 1.2.11

- Added Profile folder with sprite generation: contains image files + scholar_sprite.php (file that generates the sprite depending on what the user's info is in the database)
- profile_idcard.php will contain the generation of the student id card

Version 1.2.10

- mis les "focus" => $('#passwordreset-email').focus(); dans login.php, signup.php, password_reset.php
- removed the function drawImage() in the game engine, because June is making the php for it
- updated chapter 1 to include the library
- updated DB_handle pour que tous ce qu'il contient soit invisible
- modifié le width de la page (était 90%, maintenant 80%)
- changé storylocation pour user.storylocation et physicalLocation pour user.physicalLocation
- implémenté le push de la base de données(fonctionne bien indépendamment des utilisateurs)
- classé les fichiers de tests push & pull dans un dossier "test"

Version 1.2.9

- implemented map.php to work with login system (June)

Version 1.2.8

- fixed the Illustrations and Relationship pages (the headers were missing, and the button containers were no longer working)
- removed all the desktop.ini files
- improved the badges on index.php, and added text to put them in context.

Version 1.2.7

- index.php (LOGGED OFF) is coded, we'll need to add the details eventually, but the placeholders are there
- other minor changes, like adding flex-panels to make things centered, putting JS variable functions at the end of the file, etc.

Version 1.2.6

- Added map.php page, it is complete (June)

Version 1.2.5

- Further upgraded se-stylesheet.css and se-game.css
- The form in Chapter 0 somewhat works, let's never touch it again
- Changed the color and the diamond of the login.php and signup.php

Version 1.2.4

- Further upgraded se-stylesheet.css and se-game.css
- Tried to make the form work, but although it doesn't overflow when downsized, the images stay too large

Version 1.2.3

- Further upgraded se-stylesheet.css
- changé les <ul> pour une classe custom
- changé login.php, signup.php, password_reset.php, headers.php
- le header est plus consistent

Version 1.2.2

- changé le header.js -> on utilise maintenant le code PHP headers.php
- deleted the corresponding header.js files
- .logo est rendu #logo
- changé becaucoup de structure, et fait une nomenclature papier (toutes les nouvelles classes sont au bas de se-stylesheet.css)
- Une des conséquences du changement de structure: les boutons sont centrés dans staff.html ("card-content" est un div qui centre les boutons dans les cards)
- Dans le CSS, les balises suivantes sont terminées: HEADER, FOOTER
- Tout ce qui est sous "STRUCTURE" est parfait et (pratiquement) final.

Version 1.2.1

- la page Illustrations & Achievements est presque terminée
- Intégré la base de données Affinity
- La page Relationship et le gameengine utilisent l'affinity de la DB
