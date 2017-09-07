import _ from 'lodash';
// import $ from 'jquery';
import './style1.css';
import './style2.css';
import './style3.css';
// import pic from './1.jpg';
import Data from './data.xml';
import {component3} from "./component3"


function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  $(element).addClass('hello');
  // Add the image to our existing div.
  // var myPic = new Image();
  // myPic.src = pic;

  // element.appendChild(myPic);
  console.log(Data);
  component3();
  vendor();
  return element;
}

//document.body.appendChild(component());

$("body").append($(component()));
