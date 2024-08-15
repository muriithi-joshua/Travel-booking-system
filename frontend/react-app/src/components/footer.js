import React from 'react';
import './Styles/footer.css';
import HeadoutLogo from './Images/headout.png';
import Twitterlogo from './Images/twitter-connect.png';
import Facebooklogo from './Images/fb-connect.png';
import Pinterestlogo from './Images/pinterest-connect.png';
import Instagramlogo from './Images/instagram-connect.png';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src={HeadoutLogo} alt="Headout" />
        <p>Globetrotter is building the future of how we experience our cities.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px'
          }}
        >
          <br></br>
          Made by GMC Group II:
        </p>
        <p>Myra</p>
        <p>Alvin</p>
        <p>Leon</p>
        <p>Raymond</p>
        <p>Joshua</p>
<br></br>

        <p>&copy; Globetrotter Inc.</p>
      </div>
      <div className="column-two">
        <h3>Cities</h3>
        <ul>
          <li>New York</li>
          <li>Las Vegas</li>
          <li>Rome</li>
          <li>Paris</li>
          <li>London</li>
          <li>Dubai</li>
          <li>Barcelona</li>
        </ul>
      </div>
      <div className="column-three">
        <h3>About us</h3>
        <ul>
          <li>About Globetrotter</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Usage</li>
        </ul>
      </div>
      <div className="column-four">
  <h3>Contact</h3>
  <p>Feel free to get in touch:</p>

  <div className="social-media-contact">
    <img
      src={Twitterlogo}
      className="social-connect"
      alt="Connect with us on Twitter"
    />
    <img
      src={Facebooklogo}
      className="social-connect"
      alt="Connect with us on Facebook"
    />
    <img
      src={Pinterestlogo}
      className="social-connect"
      alt="Connect with us on Pinterest"
    />
    <img
      src={Instagramlogo}
      className="social-connect"
      alt="Connect with us on Instagram"
    />
  </div>
</div>
    </div>
  </div>
);

export default Footer;
