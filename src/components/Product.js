import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full: [],
            empty: []
        };
        this.makeArray = this.makeArray.bind(this)
    }
    
    makeArray(){
        let temp = [];
        let empty = [];
        for (let i = 0; i < this.props.product.rate; i++) {
            temp.push(i);
        }
        for (let j = 0; j < 5 - this.props.product.rate; j++) {
            empty.push(j);
        }
        this.setState({
            full: temp,
            empty: empty,
        })
    }

    
    componentDidMount() {
        this.makeArray()
    };

    render() {
        const {title, image, price, brand, rate, pickup} = this.props.product;
        return (
            <div className="single-product">
                <div className="img-container">
                    <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="row">
                    <div className="price">{price.value} <span>{price.symbol}</span></div>
                    <img src={brand.img} alt={title} />
                </div>
                <div className="rate-wrap">
                    <div className="stars">
                    {
                        this.state.full.map((s, index)=>{
                            return(
                            <img src={this.props.icons.star} key={index} alt='star'/>
                            )
                        })
                    }
                    {
                        this.state.empty.map((s, index)=>{
                            return(
                                <img src={this.props.icons.emptyStar} key={index} alt='star'/>
                            )
                        })
                    }
                    </div>
                    <div className="rate">{rate} of 5</div>
                </div>
                <div className="pickup">pickup from: <span>{pickup}</span></div>
            </div>
        )
    }
}

export default Product
