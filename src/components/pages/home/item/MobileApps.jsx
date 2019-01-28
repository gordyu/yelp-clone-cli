import React, { Component } from 'react'
import { connect } from 'react-redux'

class MobileApps extends Component {


  render() {
    return (
      <div className="MobileApps">
        <div className="main">
            <h2 className="heading-secondary">Yelp Mobile Apps</h2>
            <div className="rowTube">
                <div className=" card">
                <div className="main">
                    <p>Iphone,Ipad and Watch</p>
                    <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/960cce5c1917/assets/img/app_pitch/pitch_ios.png" alt="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/960cce5c1917/assets/img/app_pitch/pitch_ios.png"/>
                </div>
                </div>
                <div className="card">
                <div className="main">
                     <p>Android</p>
                    <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/a91a4a087787/assets/img/app_pitch/pitch_android.png" alt="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/a91a4a087787/assets/img/app_pitch/pitch_android.png"/>
                </div>
                     </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileApps)
