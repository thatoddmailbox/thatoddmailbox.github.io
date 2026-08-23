#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build

# many sites seem to block datacenter IPs now, I assume because of AI scrapers :(
# solution for that is to ignore 403, 418, 429 errors but it's a bit of a hack
# at least we will still catch broken domains and 404s!
# (999 is the response code linkedin gives when blocking a request)
bundle exec htmlproofer ./_site \
	--root-dir ./_site/ \
	--assume-extension .html \
	--no-check-external-hash \
	--ignore-status-codes "403,418,429,999" \
	--ignore-urls "/(.*)iotaseed(.*)/,/(.*)[Nn]orbert(.*)/,/(.*)iotabalance(.*)/,/(.*)alcatelmobile.com(.*)/,/(.*)4pda.ru(.*)/,/(.*)source.android(.*)/,/(.*)osmocom.org(.*)/,/(.*)archive(.*)/,/(.*)freedesktop(.*)/" \
	--typhoeus '{"headers": {"User-Agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/149.0.0.0 Safari\/537.36 htpf/1"}}'
