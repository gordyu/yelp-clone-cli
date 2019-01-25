import React, { Component } from 'react'
import { connect } from 'react-redux'
import  CategoriaTomLin  from './CategoriaTomLin';
import MainCard from '../../../MainCard';
import ReviewOfDay from '../../../ReviewOfDay';

const data=[
    {location:"Groton",
        hotNnew:[
            {title:'Egg-O-Holic',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'TSAôCAA',reviews:2,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'Egg-O-Holic',reviews:1,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''}
        ],
        reviewOfDay:{userName:'Dennis W.',store:'Matcha Cafe Maiko',reviews:5,p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."}
    },
    {location:"San Francisco",
        hotNnew:[
            {title:'TSAôCAA',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'Egg-O-Holic',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'Egg-O-Holic',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
        ],
        reviewOfDay:{userName:'Manny W.',store:'Matcha Cafe Maiko',reviews:5,p:"Located on the first floor in Japan Town's Japan Center in SF, the likely lengthy line will exactly pinpoint the store entrance for you. The shop itself is rather small and there are a few seats if you must stop to focus all of your energy on immediately consuming your sweet treat. For my first visit here, I went simple and ordered the Matcha soft serve in a waffle cone. I'm not what you would consider a big fan of M..."}
    },
    {location:"San Jose"},
    {location:"Los Angeles"},
    {location:"Chicago"},
    {location:"Palo Alto"},
    {location:"More Cities"},
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
                </div>
                <div className="mainL2">
                    <div className="reviewOfDay">
                        <h3 className="heading-tertiary">Review of the Day</h3>
                        <ReviewOfDay data={data[locationStores].reviewOfDay} />
                    </div>
                    <div className="collections"></div>
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
