import React from 'react'
import style from "../Styles/Heading.module.css"
import { BrowserView, MobileView } from 'react-device-detect';

const Heading = ({ mainCont, sideCont }) => {
    return (
        <div>
            <BrowserView>
                <div className={style.heading}>
                    <div>
                        <h1>{mainCont}</h1>
                        <h2>{sideCont}</h2>
                    </div>
                    <p>See All</p>
                </div>
            </BrowserView>
            <MobileView>
                <div className={style.mobileHeading}>
                    <div>
                        <h1>{mainCont}</h1>
                        <h2>{sideCont}</h2>
                    </div>
                    <p>View All</p>
                </div>
            </MobileView>
        </div>

    )
}

export default Heading