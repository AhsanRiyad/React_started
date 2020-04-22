import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import Stylesheet from './style.css'

class Calculator extends Component{

  componentDidMount(){
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
 }


 render(){
  return (
  <div className="container">
  <nav> {/*<!-- navbar content here  -->*/} </nav>
  <ul id="slide-out" class="sidenav">
  <li>
  <div class="user-view">
  <div class="background background_color">
  <img src="images/office.jpg"/>
  </div>
  <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
  <a href="#name"><span class="white-text name">John Doe</span></a>
  <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
  </div></li>
  <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
  <li><a href="#!">Second Link</a></li>
  <li><div class="divider"></div></li>
  <li><a class="subheader">Subheader</a></li>
  <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
  )
 }
}

export default Calculator