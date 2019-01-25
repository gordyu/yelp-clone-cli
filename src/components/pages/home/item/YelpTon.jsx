import React, { Component } from 'react'
import { connect } from 'react-redux'
import  CategoriaTomLin  from './CategoriaTomLin';
import MainCard from '../../../MainCard';

const data=[
    {location:"Groton",
        hotNnew:[
            {title:'Egg-O-Holic',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'TSAôCAA',reviews:5,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'Egg-O-Holic',reviews:5,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''}
        ]
    },
    {location:"San Francisco",
        hotNnew:[
            {title:'TSAôCAA',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'Egg-O-Holic',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
            {title:'Egg-O-Holic',reviews:4,categories:['indian','vegetarian','halal'],tag:['River West', 'Noble Square','West Town'],img:''},
        ]
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
        data[0].hotNnew.map(
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
                    <h3 className="heading-tertiary ">Hot & New Businesses</h3>
                    <div className="hotNnew">
                        {rdHotnNewList()}
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
