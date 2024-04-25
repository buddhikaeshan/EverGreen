import logo from './logo.png';
import logoore from './logoore.png';
import mango from './1.jpg';
import watermelon from './2.jpg';
import banana from './3.jpg';
import loginBack from './back.png';
import homeBanner from './banner.jpg';
import addIconGreen from './add_icon_green.png'
import addIconWhite from './add_icon_white.png'
import removeIconRed from './remove_icon_red.png'
import closeIcon from './cross_icon.png'
import { Rss } from 'phosphor-react';


export const assets = {
    logo,
    logoore,
    mango,
    watermelon,
    banana,
    loginBack,
    homeBanner,
    addIconGreen,
    addIconWhite,
    removeIconRed,
    closeIcon
}

export const menulist = [
    {
        menuName: "Raw Refreshers"
    },
    {
        menuName: "Milkshakes"
    },
    {
        menuName: "Iced Green tea"
    },
    {
        menuName: "Smoothies"
    },
]

export const foodlist=[
    {
        _id:"1",
        name:"Mango Smoothie",
        image:mango ,
        price:250,
        description:"",
        category:"Smoothies"
    },{
        _id:"2",
        name:"Watermelon Smoothie",
        image:watermelon ,
        price: 250,
        description:"",
        category:"Smoothies"
    },{
        _id:"3",
        name:"Banana Milkshake",
        image:banana ,
        price: 250,
        description:"",
        category:"Milkshakes"
    },{
        _id:"4",
        name:"Green tea",
        image: banana,
        price: 250,
        description:"",
        category:"Iced Green tea"
    },{
        _id:"5",
        name:"Raw Refreshers",
        image:banana ,
        price: 250,
        description:"",
        category:"Raw Refreshers"
    },{
        _id:"6",
        name:"Banana Milkshake",
        image:banana ,
        price: 250,
        description:"",
        category:"Raw Refreshers"
    }
]
