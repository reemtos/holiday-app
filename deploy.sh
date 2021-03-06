#!/usr/bin/env sh
rm -rf dist
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
cp index.html 404.html


git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/reemtos/holiday-app.git
git push -fu origin master:gh-pages

cd -