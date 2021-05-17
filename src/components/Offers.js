import React, { Component } from 'react'
import Title from './Title'
import SeperatorLine from './SeperatorLine'
import {SectionContainer} from '../context'
import {Link} from 'react-router-dom'


class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.context.sortBy,
            open: false,
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            open: !this.state.open,
        })
    }

    handleChange =(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        console.log(this.props.context.categoriesNames)
        this.setState({
            category: value,
            open: false,
        }
        ,()=> this.props.context.filterItems(name, value)
        )
    }

    render() {
        const{category} = this.state;

        return (
            <div className="offers">
                <div className="row">
                    <Title title='best offers' text='check out the latest discounts' />
                    <div className="right-buttons">
                    { category &&
                        <div className={`select-wrap ${this.state.open?'active':null}`}>
                            <ul className="default-option" onClick={this.handleClick}>
                                <li>
                                    <div className="option">
                                        <input type="radio" name="offers" />
                                        <span>{category && category}</span>
                                    </div>
                                </li>
                            </ul>
                            
                            <ul className="select-ul">
                                {
                                    this.props.context.categoriesNames.map((item, index) =>{
                                        return (
                                            <li key={index}>
                                                <label className="option">
                                                    <input type="radio" name="offers" value={item} onClick={(e)=>this.handleChange(e)}/>
                                                    <span>{item}</span>
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                    <div className="btn-viewall">
                    <Link to="/" >view all</Link>
                    </div>
                    </div>
                </div>
                <div className="offer-grid">
                        {
                            this.props.context.offers.map((item) => {
                                const {id, title, description, ads_img} = item;
                                const bgCover = {
                                    backgroundColor: 'transparent',
                                    backgroundImage: `url(${ads_img})`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `0% 0%`,
                                    backgroundAttachment: `scroll`,
                                    backgroundSize: 'cover',
                                }
                                return (
                                    <div className="single-offer" key={id} style={bgCover}>
                                        <div className="shadow">
                                        </div>
                                        <div className="text-offer">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
                <SeperatorLine width='70%'/>
            </div>
        )
    }
}

export default SectionContainer(Offers)
