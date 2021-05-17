import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'
import SeperatorLine from './SeperatorLine'
import {SectionContainer} from '../context'
import Vtour from './Vtour';

class VirtualTours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.context.sortBy,
            open: false,
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
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
            <div className="stores">
                <div className="row">
                    <Title title='take a virtual tour' text='marketing pleasure through 360 technology' />
                    <div className="right-buttons">
                        <div className={`select-wrap ${this.state.open?'active':null}`}>
                            <ul className="default-option" onClick={this.handleToggle}>
                                <li>
                                    <div className="option">
                                        <input type="radio" name="brands" />
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
                                                    <input type="radio" name="stores" value={item} onClick={(e)=>this.handleChange(e)}/>
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
                <div className="store-grid">
                    
                        {
                            this.props.context.stores.map((item) => {
                                return(
                                    <Vtour key={item.id} store={item}/>
                                )
                            })
                        }
                </div>
                <SeperatorLine width='30%'/>
            </div>
        )
    }
}

export default SectionContainer(VirtualTours)
