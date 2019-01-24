import React, { Component } from 'react'
import { connect } from 'react-redux'


class SearchBar extends Component {

    state={
        userLocation:'Groton, CT 06340',
        desplay1:false,
        desplay2:false
    }

    onFind=()=>{
        this.setState({desplay1:true})
        this.setState({desplay2:false})
    }

    onNear=()=>{
        this.setState({desplay1:false})
        this.setState({desplay2:true})
    }

    onMouseLeaveS =()=>{
        this.setState({desplay1:false})
        this.setState({desplay2:false})
    }


  render() {

    const {desplay1,desplay2} = this.state;
    return (
    <div  className="search--bar" onMouseLeave={this.onMouseLeaveS}>
      <div className="search--bar--top">
        <samp>Find</samp>
        <input onFocus={()=>this.onFind()}  className="input-1" type="text" placeholder="burgerrs,barcers,spas,handmen..." />
        <div className="upLine"></div>
        <samp>Near</samp>
        <input onFocus={()=>this.onNear()}  className="input-2" placeholder={this.state.userLocation} type="text" required/>
        <div className="icon"><i className="fas fa-search"></i></div>
      </div>
      <div className="search--bar--d">
        <ul className={desplay1 ? 'list' : 'list u-desplay-node' }>
            <li className="list-item--1"><i className="fas fa-utensils"></i> Restaurants</li>
            <li className="list-item--2"><i className="fas fa-lemon"></i> Breakfast & Brunch</li>
            <li className="list-item--3"><i className="fas fa-coffee"></i> Coffee & Tea</li>
            <li className="list-item--4"><i className="fas fa-truck"></i> Delivery</li>
            <li className="list-item--5"><i className="fab fa-apple"></i> Takeout</li>
        </ul>
        <ul className={desplay2 ? 'list2' : 'list2 u-desplay-node' }>
            <li className="list-item--1"><i className="fas fa-location-arrow"></i> Current Location</li>
            <li className="list-item--2"><i className="fas fa-map-pin"></i> Groton, CT</li>
        </ul>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
