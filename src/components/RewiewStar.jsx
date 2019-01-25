
import React from 'react'

export default function RewiewStar({review}) {
    let img ='https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png'
    switch (review) {
        case 5:
        return   <figure  className="RewiewStar"><img src={img} className="img1" /></figure >
            break;
        case 4:
        return    <figure  className="RewiewStar"><img src={img} className="img2" /></figure >
            break;
        case 3:
        return    <figure  className="RewiewStar"><img src={img} className="img3" /></figure >
            break;
        case 2:
        return    <figure  className="RewiewStar"><img src={img} className="img4" /></figure >
            break;
        case 1:
        return    <figure  className="RewiewStar"><img src={img} className="img5" /></figure >
            break;
        default:
        return <div className="RewiewStar"></div>
        break;
    }
}

