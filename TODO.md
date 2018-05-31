# OPTIMIZATION (TODO)
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account
`Git on cPanel:` https://documentation.cpanel.net/display/CKB/How+to+Host+Git+Repositories+on+a+cPanel+Account

https://www.google.ca/search?q=ajax+how+to+detect+slow+network&oq=ajax+how+to+detect+slow+network&aqs=chrome..69i57j69i60l4j69i59.7065j0j7&sourceid=chrome&ie=UTF-8

# TODO NEXT
- `dorm.js`: outfits
- `variables.js`: user.GENDER
- fix the goddamn memory problem...

#TODO NOTES

## Chapters
`chapter1.js`       `chapter1.php`
    - réviser le script (s'assurer que tout est terminé)
    - écrire le script dans le fichier excel
    - régler les bugs... possiblement ajouter des fonctions JS (écrire améliorations possibles pour *gameengine.js*)
    - le chapitre 1 est terminé jusqu'à la slide 129, donc il va falloir valider le reste + rajouter les émotions
    - il reste à implémenter les illustrations et le form pour sélectionner notre uniforme
    - valider que toutes les valeurs sont affectées à la bonne slide (dans le fichier excel)
    - slide 93: the two choices are overlapping

## Core Files
`gameengine.js`         `chapterX.php`
    - il doit y avoir 4 text container au total
        - 1 div parent
            - position: absolute; left: 0px; bottom: 0px;
            - Children: 3 choix de dialogue
            - ne pas faire les calculs pour les placer à chaque fois (le parent va se resize automatiquement)
        - 1 div de texte général (pour l'histoire normale, story[0])
    - When Serena's sprite gets on the "happy" sprite, my infinity meter goes up by 5 on the game interface randomly. This does not affect the database
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

`chapterX.php`
    - we should make a generic php file to play the game
    - one php file with a script to include the current chapter's JS file
    - generateGameContianer.php, variables.js, library.js and gameengine.js are already independent
    - we should make one php file to automatically play the current chapter
    - rename game.php to gameboot.php
    - create game.php or chapter.php, which will be a copy of chapter0.php with a modification to be used in any chapter

## Partial Files
`headers.php`
    - mettre variables.js et library.js dans le header/head

`illustration_generator.php`
    - generate illustrations based on [locked vs not, colors, etc.]
    - there are still improvements to be made in this file
    - optimize this file

#Tools

`Useful links for GIT`
*Stuck in the git commit window:* https://stackoverflow.com/questions/26228848/how-do-i-exit-my-git-commit-message-im-not-in-the-vim-i-used-the-commit-m
*Initializing GIT:* https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
*Unstage commit:* https://stackoverflow.com/questions/1611215/remove-a-git-commit-which-has-not-pushed
*Git Tag:* https://git-scm.com/book/en/v2/Git-Basics-Tagging
*Git Rename Tag:* https://stackoverflow.com/questions/1028649/how-do-you-rename-a-git-tag
*Git Log:* git log --all --decorate --oneline --graph (https://stackoverflow.com/questions/1057564/pretty-git-branch-graphs)

`GIT original configuration:`
Target: += *--cd-to-home*
Start in : *%HOMEDRIVE%%HOMEPATH%*

`MySQL tools`
*Exporting and importing SQL databases between computers:* https://www.youtube.com/watch?v=ptaRO_824MU
*Changing Root Password:* https://stackoverflow.com/questions/12224431/create-a-root-password-for-phpmyadmin

*make "ID" the primary key:* ALTER TABLE achievements ADD PRIMARY KEY (id)
*Insert rows for all users:* INSERT INTO achievements (id) SELECT id FROM userinfo
*SET DEFAULT:* ALTER TABLE mytbl ALTER j SET DEFAULT 1000;



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