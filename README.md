[**Support me with a Follow**](https://github.com/shunpochang/followers)
# connect-love mobile demo App
#### Using React-Native, here's the Android and iOS app for [a simple commenting board with Django backend hosted on GAE](https://github.com/shunpochang/connect_love_demo) that I built for my prior web tutorial.
---
##### connect-love web demo
[![alt text](https://github.com/shunpochang/file_dump/blob/master/images/connect_love_demo_img_2.png "connect-love demo")](https://connect-love.appspot.com/)

Following the setups and tutorial from [React Native](https://cloud.google.com/python/django/appengine) and leveraging a RESTful api through Django backend from my [Django + Reactjs web demo](https://github.com/shunpochang/connect_love_demo), I built a iOS and Android version for **[connect-love app](https://connect-love.appspot.com/)** (while reusing 60% of the code for both platforms).

## Steps to set up.
First follow [React-Native (RN) instructions](https://facebook.github.io/react-native/docs/getting-started.html) to install react-native command-line interface.

This demo root contains the necessary android/ios build dependencies in respective folders (do not need to touch them), a package.json for JS dependencies, two RN root javascript files (index.*.js) corresponding to android and ios main app, and an App folder that contains 2 views in the mobile app and a helper file for network api.

#### Install dependencies
```bash
# Installs all JS dependencies.
npm install
# Use rnpm to build additional depenencies for using third-party JS libraries (like 'react-native-vector-icons' and 'tcomb-form-native') on iOS and Android.
rnpm link
```
##### iOS demo
[![iOS gif](https://github.com/shunpochang/file_dump/blob/master/images/connect-love-iphone-demo.gif "connect-love iOS demo")](https://github.com/shunpochang/connect_love_mobile_demo/blob/master/index.ios.js)
### Start running the app on iOS
```bash
react-native run-ios
# Check out console logs.
react-native log-ios
```
When running iOS simulator, Command⌘ + d brings up the developer settings, and Command⌘ + R refreshes the app.

*Note*: If you decided to switch to a non-secure api (not https://) for data fetching/posting, turn off [App Transport Security in Xcode](http://stackoverflow.com/questions/30731785/how-do-i-load-an-http-url-with-app-transport-security-enabled-in-ios-9).

##### Android demo
[![Android gif](https://github.com/shunpochang/file_dump/blob/master/images/connect-love-android-demo.gif "connect-love Android demo")](https://github.com/shunpochang/connect_love_mobile_demo/blob/master/index.android.js)
### Start running the app on Android
```bash
# First start a Android Virtual Device (or connect to a physical device).
android avd
react-native run-android
# Check out console logs.
react-native log-android
```
When running Android simulator, Command⌘ + m brings up the developer settings, and 'rr' (press 'r' twice) refreshes the app.

*Note*: If you see errors from run-android, Google the errors and fix them ... and here are the two I encountered. 
* processDebugResources error: I managed to get around this error by opening Android Studio -> SDK manager -> for 'Android SDK' -> under 'SDK Platforms' -> check the 'Show Package Details' box on lower right -> under 'Android 6.0 (Marshmallow)' -> install 'Android SDK Platform 23' and 'Sources for Android SDK'.
* app:installDebug no device error: make sure you start a virtual device through $android avd -- add the SDK path if android is not found:  $export PATH="~/Library/Android/sdk/tools:~/Library/Android/sdk/platform-tools:${PATH}"
