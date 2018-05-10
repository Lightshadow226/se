#TODO NOTES

## Chapters
`chapter1.js`       `chapter1.php`
    - réviser le script (s'assurer que tout est terminé)
    - écrire le script dans le fichier excel
    - régler les bugs... possiblement ajouter des fonctions JS (écrire améliorations possibles pour *gameengine.js*)
    - le chapitre 1 est terminé jusqu'à la slide 129, donc il va falloir valider le reste + rajouter les émotions
    - il reste à implémenter les illustrations et le form pour sélectionner notre uniforme
    - valider que toutes les valeurs sont affectées à la bonne slide (dans le fichier excel)

## Core Files
`variables.js`
    - Also, there is major lag online and sometimes the server isn't fast enough to save all of the choices made
    - The server crashes if the player moves too fast
    - and it doesn't save the progress

`variables.js`          `get_variables.php`     `push_variables.php`
    - push/pull seulement les variables nécéssaires
    - s'assurer qu'il n'y ait plus de variables utilisés sans la base de données

`library.js`
    - chapterSize() needs to be updated manually every time a chapter changes size or when a new chapter is created

`gameengine.js`
    - When my sprite gets on the "happy" sprite, my infinity meter goes up by 5 on the game interface randomly. This does not affect the database
    - When you refresh during a dialog choice with infinity meter consequences, it keeps incrementing it
        - (and this causes the "wipe" you do during the replay to not work fully)
        - empêcher le infinity meter d'augmenter si on a déjà visité la slide (il faut faire isVisited)
    - quand on recommence un chapitre, on doit
        A) Open a chapter through game.php (see further details in *gameboot.js*)
        B) open a chapter page not normally (type chapter1.php to access it `illegally`)
            - redirect to *game.php* (write a script that reads the current chapter and compares it to the database)
            - must be included in every chapter -> we can't use the game engine because it's going to be too late (user.last_chapter_played will already be modified)
    - optimize the game engine for efficiency (put it on paper first)
    - *variables.js* remove the variable "choice" (for the Ch.0 Form)
    - *variables.js* account for movements -> movement meter/action points -> faire un système pour tout
    - *Chapter0.xlsx* Pronoun choice, and Scholar name instead of username
    - *chapterXX.js* Sprites that don't resize properly in the game
    - images that don't size perfectly (chapter 0 form -> link[6] = -3)

`CSS`
    - Il faut que les page-specific attributes ne soient jamais utilisés dans une autre page
    - Faire que quand on hover, ce soit mauve, mais que l'item d'à côté soit jaune, et l'autre rose (sur la page contact.php (3 images, trois couleurs différentes)
    - https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition1
    - il faudrait faire une classe et une fonction pour un popup pour TOUS les messages ("please write your username!", "please choose a department", )

## Partial Files
`headers.php`
    -mettre variables.js et library.js dans le header/head

`illustration_generator.php`
    - generate illustrations based on [locked vs not, colors, etc.]
    - there are still improvements to be made in this file
    - optimize this file


## Pages
`index.php`             `index.js`              `se-index.css`
    - "Start story" instead of "continue story" when user.storyLocation == 0
    - put the css in se-index.css
    - mettre le CSS dans un autre fichier
    - le css est wobly and all over the place
    - le border shading entre le header et le first card est causé par: style="position: relative;"
    - ajouter le personality quiz

`game.php`              `gameboot.js`           `se-game.css`
    - mettre un popup pour dire "Finish previous chapters first!" -> voir *CSS*

`dorm.php`              `dorm.js`               `se-dorm.css`
    - enlever les .style et les remplacer par des classes
    - Add pronoun change option and all the missing images (shoes, top, bottom, etc.)

`profile.php`
    - afficher l'épisode et le highest affinity sur le ID Card
    - functionning Reset Progress Button
    - Loader for images

`relationships.php`     `relationships.js`      `se-relationships.css`
    - zoom function on the school files
    - *variables.js* we still need to add characters over time in "classmates" and "others"

`login.php`             `signup.php`            `resetpassword.php`
    -  Améliorer les messages d'erreurs pour login.php, signup.php, resetpassword.php

`illustrations_achievements.php`
    - think of possible achievements
    - make sure that a scan of isVisited can show the proper achievements


# Idées
    - faire que le progress bar soit en fonction des illustrations, des achievements, etc.
        - peut-être plusieurs progress bars
        - une de illustrations (ex.: 1/4 unlocked)
        - une de easter eggs (ex.: 2/3 found)
        - une de bonus (ex.: 1/2 found)
    - downloader les fonts "great vibes" & "roboto" de Google API
    - réorganiser les fichiers PHP
    - optimiser les fonctions qui reviennent plus qu'une fois, et les mettre dans utilities.php
        - [edit-email.php, edit-username.php]
    - change the path of all images to the new images folder
        - ["\images -> "\_new_images_folder"]             

# Process pour passer de GIT à En ligne
    1. Demander à June de l'écrire ici

#Tools

`Useful links for GIT`
*Stuck in the git commit window:* https://stackoverflow.com/questions/26228848/how-do-i-exit-my-git-commit-message-im-not-in-the-vim-i-used-the-commit-m
*Initializing GIT:* https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
*Unstage commit:* https://stackoverflow.com/questions/1611215/remove-a-git-commit-which-has-not-pushed
*Git Tag:* https://git-scm.com/book/en/v2/Git-Basics-Tagging
*Git Rename Tag*: https://stackoverflow.com/questions/1028649/how-do-you-rename-a-git-tag

`GIT original configuration:`
Target: += *--cd-to-home*
Start in : *%HOMEDRIVE%%HOMEPATH%*

`SQL tools`
*Exporting and importing SQL databases between computers:* https://www.youtube.com/watch?v=ptaRO_824MU
*Changing Root Password:* https://stackoverflow.com/questions/12224431/create-a-root-password-for-phpmyadmin

`Useful install links`
*WAMP:* https://sourceforge.net/projects/wampserver/files/latest/download
*GIT:* https://git-scm.com/download/win
*GIT BRANCHES:* http://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html
*CLOC:* https://github.com/AlDanial/cloc
*JQUERY:* 
*NODE.JS:* https://nodejs.org/en/

`Amazing VS Code Shortcuts`
*Collapse all (or by level):* https://stackoverflow.com/questions/42660670/collapse-all-methods-in-visual-studio-code
*List of all shortcuts:* http://www.dofactory.com/reference/visual-studio-shortcuts
ctrl + é : toggle comments
ctrl + è : open/close terminal
ctrl + , : open VS Code User Settings
q : quit the "git show v1.1.1" mode

`CSS tools`
*CSS Center Vertically:* https://stackoverflow.com/questions/8865458/how-do-i-vertically-center-text-with-css
Amazing designs: https://semantic-ui.com/elements/button.html

`Bootstrap Frameworks`
Bootstrap Studio (60$): https://bootstrapstudio.io/
Pingendo (99$): https://pingendo.com/index.html

`Useful coding links`
*Checks for errors and warnings and makes the code run faster*
Closure Compiler: https://closure-compiler.appspot.com/home
Async Problem Solution: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function