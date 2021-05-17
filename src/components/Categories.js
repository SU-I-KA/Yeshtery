import React, { Component } from 'react'
import {ProductContext} from '../context'
import Title from './Title'
import SeperatorLine from './SeperatorLine'
import { Link } from 'react-router-dom';

class Categories extends Component {
    static contextType = ProductContext;
    render() {
        const {products, getUnique} = this.context;
        
        const categories = getUnique(products, 'category');

        return (
            <div className='categories'>
                <div className="row">
                   <Title title='shop by category' text='find what you are looking for by category' />
                   <Link to="/" className='btn-viewall'>view all</Link>
                </div>
                <div className="category-list">
                    {categories.map((item, index) => {
                        const {title, text, img} = item;
                        const bgCover = {
                                    backgroundColor: 'transparent',
                                    backgroundImage: `url(${img})`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `0% 0%`,
                                    backgroundAttachment: `scroll`,
                                    backgroundSize: 'cover',
                                }
                        return(
                            <div key={index} style={bgCover} className={`category-${index + 1} single-category`}>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className="btn-explore">
                                    <Link to="/" >explore</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <SeperatorLine width='50%'/>
                
            </div>
        )
    }
}

export default Categories
