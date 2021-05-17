import React, { Component } from 'react'

class FooterLinks extends Component {
    render() {
        if (!this.props.links || this.props.links.length === 0) {
            return this.props.fallback;
        } else {
            return (
                <ul>
                    {
                        this.props.links.map((item) => {
                            const {id, text, url} = item;
                            return (
                                <li key={id}><a href={url}>{text}</a></li>
                            )
                        })
                    }
                                    
                </ul>
            )}
    }
}

export default FooterLinks
