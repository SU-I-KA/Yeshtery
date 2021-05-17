import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'
import {SectionContainer} from '../context'
import Product from './Product';

class ProductsList extends Component {

    // getDta(data) {
    //     return new Promise((resolve) =>
    //         setTimeout(() => resolve(data), 0)
    //     );
    // }
    constructor(props) {
        super(props);
        this.state = {
            category: props.context.sortBy,
            counter: props.context.initialCount || 4,
            error: {active: false, msg: ''},
            open: false,
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    componentDidUpdate(prevProps,prevState) {
      if (this.state.category !== prevState.category) {
            this.setState({
                counter: this.props.context.initialCount,
                error: {active: false, msg: ''}
            })
        }
    }

    handleToggle(){
        this.setState({
            open: !this.state.open,
        })
    }

    handleChange =(event)=>{
        const value = event.target.value;
        console.log(this.props.context.categoriesNames)
        this.setState({
            category: value,
            open: false,
        }
        ,()=> this.props.context.getProducts(value)
        )
    }

    showMore = () =>{
    let {selectedProducts} = this.props.context;
    const count = this.state.counter + 1;
    if (count > selectedProducts.length){
      return this.setState({
        error: {active: true, msg: `that's it. no more!`}
      })
    }
    else{
      return this.setState ({
        counter: count,
      })
    }
  }


    render() {
        const{category, counter} = this.state;

        return (
            <div className="products-section">
                <div className="row">
                    <Title title='our special selection' text='premium products recommended just for you' />

                    <div className="right-buttons">
                        <div className={`select-wrap ${this.state.open?'active':null}`}>
                            <ul className="default-option" onClick={this.handleToggle}>
                                <li>
                                    <div className="option">
                                        <input type="radio" name="selectedProducts" />
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
                                                    <input type="radio" name="selectedProducts" value={item} onClick={(e)=>this.handleChange(e)}/>
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
                {this.props.context.selectedProducts.length > 0 ? 
                <div className="product-grid">
                        {
                            this.props.context.selectedProducts.slice(0, counter).map((item) => {
                                return (
                                    <Product key={item.id} product={item} icons={this.props.context.icons}/>
                                )
                            })
                        }
                        
                </div> : <div className='no-more'>no products in that category</div>}

                {this.props.context.selectedProducts.length > 0 &&
                <div className="more-section">
                {this.state.error.active ? <div className='no-more'>{this.state.error.msg}</div> :
                <button className='btn-more' onClick={this.showMore}>show more</button>}
                </div>}
            </div>
        )
    }
}

export default SectionContainer(ProductsList)
