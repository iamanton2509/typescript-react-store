import {NavLink} from 'react-router-dom';

const Footer = () => {
    const changeIcon: React.MouseEventHandler<HTMLImageElement> = (e) => {
        const target = e.target as HTMLImageElement;
        switch (target.getAttribute('src')) {
            case './../images/socials/facebook-light.svg':
                target.setAttribute('src', './../../images/socials/facebook-original.svg');
                break;
            case './../images/socials/instagram-light.svg':
                target.setAttribute('src', './../../images/socials/instagram-original.svg');
                break;
            case './../images/socials/tiktok-light.svg':
                target.setAttribute('src', './../../images/socials/tiktok-original.svg');
                break;
            case './../images/socials/twitter-light.svg':
                target.setAttribute('src', './../../images/socials/twitter-original.svg');
        }
    }

    const changeToDefaultIcons: React.MouseEventHandler<HTMLImageElement> = (e) => {
        const target = e.target as HTMLImageElement;
        switch (target.getAttribute('src')) {
            case './../../images/socials/facebook-original.svg':
                target.setAttribute('src', './../images/socials/facebook-light.svg');
                break;
            case './../../images/socials/instagram-original.svg':
                target.setAttribute('src', './../images/socials/instagram-light.svg');
                break;
            case './../../images/socials/tiktok-original.svg':
                target.setAttribute('src', './../images/socials/tiktok-light.svg');
                break;
            case './../../images/socials/twitter-original.svg':
                target.setAttribute('src', './../../images/socials/twitter-original.svg');
        }
    }

    return (
        <footer className="footer">
            <div className="nav-container">
                <ul className="footer-items">
                    <li className="footer-items__item">
                        <NavLink to="/career" className="footer-items__link">Careers</NavLink>
                    </li>
                    <li className="footer-items__item">
                        <NavLink to="/contacts" className="footer-items__link">Contact us</NavLink>
                    </li>
                    <li className="footer-items__item">
                        <NavLink to="/question" className="footer-items__link">Feedback</NavLink>
                    </li>
                    <li className="footer-items__item">
                        <NavLink to="/privacy" className="footer-items__link">Privacy</NavLink>
                    </li>
                </ul>
                <ul className="footer-socials">
                    <li><a href="https://www.instagram.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src='./../../images/socials/instagram-light.svg' alt="Instagram"/></a></li>
                    <li><a href="https://www.facebook.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src='./../../images/socials/facebook-light.svg' alt="Facebook"/></a></li>
                    <li><a href="https://www.tiktok.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src='./../../images/socials/tiktok-light.svg' alt="TikTok"/></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src='./../../images/socials/twitter-light.svg' alt="Twitter"/></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;