Find Pattern
============
You need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com/) installed.

To install the pattern finder, clone and install this repo:

> npm install

To run the pattern finder:

> node find-pattern.js _optional input_

For example

> node find-pattern.js aaaabaa

If you don't provide an input parameter, you'll be prompted for input.

Tests
=====
Install the dev dependencies, and run

> node test

Notes
=====
If it weren't for that fact that Javascript cannot read from system in, then we wouldn't require node!