
import RewiewStar from './RewiewStar';
import React from 'react'

export default function ReviewOfDay({ data }) {
  return (
    <div className="ReviewOfDay">
        <div className="userInfo">
            <img src={data.img} className="userInfo-l"></img>
            <div className="userInfo-r">
                <p className="hilite">{data.userName}</p>
                <p className="store">Wrote a review for <span  className="hilite">{data.store}</span></p>
            </div>
        </div>
        <div className="blueLien">Review of the Day
        <img className="iconC" src="https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/8bb21835695e/assets/img/badge_banner_icons/40x40_rotd.png" alt="https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/8bb21835695e/assets/img/badge_banner_icons/40x40_rotd.png"/>
        </div>
        
        <div className="review"><RewiewStar review={data.reviews} /></div>
        <p className="paragraphR">{data.p}</p>
    </div>
  )
}

