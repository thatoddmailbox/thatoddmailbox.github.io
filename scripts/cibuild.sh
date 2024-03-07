#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site --root-dir ./_site/ --assume-extension .html --no-check-external-hash --ignore-urls "/(.*)iotaseed(.*)/,/(.*)[Nn]orbert(.*)/,/(.*)archive(.*)/,/(.*)iotabalance(.*)/,/(.*)source.android(.*)/,/(.*)die.net(.*),/(.*)reddit.com(.*)/" --typhoeus '{"headers": {"User-Agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/117.0.0.0 Safari\/537.36 htpf/1"}}'
