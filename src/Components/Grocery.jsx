import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import style from "../Styles/Grocery.module.css"

const Grocery = () => {
    let items = [
        {
            img: "https://cdn.ratnadeep.online/undefined-section/WK-oNriPVGroup%20928.webp",
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/yc4beEiQJGroup%20927.webp",
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/QeiooH9zKGroup%20889.webp",
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/bhaGWL7qyGroup%20890.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/oD64sC7PVGroup%20891.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/AUb4NO5k_Group%20913.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/ZcohXNGsaGroup%20914.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/YlXq6202BGroup%20915.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/7Ccrsdd1oGroup%20895.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/H5Ge6YDAPGroup%20909.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/wnK5ZcwLEGroup%20897.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/krHj0MqkQGroup%20900.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/VGjJfZAaqGroup%20899.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/1f5EYNAplGroup%20898.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/4onXGCcB9Group%20903.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/NamKLlEgkGroup%20902.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/PD4eYrpuxGroup%20901.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/PT5OgPGEFGroup%20910.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/p8o3dBWZAGroup%20905.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/k2WBdMzgkGroup%20906.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/taKFemRd3Group%20926.webp"
        },
        {
            img: "https://cdn.ratnadeep.online/undefined-section/SnzRmf2EGGroup%20925.webp"
        }
    ]
    return (
        <div>
            <BrowserView>
                <div className={style.grocery}>
                    {items.map((item) => (
                        <div>
                            <img src={item.img} alt={item.img} />
                        </div>
                    ))}
                </div>
            </BrowserView>
            <MobileView>
                <div className={style.groceryMobile}>
                    {items.map((item) => (
                        <div>
                            <img src={item.img} alt={item.img} />
                        </div>
                    ))}
                </div>
            </MobileView>
        </div>
    )
}

export default Grocery