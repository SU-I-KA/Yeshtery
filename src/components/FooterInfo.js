import React, { Component } from 'react'

class FooterInfo extends Component {
    render() {
        if (!this.props.info || this.props.info.length === 0) {
            return this.props.fallback;
        } else {
            return (
                <>
                    <div className="rights">
                    <p>{this.props.info.rights}</p></div>
                    <ul>
                        {
                            this.props.info.imgs.map((item, index) =>{
                                return (
                                <li key={index}><img src={item} alt='pay method' /></li>
                                )
                            } )
                        }
                    </ul>
                    <div className='powered-by'>
                        <p>powered by</p> 
                        <img src={this.props.info.poweredBy.logo} alt="nasnav" />
                    </div>
                </>
            )
        }
    }
}

export default FooterInfo
