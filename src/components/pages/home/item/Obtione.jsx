import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Obtione extends Component {

  render() {
    return (
        <div className="search--obtione">
            <div className="obtione--item"><i className="fas fa-utensils"></i><span>Restaurants</span></div>
            <div className="obtione--item"><i className="fas fa-glass-martini"></i><span>Nightlife</span></div>
            <div className="obtione--item"><i className="fas fa-home"></i><span>Home Services</span></div>
            <div className="obtione--item"><i className="fas fa-truck"></i><span>Delivery</span></div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Obtione)
