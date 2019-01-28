import React, { Component } from 'react'

import { connect } from 'react-redux'

class Foot extends Component {


  render() {
    return (
      <div className="Foot">
      <div className="main">
        <div className="top">
          <div className="colomList">
            <p>About</p>
            <ul>
              <li>About Yelp</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Investor Relations</li>
              <li>Content Guidelines</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div className="colomList">
            <p>Discover</p>
            <ul>
              <li>About Yelp</li>
              <li>Yelp Project Cost Guides</li>
              <li>Press</li>
              <li>Collections</li>
              <li>Talk</li>
              <li>Events</li>
              <li>The Local Yelp</li>
              <li>Yelp Blog</li>
            </ul>
          </div>
          <div className="colomList">
            <p>Yelp for Business Owners</p>
            <ul>
              <li>Claim your Business Page</li>
              <li>Advertise on Yelp</li>
              <li>Yelp Reservations</li>
              <li>Yelp WiFi</li>
              <li>Yelp Nowait</li>
              <li>Business Success Stories</li>
              <li>Business Support</li>
              <li>Yelp Blog for Business Owners</li>
            </ul>
          </div>
          <div className="colomList">
            <p>Languages</p>
            <ul>
              <li>English</li>
            </ul>
            <p>Countries</p>
            <ul>
              <li>United States </li>
            </ul>
          </div>
        </div>
        <div className="bottum">
          <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png" alt="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png"/>
          <p>Copyright  2004–2019 Yelp Inc. Yelp,<img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/58cfc999e1f5/assets/img/logos/burst_desktop_xsmall_outline.png" alt="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/58cfc999e1f5/assets/img/logos/burst_desktop_xsmall_outline.png"/> Yelp logo, Yelp burst and related marks are registered trademarks of Yelp.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Foot)
