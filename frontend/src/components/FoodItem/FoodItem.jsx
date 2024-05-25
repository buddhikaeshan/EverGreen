import React, { useContext } from 'react'
import './FoodItem.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import { assets } from '../../assets/assets';
import { MenuContext } from '../../context/MenuContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const {cartItems,addToCart,removeFromCart,url}=useContext(MenuContext)

    return (

        <div className="food-item">
            <div className="col-md">
                <div className="card crd">
                    <div id="salesLastYear">
                        <div className="row mt-2">
                            <div className="col- img-pos">
                                <img className="crd-img img-fluid" src={url+"/images/"+image} alt="" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md">
                                <div className="card-body pt-0">
                                    <div className="text-center">
                                        <p className="card-title mb-2">{name}</p>
                                        <p className='mb-0 food-p'>({description})</p>
                                        <h4 className="mb-0 food-p">Rs.{price}</h4>
                                        <div className="food-item-counter-pos">
                                        {!cartItems[id]
                                            ? <img className='add' onClick={() => addToCart(id)} src={assets.addIconWhite} alt="" />
                                            : <div className='food-item-counter'>
                                                <img onClick={()=>removeFromCart(id)} src={assets.removeIconRed} alt="" />
                                                <p>{cartItems[id]}</p>
                                                <img onClick={()=>addToCart(id)} src={assets.addIconGreen} alt="" />
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem