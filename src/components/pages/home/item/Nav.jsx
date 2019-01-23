import React, { Component } from 'react'

import { connect } from 'react-redux'

export class Nav extends Component {


  render() {
    return (
      <div className="bigImg__cont--nav">
        Nav
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
