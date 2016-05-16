eggtimer
==============

[![Build Status](https://circleci.com/gh/jessamynsmith/eggtimer-ui.svg?style=shield)](https://circleci.com/gh/jessamynsmith/eggtimer-ui)
[![Coverage Status](https://coveralls.io/repos/jessamynsmith/eggtimer-ui/badge.svg?branch=master)](https://coveralls.io/r/jessamynsmith/eggtimer-ui?branch=master)

Ionic app to track menstrual periods.


Development
-----------

This project is a work in progress, and very rough at the moment. I am currently in the process of
porting over UI functionality from:
https://github.com/jessamynsmith/eggtimer-server

Getting started:

    npm install
    ionic browser add crosswalk
    ionic platform add browser android ios
    ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git
    ionic plugin add https://github.com/benjie/phonegap-parse-plugin

Export environment variables from your parse.io account:

    EGGTIMER_PARSE_APP_ID=<value_from_parse>
    EGGTIMER_PARSE_CLIENT_KEY=<value_from_parse>
    
If you want push notifications:

    gulp credentials

To lint the code:

    node_modules/.bin/jshint www/js
   
To run unit tests:

    node_modules/karma/bin/karma start tests/karma.conf.js --single-run

To run app:

    node server.js
    ionic run android

Remote debugging Android:

 - In developer options, enable USB debugging
 - On computer, in chrome, go to chrome://inspect/
 - On phone, allow debugging

Create apks:

     ./create_apks.sh


Thank you to:
Emily Strickland (github.com/emilyst) for the name
