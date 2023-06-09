#!/usr/bin/env sh

set -env

npm run build

cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/jccweb000/notion2Md master

cd -