#!/bin/bash

mkdir -p dist
rm dist/*
cd src
zip -r ../dist/addremovedesktop.kwinscript *