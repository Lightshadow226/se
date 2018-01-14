#TODO NOTES

`TODO: Next`

- *DATABASE*            [variables.js, get and pushvariables.php]       AJOUTER "user.physicalLocation" dans le get et le push de DB_handle
- *CHAPTER INPUT*       [chapter1.js]                                   la chapitre 1 est terminé jusqu'à la slide 129, donc il va falloir valider le reste + rajouter les émotions
- *CHAPTER INPUT*       [chapter1.js]                                   il reste à ajouter les ghost slides pour la slide 44 (221-224)

`TODO: in Order`
- *DATABASE*            [variables.js, gameengine.js]                   account for movements -> movement meter/action points -> faire un système pour tout
- *PPT*                 [Chapter2Slides Part2.ppt]                      slidesterminer chapitre 2 (le ppt et le code)]
- *CODE - DESIGN*       [dorm.php]                                      mettre des higlights sur le wardrobe, le laptop, le sac, et les livres

`TODO: HIGH Importance`
- *CODE - NEW FORM*     [gameengine.js]                                 il va falloir continuer avec les birthday, préférences, etc.
- *CODE - PAGE*         [illustrations_achievements.php]                terminer la page Illustrations & Achievements
- *CODE - DESIGN*       [game.php]                                      mettre le chapitre courant
- *DEBUG*               [variables.js, get and pushvariables.php]       s'assurer qu'il n'y ait plus de variables utilisés sans la base de données
- *DATABASE*            [relationships.php]                             Add infinity meter for all characters (in the database + DB_Handle)
- *IMPROVEMENTS* [imageGenerator.php] there are still improvements to be made in this file

`TODO: MEDIUM Importance`
- *CODE - RESTRUCT*     [relationships.js, variables.js]                transférer les variables de Relationships.js à variables.js
- *CODE - RESTRUCT*     [.php]                                          Organiser les fichiers PHP
- *FILES - ADD*         [.jpg]                                          AJOUTER blackscreen.jpg
- *FILES - ADD*         [profile_idcard.php, profile.php]               Download fonts in proper file format to complete the student ID card generation (JUNE)
- *DEBUG*               [chapter0.js, chapter1.js]                      valider que toutes les valeurs sont affectées à la bonne slide (array du chapter 0 & 1)
- *DEBUG*               [se-stylesheet.css]                             réviser le CSS dans "se-stylesheet" pour les balises: GENERAL, INDEX.PHP, FAQ.PHP, FEATURES.HTML.
- *DEBUG*               [se-stylesheet.css]                             Il faut que les page-specific attributes ne soient jamais utilisés dans une autre page
- *DEBUG*               [???]                                           z-index du scholar est trop petit (la barre de texte est au-dessus)
- *CODE - RESTRUCT*     [dorm.js]                                       enlever les .style et les remplacer par des classes

`TODO: LOW Importance`
- *DEBUG*               [login.php, signup.php, resetpassword.php]      Améliorer les messages d'erreurs pour login.php, signup.php, resetpassword.php
- *DEBUG*               [edit-email.php, edit-username.php]             optimiser les fonctions qui reviennent plus qu'une fois, et les mettre dans utilities.php
- *FILES - ADD*         [fonts]                                         downloader les fonts "great vibes" & "roboto" de Google API
- *FILES - ADD*         [new images]                                    dessiner des nouveaux boutons pour friendship/romance
- *DESIGN IDEA*         [CSS, idée]                                     Faire que quand on hover, ce soit mauve, mais que l'item d'à côté soit jaune, et l'autre rose (pour 3 items différents, comme sur la page contact.php (3 images, trois couleurs différentes))
- *DESIGN*              [index.php]                                     mettre le overlay des characters avec un rounded border, comme toutes les autres cartes
- *DESIGN*              [game.php]                                      progress bar ne doit pas afficher le pourcentage en-dessous de 10% (sinon ça a l'air moche)
- *DESIGN*              [CSS]                                           create a ".first_card" class for a card that only has rounded bottom corners
- *DESIGN*              [.PNG, index.php]                               modifier les dimensions de l'image "customize your character"


`TODO: ONGOING`
- *CHARACTERS - INPUT*  [relationships.js, variables.js]                we still need to add characters over time in "classmates" and "others"
- *CHARACTERS - INPUT*  [variables.js]                                  think of possible achievements

`KNOWN BUGS`
- *BUGS*                [???]                                           images that don't size perfectly (chapter 0 form -> link[6] = -3)
- *BUGS*                [gameengine.js, chapterXX.js]                   Sprites that don't resize properly in the game

`Database à implémenter`
- *CREATE DATABASE*     [SQL]                                           quelle slide que tu es rendu (1 variables par épisode = 50 variables au total)
- *CREATE DATABASE*     [SQL]                                           is visited? (200 + variables par chapitre) - FIRST PLAYTHROUGH
- *CREATE DATABASE*     [SQL]                                           is visited? (200 + variables par chapitre) - BONUS -> for the progress bar


#Tools

`Developper Tools - Fast borders`
<style>
*
{
    border: 1px solid black;        
}
</style>

`Useful links for GIT`
*Stuck in the git commit window:* https://stackoverflow.com/questions/26228848/how-do-i-exit-my-git-commit-message-im-not-in-the-vim-i-used-the-commit-m
*Initializing GIT:* https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

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
