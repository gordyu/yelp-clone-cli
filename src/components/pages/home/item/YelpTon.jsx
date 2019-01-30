import React, { Component } from 'react'
import { connect } from 'react-redux'
import  CategoriaTomLin  from './CategoriaTomLin';
import MainCard from '../../../MainCard';
import ReviewOfDay from '../../../ReviewOfDay';
import Collections from '../../../Collections';

const data=[
    {location:"Groton",
        hotNnew:[
            {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
            {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
            {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
        ],
        reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
        collections:[
            {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
            {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
            {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
        ]
    },
    {location:"San Francisco",
        hotNnew:[
            {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
            {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
            {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
        ],
        reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
        collections:[
            {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
            {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
            {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
        ]
    },
    {location:"San Jose",
    hotNnew:[
        {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
        {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
        {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
    ],
    reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
    collections:[
        {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
    ]
    },
    {location:"Los Angeles",
    hotNnew:[
        {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
        {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
        {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
    ],
    reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
    collections:[
        {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
    ]
    },
    {location:"Chicago",        hotNnew:[
        {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
        {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
        {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
    ],
    reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
    collections:[
        {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
    ]},
    {location:"Palo Alto",        hotNnew:[
        {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
        {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
        {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
    ],
    reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
    collections:[
        {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
    ]},
    {location:"More Cities",        hotNnew:[
        {title:'Breakfast Little',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media2.fl.yelpcdn.com/bphoto/E4585gvylULHDE87fwXscA/l.jpg'},
        {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media1.fl.yelpcdn.com/bphoto/O22_26BtW-2-Ot0yXh3M_g/l.jpg'},
        {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:'https://s3-media4.fl.yelpcdn.com/bphoto/zXe5ty27YbB0QN_ZBuqMXg/l.jpg'}
    ],
    reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,img:'https://s3-media1.fl.yelpcdn.com/photo/8jH105M34nXMajrIWOOT-w/60s.jpg',p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."},
    collections:[
        {img:'https://s3-media4.fl.yelpcdn.com/bphoto/TwiEXQx26-499bxhNEGyTg/120s.jpg',title:'my',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/Dwq__xjGZF8rLqz7F8n-Gg/120s.jpg',title:'hydg',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'},
        {img:'https://s3-media2.fl.yelpcdn.com/bphoto/2j8vWY35P0voUdJzrXtXRQ/120s.jpg',title:'fsss',p:"on the first floor in Japan Town's Japan Center in SF, the",places:23,by:'manny loro'}
    ]},
]



 class YelpTon extends Component {

    state={
        locationStores:0,
        area:'Groton'
    }

    chanchArea =(prArea,prIndex)=>{
        this.setState({area:prArea,locationStores:prIndex});
    }








  render() {
    const {area,locationStores} = this.state;

    const rdLocationLinst =()=>(
        data.map( 
            (lc, index) => {
                let areaBoolen =false 
            
                if (area === lc.location ) {
                    areaBoolen =true;
                } else {
                    areaBoolen =false;
                }
                
                return(
                    <li key={lc.location} onClick={()=>this.chanchArea(lc.location,index)} className={areaBoolen ? 'list__order--1 on':'list__order--1'}>{lc.location}</li>
                )    
            }
        )
    )

    const rdHotnNewList =()=>(
        data[locationStores].hotNnew.map(
            st => (
                <MainCard key={st.title} title={st.title} reviews={st.reviews} categories={st.categories} tag={st.tag} img={st.img} />
            )  
        )
    )



    return (
        <div className="yelpTon">
            <div className="main ">
                <h2 className="heading-secondary">Yelp {area}</h2>
                <div className="list">
                    <ul className="list__order">
                        {rdLocationLinst()}
                    </ul>
                </div>
                <div className="hotNnewTitle">
                    <h3 className="heading-tertiary">Hot & New Businesses</h3>
                    <div className="hotNnew">
                        {rdHotnNewList()}
                    </div>
                    <p className="u-blueText">See more hot and new businesses</p>
                </div>
                <div className="mainL2">
                    <div className="reviewOfDay">
                        <h3 className="heading-tertiary">Review of the Day</h3>
                        <ReviewOfDay data={data[locationStores].reviewOfDay} />
                        <p className="u-blueText">Read previous reviews</p>
                    </div>
                    <div className="Collections">
                        <h3 className="heading-tertiary">Recent Collections</h3>
                        <Collections data={data[locationStores].collections} />
                        <p className="u-blueText">Browse more collections</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(YelpTon)
