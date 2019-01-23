import React, { Component } from 'react'

import { connect } from 'react-redux'
import  Nav  from './item/Nav';

export class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div  className="bigImg" >
          <div className="bigImg__cont">
            <Nav />
            <div className="bigImg__cont--search">search</div>
            <div className="bigImg__cont--fotoId">fotoId</div>
          </div>
        </div>
        <div className="yelpTon">
          fg
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
