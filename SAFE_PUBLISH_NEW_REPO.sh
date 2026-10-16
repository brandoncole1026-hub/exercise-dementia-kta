#!/usr/bin/env bash
# This script can ONLY publish this extracted folder to the separately named exercise-dementia-kta repo.
# FIRST create a NEW empty GitHub repo: https://github.com/new
set -euo pipefail

EXPECTED_REPO="brandoncole1026-hub/exercise-dementia-kta"
REMOTE_URL="https://github.com/${EXPECTED_REPO}.git"
HERE="$(cd "$(dirname "$0")" && pwd -P)"

if [[ "$HERE" == *"cfb-model-web"* ]] || [[ ! -f "$HERE/index.html" ]] || [[ ! -f "$HERE/exercises.html" ]]; then
  echo "SAFETY STOP: not the standalone dementia education site directory." >&2
  exit 1
fi
cd "$HERE"

if [[ -d .git ]]; then
  CURRENT_REMOTE="$(git remote get-url origin 2>/dev/null || true)"
  if [[ -n "$CURRENT_REMOTE" && "$CURRENT_REMOTE" != "$REMOTE_URL" && "$CURRENT_REMOTE" != "git@github.com:${EXPECTED_REPO}.git" ]]; then
    echo "SAFETY STOP: an unrelated GitHub remote is configured: $CURRENT_REMOTE" >&2
    exit 1
  fi
else
  git init -b main
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "Verified standalone remote: $(git remote get-url origin)"
else
  git remote add origin "$REMOTE_URL"
fi

git add README.md 404.html about.html evidence.html exercises.html handout.html implementation.html index.html resources.html robots.txt vercel.json assets SAFE_PUBLISH_NEW_REPO.sh
if ! git diff --cached --quiet; then
  git commit -m "Create standalone dementia exercise education website"
fi

echo "About to publish ONLY to $EXPECTED_REPO; this does not touch any CFB repo."
read -r -p "Enter PUBLISH to continue: " CONFIRM
if [[ "$CONFIRM" != "PUBLISH" ]]; then echo "No push performed."; exit 1; fi

git branch -M main
git push -u origin main
printf '\nDone. Import https://github.com/%s into a NEW Vercel project.\n' "$EXPECTED_REPO"
