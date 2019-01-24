import React, { Component } from 'react'

import { connect } from 'react-redux'

class CategoriaTomLin extends Component {


  render() {
      const {title} = this.props;

    return (
        <div className="CategoriaTomLin">
            <div className="item--img"></div>
            <div className="item--title u-center-text">{title}</div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaTomLin)
