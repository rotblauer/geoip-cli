#!/usr/bin/env node
const maxmind = require('maxmind');
const meow = require('meow')

const cli = meow(`
	Looks up an ip in a GeoIP database from MaxMind
	`)

const dbpath = cli.input[0] || ''
const ipOrHostname = cli.input[1] || ''

console.log(dbpath, ipOrHostname);

var ipLookup = maxmind.openSync(dbpath);

if (maxmind.validate(ipOrHostname)) {
	var ipData = ipLookup.get(ipOrHostname);
	console.log(ipData);
	process.exit(0);
} else {
	console.error("invalid ip");
	process.exit(1);
}

