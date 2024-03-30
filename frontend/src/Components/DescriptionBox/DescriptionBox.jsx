import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate the buying and selling of products or services over the internet. It serves as a virtual marketplace where business ans individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their convenience, accesibility and the global reach they offer.
                    Ecommerce website typically display products or services along with detailed descriptions, images, prices and any available variations (e.g. sizes, colors). Each product usually has its own dedicated page with relevent information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox