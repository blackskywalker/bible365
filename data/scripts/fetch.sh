#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")/.." && pwd)/raw"
mkdir -p "$DIR"
cd "$DIR"
echo "Downloading 5 translations to $DIR ..."
curl -sL -o KorRV.json "https://raw.githubusercontent.com/scrollmapper/bible_databases/master/formats/json/KorRV.json"
curl -sL -o ASV.json    "https://raw.githubusercontent.com/scrollmapper/bible_databases/master/formats/json/ASV.json"
curl -sL -o Viet.json   "https://raw.githubusercontent.com/scrollmapper/bible_databases/master/formats/json/Viet.json"
curl -sL -o ThaiKJV.json "https://raw.githubusercontent.com/scrollmapper/bible_databases/master/formats/json/ThaiKJV.json"
curl -sL -o ChiUn.json   "https://raw.githubusercontent.com/scrollmapper/bible_databases/master/formats/json/ChiUn.json"
ls -lh
