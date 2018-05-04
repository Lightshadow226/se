# SE README

Every *new commit* shall have the following message: *Version 1.1.1 - QUIZ* with a meaningful title for the new version 

* First Number: With *each OFFICIAL RELEASE*, the left number has to be incremented (`Version 2.0.0`)

* Second Number: With *each MAJOR change*, such as a new chapter, the mid number has to be incremented, (`Version 1.2.0`)

* Third Number: With *each MINOR change*, the right number has to be incremented(`Version 1.1.2`)

With every commit, patch notes must be written in the *CHANGELOG.md*

Format for Patch Notes & TODOs (use TAB to insert a blank space):

- *Category*        [Pages affected]    TODO
- *CODE*            [game.php]          identifier le chapitre le plus récent

.md extension (MarkDown) `https://en.wikipedia.org/wiki/Markdown`

Git Commands:
1. add modified files:
    git add .
2. commit those files:
    git commit -m "Message"
3. tag this commit:
    git tag -a v1.1.1 -m "Version 1.1.1"
4. push all commits to gitlab on the branch "master" (you don't have to push for every commit; you can push after a few commits; however, you have to commit your changes often)
    git push gitlab master --tags