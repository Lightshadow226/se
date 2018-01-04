#CHANGELOG

Version 1.3.3 (UNSTABLE)

- Started the Doll maker (this is the things that works best) -> les variables se passent en paramètre quand on ne veut pas créer une image, mais l'image ne fonctionne pas quand on l'appelle.

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
