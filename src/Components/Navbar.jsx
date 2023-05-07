import React from 'react'
import style from "../Styles/Navbar.module.css"
import { GoLocation } from 'react-icons/go';
import { IoChevronDown } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';
import { RiSearch2Line, RiShoppingCartLine } from 'react-icons/ri';
import { BrowserView, MobileView } from 'react-device-detect';

const Navbar = () => {
    return (
        <div>
            <BrowserView className={style.navbar}>
                <div className={style.navbarLeft}>
                    <img src="	https://ratnadeep.online/images/finalLogoRdp.png" alt="Logo" />
                    <div>
                        <div>
                            <GoLocation color='red' />
                            <p>DELIVERY TO</p>
                        </div>
                        <div>
                            <p>Vikrampuri Colony, Telangana, 500009.</p>
                            <IoChevronDown color='red' />
                        </div>
                    </div>
                </div>
                <div className={style.navbarRight}>
                    <div>
                        <RiSearch2Line fontSize={"1.4rem"} color='rgb(105, 105, 105)' />
                        <p>Search</p>
                    </div>
                    <div>
                        <RiShoppingCartLine fontSize={"1.4rem"} color='rgb(105, 105, 105)' />
                        <p>Cart</p>
                    </div>
                    <div>
                        <p>Sign In</p>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={style.MasterNavbarMobile}>
                    <div className={style.navbarMobile}>
                        <img src="	https://ratnadeep.online/images/finalLogoRdp.png" alt="Logo" />
                        <div>
                            <div>
                                <HiLocationMarker color='red' />
                                <p>DELIVERY TO</p>
                            </div>
                            <div>
                                <p>Vikrampuri Colony, Telangana, 500009.</p>
                                <IoChevronDown color='white' />
                            </div>
                        </div>
                        <img src="https://ratnadeep.online/_next/image?url=%2Fimages%2Fuser.svg&w=32&q=75" alt="Avatar" className={style.avatar} />
                    </div>
                    <div className={style.navbarSearch}>
                        <RiSearch2Line fontSize={"1.2rem"} color='rgb(105, 105, 105)' />
                        <p>Search for grocery items</p>
                    </div>
                </div>
            </MobileView>
        </div>

    )
}

export default Navbar