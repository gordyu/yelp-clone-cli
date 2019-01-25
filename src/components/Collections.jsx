import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Collections extends Component {


  render() {
    const {data}  =this.props;

    const rdList = ()=>(
        data.map( item =>
            <div key={item.title} className="item">
                <div className="img-l"></div>
                <div className="div-r">
                    <p className="title" >{item.title}</p>
                    <p className="p">{item.p}</p>
                    <p className="places">{item.places} Places-By <span>{item.by}</span></p>
                </div>
            </div>
        )
    )
    return (
      <div className="Collectionslist">
        {rdList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections)
