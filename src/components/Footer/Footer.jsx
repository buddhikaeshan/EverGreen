import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="row mt-4 ftr">
                <div className="col-md-6">
                    <h2 className="mt-4 p-4">OnlyJuice</h2>
                    <p className="mt-4 p-4">"Quench your thirst with convenience! 
                        Explore our refreshing array of freshly squeezed juices, crafted with care and delivered straight to your doorstep. Sip, enjoy, repeat!"</p>
                </div>
                <div className="col-md-6 mt-4 p-4">
                    <h4>contact</h4>
                    <a className="" href="">+94 345 3456</a>
                    <a className="" href=""></a>
                    <a className="" href=""></a>
                    <a className="" href=""></a>
                </div>
            </div>
        </div>
    )
}

export default Footer