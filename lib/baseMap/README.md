## BaseMap

**The core of Canvas UI**

This directory controls how the application is structured. With a ['bottleneck architecture'](https://en.wikipedia.org/wiki/Von_Neumann_architecture#Von_Neumann_bottleneck) (Base on file structure) It is easy to build and/or diagnose this application to your liking.
Keeping in mind that this is just a Canvas for future projects and ideas.

**Architecture**

Once you want to get started by creating your own modules your directory should look like

```
|-lib
|-styles
  |-images (optional)
|-spec    
```

`lib` directory is responsible for holding all js files including the bottleneck main.js

`styles` is for all stylesheets like `css` `less` `sass`

`styles/images` is a optional folder which should hold all images pertaining to the module.

..con't

** In working within the `lib` directory**

In writing your own `react` classes its recommended that you create a bottleneck file called main.js at the top of the file should read.

```node
var React = require('react');
var ReactDOM = require('react-dom');
```
