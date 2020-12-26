#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site --assume-extension --url-ignore "/(.*)iotaseed(.*)/,/(.*)[Nn]orbert(.*)/,/(.*)archive(.*)/,/(.*)iotabalance(.*)/,/(.*)twitter(.*)/"