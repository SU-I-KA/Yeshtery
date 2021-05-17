import React, { Component } from 'react'
import {SectionContainer} from '../context'
import Title from './Title'
import SeperatorLine from './SeperatorLine'
import {Link} from 'react-router-dom'

class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: {},
            category: props.context.sortBy,
            open: false,
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    static getDerivedStateFromProps(nextProps) {    
        return {
            featured: nextProps.context.featured,
        }
    }

    handleChange =(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            category: value,
            open: false,
        }
        ,()=> this.props.context.filterItems(name, value)
        )
    }

    handleToggle(){
        this.setState({
            open: !this.state.open,
        })
    }

    handleClick = (item) =>{
        this.props.context.getFeatured(item)
    };

    render() {
        const{category} = this.state;
        if(!this.state.featured){
            return (<div>loading...</div>)
        }
        return (
            <div className="brands-section">
                <div className="row">
                    <Title title='shop by brand' text='explore products by your favourite brands' />
                    <div className="right-buttons">
                        <div className={`select-wrap ${this.state.open?'active':null}`}>
                            <ul className="default-option" onClick={this.handleToggle}>
                                <li>
                                    <div className="option">
                                        <input type="radio" name="brands" />
                                        <span>{category}</span>
                                    </div>
                                </li>
                            </ul>
                            
                            <ul className="select-ul">
                                {
                                    this.props.context.categoriesNames.map((item, index) =>{
                                        return (
                                            <li key={index}>
                                                <label className="option">
                                                    <input type="radio" name="brands" value={item} onClick={(e)=>this.handleChange(e)}/>
                                                    <span>{item}</span>
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    <div className="btn-viewall">
                    <Link to="/" >view all</Link>
                    </div>
                    </div>
                </div>
                <div className="brand-banner">
                    <div className="text-container">
                        <h3>{this.state.featured.title}</h3>
                        <img src={this.state.featured.logo} alt={this.state.featured.title} />
                        <p>{this.state.featured.slogan}</p>
                        <div className="btn-shop">
                            <Link to="/">shop now</Link>
                        </div>
                        
                    </div>
                    <div className="brand-img-container">
                        <img src={this.state.featured.banner} alt={this.state.featured.title} />
                    </div>
                </div>
                <div className="brand-grid">
                        {
                            this.props.context.brands.map((item) => {
                                const {id, title, logo} = item;
                                return (
                                    <div className="single-brand" key={id} onClick={()=>this.handleClick(item)}>
                                        <img src={logo} alt={title}/>
                                        <p>{title}</p>
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

export default SectionContainer(Brands)
