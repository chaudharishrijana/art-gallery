import React from 'react'
import './Footers.css'

 const Footers = () => {
  return (
    <div  className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>
                    <h4>For Buyers</h4>
                    <a href="/artprints">
                        <p>Art prints</p>
                    </a>
                    <a href="/buyerfaq">
                        <p>Buyer FAQ</p>
                    </a>
                    <a href="/artinformation">
                        <p>Art Information</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>For Artists</h4>
                    <a href="/whysell">
                        <p>Why sell</p>
                    </a>
                    <a href="/Artisthandbook">
                        <p>Artist Handbook</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>Artistry Hub</h4>
                <a href="/gallery">
                        <p>Gallery</p>
                    </a>
                    <a href="/shop">
                        <p>Shop</p>
                    </a>
                </div>
            </div>
            </div>
            </div>
  );
};
export default Footers;