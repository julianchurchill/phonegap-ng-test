# phonegap-ng-test

## What I Did

- sudo apt-get install node-js
- cd ~/bin && ln -s /usr/bin/nodejs node
- sudo apt-get install npm
- npm install -g phonegap
 - Installed phonegap 4.2.0-0.25.0 - found by running 'phonegap -v'
- phonegap create phonegap-ng-test
- cd phonegap-ng-test
- phonegap run android
 - To see hello world android app execute in emulator

- npm install -g bower yo gulp generator-mobileangularui
 - Installed bower for package management (like npm), yeoman ('yo'), gulp for build/task management and mobileangularui generator for yeoman
- yo mobileangularui
 - Scaffolds the app by installing a necessary dependencies and a walking skeleton
- gulp build
 - Commented out '@import "font-awesome/less/spinning";' from bower_components/mobile-angular-ui/src/less/mobile-angular-ui.less to fix error. NOTE: This file is in bower_components which is in .gitignore, therefore the change is not under source control
 - Builds the app using 'gulp' as the task manager
- phonegap run android

## Notes

- Android app can be 'cleaned' by removing the platforms/android directory.
 - A 'gulp build' will be required after this to recreate the app

## References

- Phonegap + mobile angularUi - http://mobileangularui.com/blog/your-first-phonegap-app-with-mobile-angular-ui/
- Brian Ford tutorial on phonegap + AngularJS - http://briantford.com/blog/angular-phonegap

