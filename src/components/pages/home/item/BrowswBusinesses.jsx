import React, { Component } from 'react'
import CategoryComponetn from '../item/CategoryComponetn';
import { connect } from 'react-redux'

const data =[
  {title:'Restauracnts',img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/80b92cd513f0/assets/img/categories/72x72_restaurants.png'},
  {title:'Shopping',img:'https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/ad1f85392c04/assets/img/categories/72x72_shopping.png'},
  {title:'Nightlife',img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/4ee31d03d5b2/assets/img/categories/72x72_nightlife.png'},
  {title:'Active Life',img:'https://s3-media4.fl.yelpcdn.com/assets/srv0/homepage/7b915f332ffe/assets/img/categories/72x72_active_life.png'},
  {title:'Beauty & spas',img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/dda5bcbe7e6c/assets/img/categories/72x72_beauty.png'},
  {title:'Automotive',img:'https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/59b42d70fa94/assets/img/categories/72x72_automotive.png'},
  {title:'Home Services',img:'https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/52d0e24aea08/assets/img/categories/72x72_home_services.png'},
  {title:'More Categories',img:'https://s3-media4.fl.yelpcdn.com/assets/srv0/homepage/3110ec19fa2b/assets/img/categories/72x72_more_categories.png'},
]

export class BrowswBusinesses extends Component {

 
  

  render() {

    const rdItem =()=>(
      data.map(item => <CategoryComponetn key={item.title} title={item.title} img={item.img} />)
    )

    return (
      <div className="BrowswBusinesses">
        <div className="main">
          <h2 className="heading-secondary">Browse Businesses by Category</h2>
          <div className="grid">
            {rdItem()}
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

export default connect(mapStateToProps, mapDispatchToProps)(BrowswBusinesses)
