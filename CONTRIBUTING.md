# Contribution Guide

## Git Workflow: Forking Workflow

For this project, we will be using a forking workflow. This entails a master branch, development branch, and forking of
the development branch. 

### Procedure
1. Fork the development branch
2. Clone your personal fork onto your local computer

    `git clone https://github.com/<contributor>/trippian.git`

3. Add a remote upstream to the development branch

    `git remote add upstream https://github.com/<contributor>/trippian.git`
    
4. Create a feature branch on your fork and commit changes

    `git checkout -b <feature>`
    
    `//edit code`
    
    `git add <files>`
    
    `git commit -a -m <commit message>`
    
5. When you want to make your changes public to other members, push your feature branch up to your public fork

    `git push origin <feature>`
    
6. If there were changes to the development branch, pull down the new commits

    `git fetch upstream <branch name>`
    
    `git rebase upstream/<branch name>`

## Commit Messages
Commit messages should be in the following format:


    <type>: <subject>

    <body> (present-tense summary)
 
    <footer>`

###type tags
* feat (new feature)
* fix (bug fix)
* docs (changes to documentation)
* style (formatting, missing semi colons, etc; no code change)
* refactor (refactoring production code)
* test (adding missing tests, refactoring tests; no production code change)
* chore (updating grunt tasks etc; no production code change)

###example commit message

    [docs]: add example commit message to readme
    
    <body>: add example commit message to MKS greenfield project README.md file

## Style Guide
We will be following the Makersquare style guide linked below

(https://github.com/makersquare/student-wiki/wiki/Style-Guide)
