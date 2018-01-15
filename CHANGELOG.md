#CHANGELOG

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
- *DATABASE*            [variables.js]              enregistré toutes les variables dans la DB d'une shot (à chaque fois qu'on clique quelque part sur la page)
- *CHAPTER INPUT*       [variables.js, getvariables.php, pushvariables.php]     terminé toutes les manipulations PHP/JS (push and pull)
- *DATABASE*            [variables.js]              Fixed the affinity = "" (a string worth nothing or 0) -> when adding -5, would give "0-5"
- *DOLL MAKER*          [dorm.js]                   added the skin color as a customization option
- *DEBUG*               [gameengine.js]             added back the debugging feature of the game
- *RELATIONSHIPS*       [relationships.js, library.js]          added back the infinity meter in the relationships page (added the characters as variables, and in the library.js function)

Version 1.3.5 (June)
- Added more content in the "Start Playing" div in index.php
- Added relevant additions in se-stylesheet.css
- Changed the banner on index.php logged off (now includes male and female scholar because it's pretty)
- Fixed layer colorization mistake in profile_idcard.php
- Added all of the trimmed scholar images for the randomizer in index.php

Version 1.3.4 (STABLE)

- *TYPO*            [ALL FILES]                     changé "Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!<" pour enlever le typo
- *DOLL MAKER*      [dorm.php]                      finished the Doll Maker
- *DM - NOTE*       [characterGenerator.php]        this file is unused, but is kept just in case we want to try to make it work
- *DM - NOTE*       [randomizer.php, imageGenerator.php, profileidcard.php, scholar_sprite.php]        optimization
- *DM - NOTE*       [dorm.js]                       le wardrobe est sélectionné par défaut, par AJAX $(function(){});
- *BUG*             [profile_idcard]                the colors are weird

Version 1.3.3 (UNSTABLE)

- *DOLL MAKER*      [dorm.php, characterGenerator.php] Started the Doll maker (this is the things that works best) -> les variables se passent en paramètre quand on ne veut pas créer une image, mais l'image ne fonctionne pas quand on l'appelle.

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
