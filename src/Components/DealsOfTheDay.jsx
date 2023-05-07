import React from 'react'
import style from "../Styles/DealsMobile.module.css"

const DealsOfTheDay = ({ imgs, saving }) => {
    return (
        <div className={style.main}>
            <div>
                <p>{saving}.00% OFF</p>
            </div>
            <img src={imgs} alt="" />
            <div>
                <p>+</p>
            </div>
        </div>
    )
}

export default DealsOfTheDay