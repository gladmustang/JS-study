<p align="center">

  <h3 align="center">Appkit design system (Appkit)</h3>

  <p align="left">
    The Appkit design system reflects the patterns and components that support PwC application development. These patterns and components provide unified language and consistent look and feel when designing and developing applications using Appkit framework.
    <br>
    <a href="https://analyticapps.global.hosting.pwc.com/appkit/"><strong>Visit Appkit &raquo;</strong> for stable version.</a>
    <br>
    <a href="https://analyticapps.global.hosting.pwc.com/appkit-dev/"><strong>Visit Appkit Dev &raquo;</strong> for preview version.</a>
  </p>
</p>

<br>

<h5>Latest version: 2.6.5</h5>

<h6>Release Plan:</h6>
<p>For <a href="https://analyticapps.global.hosting.pwc.com/appkit/">stable version</a>, we'll have a new build every 2 weeks.</p>
<p>For <a href="https://analyticapps.global.hosting.pwc.com/appkit-dev/">dev version</a>, normally we'll have daily build.</p>
<p>Appkit's version follows http://semver.org/.</p>
<br>



### Use Appkit components via downloaded assets
1. Go to "Getting started" page of Appkit's website, choose complied/uncomplied version via "Download" section.
2. Unzip the downloaded file.
3. Move the `assets` folder to your own project.
4. Add reference links to involve the css files.
5. Then you could reuse Appkit's components/templates.

Note: Make sure the css reference of images/icons correct when split the assets into your own project.



### Run Appkit's website in local

Make sure you have installed node.js, npm and bower.

```
$ git clone https://github.pwc.com/AdvisoryAnalyticApps/Appkit.git
$ cd Appkit
$ npm install
$ bower install
$ gulp serve
```

Visit

```
http://localhost:3000
```


Build .war package for DEV

```
gulp package --env dev
```

Build .war package for PROD

```
gulp package
```


Build CDN assets by passing version number as a parameter, the sample cmd is as below:

```
gulp cdn --verNo x.x.x //e.g. gulp cdn --verNo 1.0.3
```


## View on Live:

#### Prod Env.

https://analyticapps.global.hosting.pwc.com/appkit/

#### Dev Env.

https://analyticapps.global.hosting.pwc.com/appkit-dev/

## Deploy Appkit to CDN Environment
Go to the appkit project folder, run below commands
```
$ gulp clean
$ gulp package
$ docker build -t appkit-apache2.4 .
$ docker images
$ docker push <to-target-hub/appkit-apache2.4>
$ docker pull <from-target-hub/appkit-apache2.4>
$ docker run -d -p 80:80 --name appkit appkit-apache2.4
```

## Skeleton Overview of this Repo:
```
Appkit
|
├───release        <-- includes all static assets which would be pushed into CDN.
│   └───xxx        <-- version number
│       ├───fonts
│       └───images
│       └───appkit.min.css
│       └───appkit.min.js
├───conf
├───gulp_tasks
├───src
│   ├───app   <-- This is the skeleton of Appkit site(based on Angular) which is available via above links.
│   │   ├───component
│   │   │   ├───footer
│   │   │   └───header
│   │   ├───content
│   │   │   ├───partial  <-- Sample templates for individual components.
│   │   │   └───scripts  <-- Sample scripts for individual components' interactions.
│   │   ├───landing
│   │   ├───login
│   │   ├───sidebar
│   │   └───start
│   └───assets         <-- All common components which could be consumed by others.
│       ├───data
│       ├───fonts
│       ├───images
│       ├───scripts
│       └───styles
│           └───components
└───test               <-- Testing pages for CDN releases candidates.
```

## More...

You can go to [Wiki Pages](https://github.pwc.com/AdvisoryAnalyticApps/Appkit/wiki) for more details:

#### How to contribute
[Contributing to Appkit](https://github.pwc.com/AdvisoryAnalyticApps/Appkit/wiki/Contributing-to-Appkit)

#### Resource Links
* [Getting starting from technical perspective](https://github.pwc.com/AdvisoryAnalyticApps/Appkit/wiki/Getting-starting-from-technical-perspective)
* [Release notes](https://github.pwc.com/AdvisoryAnalyticApps/Appkit/wiki/Release-Notes)
