/**
  copyright 2016 Core Tech Labs, Inc.
  Main.js Core Bottleneck file.
  This file is to only be altered ONLY if pertaining to the Base Structure of Canvas UI

  If for your own application development you are free to change to what you like.

*/



// Imports
var React = require('react');
var ReactDOM = require('react-dom');

//js or jsx requires
// require();

// Style-US files
require("!style!css!less!bootstrap/dist/css/bootstrap.css");
require("!style!css!less!../styles/baseDecorations.less");



/**
  LeftSide (Left Sidebar of the Application) react class resides here
  */
var LeftSide = React.createClass({
  render: function(){
    return(
      <div className="col-md-4">
        <h1>Left Sidebar</h1>
      </div>
    );
  }
});


/**
  RightSide (Right Sidebar of the Application) react class resides here
  */
var RightSide = React.createClass({
  render: function(){
    return(
      <div className="col-md-2">
        <h1>Right Sidebar</h1>
      </div>
    );
  }
});


/**
  Central (Center of the Application) react class resides here
  */
var Central = React.createClass({
  render: function(){
    return(
      <div className="col-md-6">
        <h1>Central</h1>
      </div>
    );
  }
});


/**
  Footer react class resides here
  */
var Footer = React.createClass({
  render: function(){
    return(
      <div className="container-fluid footer">
        <h1>Footer</h1>
      </div>
    );
  }
});


/**
  BaseMap aka Bottleneck for the base application
  You can change the setup and values by further up the bottleneck
  For example: <LeftSide /> refference code starts at line 25 of this main.js code
  */
var BaseMap = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <LeftSide />
          <Central />
          <RightSide />
        </div>
        <Footer />
      </div>
    );
  }
});


// Bottle neck rendering
ReactDOM.render(
  <BaseMap />,
  document.getElementById('content')
);
