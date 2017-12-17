#TODO NOTES

***TODO: in Order***

1. identifier le chapitre le plus récent
2. le mettre en emphase dans la page "game load" -> faire un nouveau design pour le chapitre en emphase (différentes couleurs/size/font/images)
3. s'assurer que toutes les variables s'enregistrent dans la DB d'une shot (une fonction qui est appelée à chaque fois qu'on clicke quelque part sur la page -> chaque fois qu'on a à l'enregistrer)
4. account for movements -> movement meter/action points -> faire un système pour tout

***TODO: HIGH Importance***

- la chapitre 1 est terminé jusqu'à la slide 129, donc il va falloir valider le reste + rajouter les émotions
- il va falloir continuer avec les birthday, préférences, etc.
- il reste à ajouter les ghost slides pour la slide 44 (221-224)
- terminer toutes les manipulations PHP/JS
- terminer la page Illustrations & Achievements
- AJOUTER "user.physicalLocation" dans le get et le push de DB_handle
- s'assurer qu'il n'y ait plus de variables utilisés sans la base de données

***TODO: MEDIUM Importance***

- transférer les variables de Relationships.js à variables.js
- les variables de Relationship.js doivent être intgrées dans variables.js
- valider que toutes les valeurs sont affectées à la bonne slide (array du chapter 0 & 1)
- Il va falloir réviser le CSS dans "se-stylesheet" pour les balises: GENERAL, INDEX.PHP, FAQ.PHP, FEATURES.HTML. -> Il faut que les page-specific attributes ne soient jamais utilisés dans une autre page
- Organiser les fichiers PHP
- AJOUTER blackscreen.jpg
- z-index du scholar est trop petit (la barre de texte est au-dessus)

***TODO: LOW Importance***

- Fix le "relationship_enabled"
- Améliorer les erreurs pour login.php, signup.php, resetpassword.php
- put the Version notes in the new Changelog.txt file
- downloader les fonts "great vibes" & "roboto" de Google API

***TODO: UNCATEGORIZED ***

- 

***TODO: ONGOING***

- we still need to add characters over time in "classmates" and "others"


***KNOWN BUGS***

- images that don't size perfectly (chapter 0 form -> link[6]=-3)
- Sprites that don't resize properly in the game


***Database à implémenter***

1. quelle slide que tu es rendu (1 variables par épisode = 50 variables au total)
2. is visited? (200 + variables par chapitre) - FIRST PLAYTHROUGHf
3. is visited? (200 + variables par chapitre) - BONUS -> for the progress bar


***Useful links for GIT***

`https://stackoverflow.com/questions/26228848/how-do-i-exit-my-git-commit-message-im-not-in-the-vim-i-used-the-commit-m`
`https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/`


***Useful install links***
WAMP: `https://sourceforge.net/projects/wampserver/files/latest/download`
GIT: `https://git-scm.com/download/win`
CLOC: `https://github.com/AlDanial/cloc`
JQUERY: 
NODE.JS: `https://nodejs.org/en/`