import React, { Component } from 'react'

import { connect } from 'react-redux'

export class Foot extends Component {


  render() {
    return (
      <div className="Foot">
        foot
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Foot)
