import React, { Component } from 'react'
import { connect } from 'react-redux'
import  CategoriaTomLin  from './CategoriaTomLin';




 class YelpTon extends Component {






  render() {



    return (
        <div className="yelpTon">
            <div className="main ">
                <h2 className="heading-secondary">Yelp Groton</h2>
                <div className="list">
                    <ul className="list__order">
                        <li className="list__order--1">San Francisco</li>
                        <li className="list__order--2">New York</li>
                        <li className="list__order--3">San Jose</li>
                        <li className="list__order--4">Los Angeles</li>
                        <li className="list__order--5">Chicago</li>
                        <li className="list__order--6">Palo Alto</li>
                        <li className="list__order--6">More Cities</li>
                    </ul>
                </div>
                <div className="rowOfCategory">
                   
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
