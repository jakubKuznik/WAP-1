#!/bin/bash


if [ $# -eq 0 ]; then
    npm test 
fi

if [ "$1" = "install" ]; then
    npm install --save-dev
else
    echo "Unknown argument (know only install)"
fi

