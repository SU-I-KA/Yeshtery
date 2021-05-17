import React, { Component, lazy, Suspense } from 'react'
import {ProductContext} from '../context'
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
// import {FiSend} from 'react-icons/fi'

// import FooterSocials from './FooterSocials';
const FooterSocials = lazy(() => import('./FooterSocials'));

class Footer extends Component {

    static contextType = ProductContext;

    render() {
        const {footer, icons} = this.context;

        // const fLinks = footer.footerLinks? (
        //     footer.footerLinks.map((item) => {
        //         const {id, text, url} = item;
        //         return (
        //             <li key={id}><a href={url}>{text}</a></li>
        //         )
        //     })) : (
        //         <div className="loading">wait! just loading...</div>
        //     )
        
        
        return (
            <div className="footer">
                <div className="container">
                <div className="footer-top-section">
                    <div className="info">
                        <img src={footer.logo} alt="logo" />
                        <h4>{footer.first_text}</h4>
                        <p>{footer.second_text}</p>
                        <h4>{footer.third_text}</h4>

                    </div>
                    <div className="footer-links">
                        <div className="row">
                            <div className="form-section">
                            <form action="">
                                <label htmlFor="">Subscribe to our newsletter</label>
                                <div className="form-group">
                                    <input className='input-text' type="text" name=""  placeholder='enter your mail'/>
                                    <button className='btn-subscribe'><img src={icons.subscribe} alt="send" className='send'/><span>subscribe</span></button>

                                    {/* <button type="submit" className='btn-subscribe'><FiSend className='send'/><span>subscribe</span></button> */}
                                </div>
                                
                            </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="terms-links">
                                <FooterLinks links={footer.footerLinks} fallback={"Wait! just Loading..."}/>
                            </div>
                            <div className="socials">
                                <Suspense  fallback={"don't go anywhere! just Loading..."}>
                                    <FooterSocials socials={footer.socials}/>
                                </Suspense>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <FooterInfo info={footer.info} fallback={"Wait! just Loading..."}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer
