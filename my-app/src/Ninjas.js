import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';

class Ninjas extends Component{

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {});
    });


  }


  render(){
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        </div>
        )
    });
    return (

      <div className="container">

      <div className="row">
      <div className="col teal  s12">This div is 12-columns wide on all screen sizes</div>
      <div className="col red s6">6-columns (one-half)</div>
      <div className="col green s6">6-columns (one-half)</div>
      </div>


      <div class="row"> 

      <div class="carousel">
      
      <a class="carousel-item" href="#one!"><img src="http://s1.picswalls.com/wallpapers/2017/12/11/nature-backgrounds_123026774_313.jpg"/></a>
      <a class="carousel-item" href="#two!"><img src="http://3.bp.blogspot.com/-6RQEdeIE8Do/TqQAU2-n5ZI/AAAAAAAAABU/qFyNwQetpHU/s1600/free_high_resolution_nature_wallpaper_577185.jpg"/></a>
     
      
      </div>
      
      </div>



      </div>
      


      )
  }
}

export default Ninjas