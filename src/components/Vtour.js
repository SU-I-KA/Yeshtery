import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Vtour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branch: 'choose Branch',
            open: false,
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    componentDidUpdate(prevProps,prevState) {
      if (this.props.store !== prevProps.store) {
            this.setState({
                branch: 'choose Branch',
            })
        }
    }

    handleToggle(){
        this.setState({
            open: !this.state.open,
        })
    }

    handleBranch = event => {
        const value = event.target.value;
        this.setState({
            branch: value,
            open: false,
        }, ()=> console.log(this.state.branch))
    }

    render() {
        const {title, logo, bg, branchs} = this.props.store;
        const bgCover = {
            backgroundColor: 'transparent',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `55% 0%`,
            backgroundAttachment: `scroll`,
            backgroundSize: 'cover',
            width: '100%'
        }
        return (
            <div style={bgCover} className="single-store">
                <div className="overlay"></div>
                <div className="branch-logo">
                    <div className="logo-img-wrap">
                        <img src={logo} alt={title}/>
                    </div>
                    <h3>{title}</h3>
                </div>
                
                <div className="row">
                    <div className={`select-wrap ${this.state.open?'active':null}`}>
                            <ul className="default-option" onClick={this.handleToggle}>
                                <li>
                                    <div className="option">
                                        <input type="radio" name="branchs" value={this.state.branch}/>
                                        <span>{this.state.branch}</span>
                                    </div>
                                </li>
                            </ul>
                            
                            <ul className="select-ul">
                                {
                                    branchs.map((item, index) =>{
                                        return (
                                            <li key={index}>
                                                <label className="option">
                                                    <input type="radio" name="branchs" value={item} onClick={(e)=>this.handleBranch(e)}/>
                                                    <span>{item}</span>
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    <div className="btn-viewall">
                        <Link to="/" >Start Shopping</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Vtour
