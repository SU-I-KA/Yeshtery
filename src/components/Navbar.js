import React, { Component, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

import { ProductContext } from '../context'

// import Hero from './Hero'
const Hero = lazy(() => import('./Hero'))

export default class Navbar extends Component {

  static contextType = ProductContext;

  render() {
    const {newestOffer, headerData, navLinks, icons} = this.context;

    return (
      <>
      <div className="navbar-container">
        <div className="top-section">
          <div className="container">
            <div className="row">
              <div className="offer">
                <div className="row">
                <FaAngleLeft />
                <h3>{newestOffer.text}<Link to={newestOffer.url}> shop now</Link></h3>
                
                <FaAngleRight />
                </div>
              </div>
              <div className="contacts">
                {
                  headerData.topSection.map((item)=>{
                    const {id, url, text, icon} = item;
                    return (
                      <div key={id} className="contact-item">
                        <img className ='icon' src={icon} alt={text} />
                        <Link to={url}>{text}</Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="med-section">
          <div className="container">
            <div className="row">
              <div className="left-col">
                <div className="ham">
                  <img src={icons.ham} alt="yeshtery" />
                </div>
                <Link to="/Yeshtery">
                  <img src={headerData.logo} alt="logo" className='logo' />
                </Link>
              </div>
              <div className="right-col">
                {
                  headerData.medSection && headerData.medSection.map((item)=>{
                    const {id, url, text, icon} = item;
                    return (
                      <div key={id} className="nav-item">
                        <img src={icon} alt={text} />
                        <Link to={url}>{text}</Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-links">
          <div className="container">
            <div className="row">
              {
                navLinks.map((link)=>{
                  const {id, url, text, active} = link;
                  return(
                    <Link to={url} key={id} className={`nav-link ${active && 'active'}`}>{text}</Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className='loading'>Loading....</div>}>
        <Hero />
      </Suspense>
      </>
    );
  }
}
