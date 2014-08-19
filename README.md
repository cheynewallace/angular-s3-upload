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

CORS Configuration
-------------------
You will need to add a CORS policy to your AWS bucket to allow uploads from this app. Details on how to add this policy to your bucket can found in the blog mentioned above, under the CORS section
Here's a sample policy that you can use

```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>http://localhost:3000</AllowedOrigin>
        <AllowedOrigin>https://www.yourdomain.com</AllowedOrigin>
        <AllowedOrigin>http://staging.yourdomain.com</AllowedOrigin>
        <AllowedMethod>PUT</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <ExposeHeader>x-amz-server-side-encryption</ExposeHeader>
        <ExposeHeader>x-amz-request-id</ExposeHeader>
        <ExposeHeader>x-amz-id-2</ExposeHeader>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

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




