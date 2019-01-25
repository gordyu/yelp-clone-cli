
import RewiewStar from './RewiewStar';
import React from 'react'

export default function ReviewOfDay({ data }) {
  return (
    <div className="ReviewOfDay">
        <div className="userInfo">
            <div className="userInfo-l"></div>
            <div className="userInfo-r">
                <p className="hilite">{data.userName}</p>
                <p className="store">Wrote a review for <span  className="hilite">{data.store}</span></p>
            </div>
        </div>
        <div className="blueLien">Review of the Day</div>
        <div className="review"><RewiewStar review={data.reviews} /></div>
        <p className="paragraphR">{data.p}</p>
    </div>
  )
}

