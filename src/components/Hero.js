import React, { Component } from 'react'

import {ProductContext} from '../context'

export class Hero extends Component {

    static contextType = ProductContext;

    render() {

        const {headerData} = this.context;
        const {image, title, text} = headerData.banner;

        const styleBg = {
            backgroundColor: 'transparent',
            backgroundImage: `url(${image})`,
            backgroundBlendMode: 'darken',
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `50% 0%`,
            backgroundAttachment: `scroll`,
            backgroundSize: 'cover',
            width: `100%`
        }

        this.handleSubmit = e => {
            // prevent default just for now
            e.preventDefault();
        };
        
        return (
            <header style={styleBg}>
                <div className="container">
                    <div className="search-group">
                        <div className="text">
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-control">
                                    <input className='input-text' type="text" name="" placeholder='What are you looking for?' id=""/>
                                </div>
                                
                                <div className="form-control">
                                    <button className='btn-search'>search</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero
