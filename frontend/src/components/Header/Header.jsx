import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <img className="banner-img img-fluid" src={assets.homeBanner} alt="" />
                </div>
            </div>

            <div className="row about">
                <div className="col-md-12 mt-3">
                    <h3>Juice</h3>
                    <p>Our signature juices are real and Raw. All our juices are made with fruit, not concentrate and are free of artificial flavours and sugar. We bring you goodness and flavour in each bottle. Choose from packs of 1, 2, 6, 12, and even more to enjoy Raw Pressery all week long!</p>
                </div>
            </div>
        </div>
    )
}

export default Header