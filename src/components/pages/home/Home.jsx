import React, { Component } from 'react'

import { connect } from 'react-redux'
import  Nav  from './item/Nav';
import  Obtione  from './item/Obtione';
import  SearchBar  from './item/SearchBar';



 class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div  className="bigImg" >
          <div className="bigImg__cont">
            <Nav />
            <div className="bigImg__cont--search">
              <div className="logo">
                  <img className="logo" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_design_web/b085a608c15f/assets/img/logos_homepage/default.png" alt="fasdf" />
              </div>
              <SearchBar /> 
              <Obtione />
            </div>
            <div className="bigImg__cont--fotoId">Photo by <span>Kenji M.</span></div>
          </div>
        </div>
        <div className="yelpTon">
        
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
