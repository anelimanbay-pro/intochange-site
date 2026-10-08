#!/usr/bin/env bash
# Build the site and publish it to the gh-pages branch (served by GitHub Pages).
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
cp dist/index.html dist/404.html   # single-page app fallback
touch dist/.nojekyll
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f "$(git -C .. remote get-url origin)" gh-pages
cd .. && rm -rf dist/.git
echo "Deployed."
