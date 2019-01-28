import React, { Component } from 'react'

import { connect } from 'react-redux'

class CategoriaTomLin extends Component {


  render() {
      const {title,img} = this.props;

    return (
        <div className="CategoriaTomLin">
            <img  src={img} className="item--img"></img>
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
