import React from 'react'
import Carosol from './Carosol'
import style from "../Styles/PromotionCarosol.module.css"
import { BrowserView, MobileView } from 'react-device-detect';

const PromotionCarosol = () => {
    let content = [
        {
            id: 0,
            img: "https://cdn.ratnadeep.online/undefined-section/Eus_KKPcVGroup%201682.webp",
            flag: 1
        },
        {
            id: 1,
            img: "https://cdn.ratnadeep.online/undefined-section/EWm50M74DGroup%202177.webp",
            flag: 1
        },
        {
            id: 2,
            img: "https://cdn.ratnadeep.online/undefined-section/W-Jkso7k3Group%201689.webp",
            flag: 1
        },
        {
            id: 3,
            img: "https://cdn.ratnadeep.online/undefined-section/5wdTzpgWdGroup%201681.webp",
            flag: 1
        },
        {
            id: 4,
            img: "https://cdn.ratnadeep.online/undefined-section/oNZbzXAFWGroup%201683.webp",
            flag: 1
        }
    ]
    return (
        <div>
            <BrowserView>
                <div>
                    <Carosol content={content} />
                </div>
            </BrowserView>
            <MobileView>
                <div className={style.BannerMobile}>
                    <img src="https://cdn.ratnadeep.online/undefined-section/PSsySCHoiGroup%202177.webp" alt="banner"/>
                    <img src="https://cdn.ratnadeep.online/undefined-section/G-j446KiCGroup%201657.webp" alt="OfferBanner" />
                </div>
            </MobileView>
        </div>
    )
}

export default PromotionCarosol