import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class FooterSocials extends Component {
    render() {
        // if (!this.props.socials || this.props.socials.length === 0) {
        //     return this.props.fallback;
        // } else {
            return (
                <ul>
                    {
                        this.props.socials.map((item) => {
                            const {id, name, icon, url} = item;
                            return (
                                <li key={id}>
                                    <img src={icon} alt={name} />
                                    <Link to={url}>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        // }
    }
}

export default FooterSocials
