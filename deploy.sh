#!/usr/bin/env sh
# Manual fallback only — pushing to `main` now triggers .github/workflows/deploy.yml
# which builds and publishes to `gh-pages` automatically.

set -e

npm run build

cd dist

echo 'aniketkabra.me' > CNAME

git init
git add -A 
git commit -m 'New Deployment'
git remote add origin https://github.com/aniketkabra/aniketkabra.github.io.git
git fetch
git push -f origin HEAD:master

cd -