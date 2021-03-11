import React, { Component } from 'react'
import BT3Carusel from './BT3Carusel'
import BT3ProductList from './BT3ProductList'

export default class BT3Content extends Component {
    render() {
        return (
            <div className='container'>
                <BT3Carusel />
                <BT3ProductList />
            </div>
        )
    }
}
