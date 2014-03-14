#!/usr/bin/env bash

echo 'Ruby version:'

ruby --version

export RACK_ENV=none

puma -e none -p 9292 -t 64:128