import React, { Component } from 'react'
import { connect } from 'react-redux'

 class RewiewStar extends Component {


  render() {
    const {review} =this.props

    switch (review) {
        case 5:
        return   <figure  className="RewiewStar"><img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" className="img" /></figure >
            break;
        case 4:
        return    <figure  className="RewiewStar"><img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" className="img2" /></figure >
            break;
        case 3:
        return    <figure  className="RewiewStar"><img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" className="img3" /></figure >
            break;
        case 2:
        return    <figure  className="RewiewStar"><img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" className="img4" /></figure >
            break;
        case 1:
        return    <figure  className="RewiewStar"><img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" className="img5" /></figure >
            break;
        default:
        return <div className="RewiewStar"></div>
        break;
    }

    
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RewiewStar)
