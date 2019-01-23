import React, { Component } from 'react'

import { connect } from 'react-redux'

export class Nav extends Component {


  render() {
    return (
      <div className="bigImg__cont--nav">
        <div className="bigImg__cont--nav__l">
          <span className="nav--span-1 no-border">Write a Review</span><span className="nav--span-2  no-border">Talk</span> 
        </div>
        <div className="bigImg__cont--nav__r">
          <span className="nav--span-1 no-border">Log In</span><span className="nav--span-2 bg-acteve">Sign Up</span> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
