import React, { Component } from 'react'
import { connect } from 'react-redux'



export class CategoryComponetn extends Component {


  render() {

    const {title, img} = this.props
    return (
      <div className="CategoryComponetn">
          <div className="main">
          <img className={'img'} src={img} alt={img} />
          <h3>{title}</h3>
          </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponetn)
