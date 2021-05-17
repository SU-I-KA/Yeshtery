import React, { Component } from 'react'
import {ProductContext} from '../context'

class Promo extends Component {

    static contextType = ProductContext;
    render() {
        const {promo} = this.context;
        return (
            <div className="container">
                <div className="promo">
                    <video controls width='1168' preload='true' poster={promo.posterImage}> 
                        <source src={promo.url} type="video/mp4" /> 
                        
                    </video>
                </div>
            </div>
        )
    }
}

export default Promo
