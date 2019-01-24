import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CategoriaTomLin from './CategoriaTomLin';

const  data = [
    {key:1,img:'',title:'Gyms'},
    {key:2,img:'',title:'Movers'},
    {key:3,img:'',title:'Locksmith'},
    {key:4,img:'',title:'Hotel'}
]

const rdcategores = () =>(
    data.map(item => <CategoriaTomLin key={item.key} title={item.title} />)
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
