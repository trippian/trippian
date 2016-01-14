# Contribution Guide

## Git Workflow: Forking/Rebase Workflow

For this project, we will be using a forking workflow. This entails a master branch, development branch, and forking of
the development branch. It is very important that you understand how rebasing works before you get to work on this project. Make sure you
do not work on too many files at once. This will likely cause you to have errors when trying to rebase.

### Procedure
1. Fork the original repo: trippian
2. Clone your personal fork onto your local computer

    `git clone https://github.com/<contributor>/trippian.git`

3. Add a remote upstream to the development branch

    `git remote add upstream https://github.com/trippian/trippian.git`
    
4. Create a feature branch on your fork and begin working on your feature branch and add/commit your changes as you go alone

    `git checkout -b <feature>`
    
    `git add <files>`
    
    `git commit -a -m <commit message>`
    
5. When you want to make your changes public to other members, push your feature branch up to your public fork

    `git push origin <feature>`
    
6. If there were changes to the development branch, MAKE SURE YOU pull down the most recent changes of the development branch

    `git fetch upstream`
    
    `git rebase upstream/<branch name>`
    
7. Submit a pull request from your fork's feature branch to the development branch of the original repository

## Tests
ALWAYS run tests before pushing any code.

## Commit Messages
Commit messages should be in the following format (scope is optional):

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body> (present-tense summary)
    <BLANK LINE>
    <footer>`

###type tags
* feat (new feature)
* fix (bug fix)
* docs (changes to documentation)
* style (formatting, missing semi colons, etc; no code change)
* refactor (refactoring production code)
* test (adding missing tests, refactoring tests; no production code change)
* perf (A code change that improves performance)
* chore (changes to the build process or auxiliary tools and libraries such as documentation generation; no production code change)

###example commit message

    [docs]: add example commit message to readme
    
    <body>: add example commit message to MKS greenfield project README.md file

## Style Guide
We will be following Airbnb's react AND javascript style guide. Give them a thorough read before writing code to understand how to
write in the corrent style.

[Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)

[Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
