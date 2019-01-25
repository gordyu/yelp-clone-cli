import React, { Component } from 'react'
import RewiewStar from './RewiewStar';
import { connect } from 'react-redux'

 class MainCard extends Component {

  render() {
    const {title,categories,tag,reviews}= this.props;

    if (!title) {
        return <div></div>
    }


    return (
      <div className="MainCard">
        <div className="img"></div>
        <div className="content">
            <h4>{title}</h4>
            <div className="review"><RewiewStar review={reviews} /><p>reviews</p></div>
            <p >{categories}</p>
            <p>{tag}</p>
            <div className="oprend"><i class="fas fa-fire"></i> Opened 6 weeks ago </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCard)


