# phonegap-ng-test

## Notes

- Android app can be 'cleaned' by removing the platforms/android directory.
 - A 'gulp build' will be required after this to recreate the app
- Any npm packages installed with 'npm install -g' are installed 'globally', meaning _not_ in the git repo. Therefore all '-g' npm installs will have to be done once when you download the repo.
- Make sure you increase the number of watchable files on a Linux file system, this is documented below in the install karma section
 - echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

## What I Did

### Created skeleton phonegap app

- sudo apt-get install node-js
- cd ~/bin && ln -s /usr/bin/nodejs node
- sudo apt-get install npm
- npm install -g phonegap
 - Installed phonegap 4.2.0-0.25.0 - found by running 'phonegap -v'
- phonegap create phonegap-ng-test
- cd phonegap-ng-test
- phonegap run android
 - To see hello world android app execute in emulator

### Scaffolded mobileangularui app within phonegap app

- npm install -g bower yo gulp generator-mobileangularui
 - Installed bower for package management (like npm), yeoman ('yo'), gulp for build/task management and mobileangularui generator for yeoman
- yo mobileangularui
 - Scaffolds the app by installing a necessary dependencies and a walking skeleton
- gulp build
 - Commented out '@import "font-awesome/less/spinning";' from bower_components/mobile-angular-ui/src/less/mobile-angular-ui.less to fix error. NOTE: This file is in bower_components which is in .gitignore, therefore the change is not under source control
 - Builds the app using 'gulp' as the task manager
- phonegap run android

### Followed Weather app demo

- Added code as described in http://mobileangularui.com/blog/your-first-phonegap-app-with-mobile-angular-ui/
- phonegap plugin add org.apache.cordova.geolocation

### Install karma as test runner

- npm install karma --save-dev
 - --save-dev will save these npm packages as devDependencies in package.json, allowing users to simply run 'npm install'. This is not necessary if the node modules are checked into source control.
- npm install karma-jasmine karma-phantomjs-launcher karma-chrome-launcher karma-browserify --save-dev
 - plugins for karma to use the unit test framework Jasmine, Chrome, PhantomJS and browserify
- npm install -g karma-cli
 - Install the command line shortcut so you can type 'karma' instead of './node_modules/karma/bin/karma'
- karma init karma.conf.js
- echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
 - Increases the maximum number of files Linux can watch, if you have DropBox running this can easily get reached and karma fails with "ERROR [karma]: { [Error: watch ENOSPC] code: 'ENOSPC', errno: 'ENOSPC', syscall: 'watch' }"

### Run karma as test runner

- karma start karma.conf.js

### Integrated karma into gulp

- npm install --save-dev gulp-karma
- Added 'unittest' and 'unittest-watch' tasks to gulpfile.js, both depend on 'build'

## TODO

- Example test in Jasmine against some angularjs code

## References

- Phonegap + mobile angularUi - http://mobileangularui.com/blog/your-first-phonegap-app-with-mobile-angular-ui/
- Brian Ford tutorial on phonegap + AngularJS - http://briantford.com/blog/angular-phonegap

