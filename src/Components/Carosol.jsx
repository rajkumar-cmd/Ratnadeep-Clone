import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from "../Styles/Carosol.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import DealsOfTheDay from './DealsOfTheDay';

const Carosol = ({ content }) => {
    let [flag, setFlag] = React.useState(0);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    const responsive2 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    }
    React.useEffect(() => {
        if (content[0].flag == 1) {
            setFlag(1)
        }
    }, [])

    return flag ? (
        <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2500}
            infinite={true}
            className={style.promo}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
            {content.map((item) => (
                <div key={item.id}>
                    <img src={item.img} alt="img" width={"510rem"} />
                </div>
            ))}
        </Carousel>
    ) : (
        <div>
            <BrowserView>
                <Carousel
                    responsive={responsive2}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    infinite={true}
                    className={style.promo}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    {content.map((item) => (
                        <div className={style.TodayCarosol}>
                            <div key={item.id}>
                                <div className={style.topToday}>
                                    <p>₹{item.saving}.00 OFF</p>
                                    <img src="https://ratnadeep.online/_next/image?url=%2Fimages%2Fheart.svg&w=32&q=75" alt="" />
                                </div>
                                <img src={item.img} alt="img" width={"200rem"} />
                                <p className={style.TodayName}>{item.name}</p>
                                <p className={style.TodayDis}>{item.qty}</p>
                                <div className={style.TodayPrice}>
                                    <div>
                                        <p>₹{item.price}.00</p>
                                        <p>₹{item.price + item.saving}.00</p>
                                    </div>
                                    <p>Add</p>
                                </div>
                                <p className={style.TodaySaving}>SAVING ₹{item.saving}.00</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </BrowserView>
            <MobileView>
                <Carousel
                    responsive={responsive2}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    infinite={true}
                    className={style.promoMobile}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    {content.map((item) => (
                        <div className={style.TodayCarosolMobile}>
                            <div key={item.id}>
                                <DealsOfTheDay imgs={item.img} saving={item.saving}/>
                                <p className={style.TodayNameMobile}>{item.name}</p>
                                <p className={style.TodayDisMobile}>{item.qty}</p>
                                <div className={style.TodayPriceMobile}>
                                    <div>
                                        <p>₹{item.price}.00</p>
                                        <p>₹{item.price + item.saving}.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </MobileView>
        </div>
    )
}

export default Carosol