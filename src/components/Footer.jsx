import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-box">
                    <h2>Abaya Shop</h2>
                    <p>
                        Discover elegant hijabs and timeless abayas designed
                        with comfort, quality, and modest fashion in mind.
                    </p>
                </div>
                <div className="footer-box">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h3>Collections</h3>
                    <ul>
                        <li><a href="#">Premium Hijabs</a></li>
                        <li><a href="#">Luxury Abayas</a></li>
                        <li><a href="#">Modest Dresses</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h3>Contact Us</h3>
                    <p>
                        <i className="fas fa-location-dot"></i>
                        Karachi, Pakistan
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>
                        info@modestmuse.com
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>
                        +92 300 1234567
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2026 <span>Modest Muse</span>. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
