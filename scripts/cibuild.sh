#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site --assume-extension --url-ignore "/(.*)iotaseed(.*)/,/(.*)[Nn]orbert(.*)/,/(.*)archive(.*)/,/(.*)iotabalance(.*)/,/(.*)twitter(.*)/,/(.*)source.android(.*)/" --typhoeus-config '{"headers": {"User-Agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/80.0.3987.149 Safari\/537.36 htpf/1"}}'