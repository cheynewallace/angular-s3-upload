AngularJS To S3 Upload App
=================

A sample application written using AngularJS and the AWS JS SDK to demonstrate uploading files to AWS S3 using only JavaScript. 

[The blog article to accompany this project can be found here](http://www.cheynewallace.com/uploading-to-s3-with-angularjs/) 

[You can view a live demo of this application here](http://cheynewallace.github.io/angular-s3-upload)

Other libraries were used for aesthetic purposes but AngularJS and the AWS JS SDK are the only required libraries.

Required Libraries
-------------------
* AngularJS
* AWS JavaScript SDK

Python HTTP Server
-------------------
On OSX run **bash start_server.sh** to start a python HTTP server for the app. Then simply visit http://localhost:8000 

Compiling The AWS JS SDK
---------------

The AWS JS SDK is huge. In this application, for simplicity, I have used bower to install the AWS JS SDK, although it weighs in at around 230KB even when minified.
I would recommend lazy loading the library only when needed.
  
I was able to shave about 50KB off the file size by compiling an older version of the SDK using the NodeJS modules mentioned here: [Compiling The AWS SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-building.html)

The command used to compile and minify only the S3 components

`MINIFY=1 node dist-tools/browser-builder.js s3 > aws-sdk.min.js`

I have included a copy of my custom built aws-sdk.js under aws-sdk-custom in the components directory of this repo. 




