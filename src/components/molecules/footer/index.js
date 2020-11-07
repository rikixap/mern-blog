import React from 'react';
import "./footer.scss";
import { LogoKabayan, ICTwitter, ICInstagram, ICTelegram, ICDiscord, ICGithub, ICFacebook } from '../../../assets';

const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}
const Footer = () => {
    return(
        <div>
            <div className="footer">
            <div>
                <img src={LogoKabayan} alt="logo" className="logo"/>
            </div>
            <div className="social-wrapper">
                <Icon img={ICFacebook}/>
                <Icon img={ICTwitter}/>
                <Icon img={ICInstagram}/>
                <Icon img={ICTelegram}/>
                <Icon img={ICDiscord}/>
                <Icon img={ICGithub}/>
            </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}
export default Footer;