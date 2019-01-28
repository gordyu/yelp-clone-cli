import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CategoriaTomLin from './CategoriaTomLin';

const  data = [
    {key:1,img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/dc800fc2cf62/assets/img/categories/services_promotion/images/massage.jpg',title:'Massage'},
    {key:2,img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/0ef04d67fd2c/assets/img/categories/services_promotion/images/mobilephonerepair.jpg',title:'Phone Repair'},
    {key:3,img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/492f86d06b50/assets/img/categories/services_promotion/images/locksmiths.jpg',title:'Locksmith'},
    {key:4,img:'https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/8eef8039d48a/assets/img/categories/services_promotion/images/gyms.jpg',title:'Gyms'}
]

const rdcategores = () =>(
    data.map(item => <CategoriaTomLin key={item.key} img={item.img} title={item.title} />)
)

 class Best extends Component {


  render() {
    return (
      <div className="best">
        <h2 className="heading-secondary">Find the Best Businesses in Town</h2>

        <div className="rowOfCategory">
            {rdcategores()} 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Best)
