# SE README

Commit Checklist
1. Write patch notes in *CHANGELOG.md*
2. Find a meaningful title
3. Commit often and when changes are small but meaningful

Version numbers are incremented as follow:
* `Version X.1.1`: With *each OFFICIAL RELEASE*
* `Version 1.X.1`: With *each MAJOR change*, (New Chapter and other major changes)
* `Version 1.1.X`: With *each MINOR change*

Git Commands:
1. add all modified files:
    `git add .`
2. commit those files:
    `git commit -m "Message"`
3. tag this commit:
    `git tag -a v1.1.1 -m "Version 1.1.1 (Title)"`
4. push all commits to gitlab on the branch "master" (you don't have to push for every commit; you can push after a few commits; however, you have to commit your changes often)
    `git push gitlab master --tags`