import React, { Component } from 'react'
import MyHeader from '../Components/MyHeader'

export default class Home extends Component {
    render() {
        return (
            <div>
                <MyHeader navItem='visible' user = 'visible' hiring='visible'/>
                Home Page
            </div>
        )
    }
}
