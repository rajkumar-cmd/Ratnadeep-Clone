import React from 'react'
import style from "../Styles/Banner.module.css"
import { BrowserView, MobileView } from 'react-device-detect';

const Banner = () => {
  return (
    <div>
      <BrowserView>
        <div className={style.banner}>
          <img src="https://cdn.ratnadeep.online/undefined-section/aoewpps9eGroup%201685.webp" alt="Portable Fan" />
          <img src="https://cdn.ratnadeep.online/undefined-section/mLzfOXoXxGroup%201686.webp" alt="Pressure Cooker" />
          <img src="https://cdn.ratnadeep.online/undefined-section/TPWn4gcpoGroup%201684.webp" alt="Veggie Cutter" />
        </div>
      </BrowserView>
      <MobileView>
        <div className={style.mobileBanner}>
          <img src="https://cdn.ratnadeep.online/undefined-section/KHxHf64j5Group%201733.webp" alt="Seeds Drink" />
          <img src="https://cdn.ratnadeep.online/undefined-section/wdnVLImZDGroup%201702.webp" alt="Taste to your life" />
        </div>
      </MobileView>
    </div>

  )
}

export default Banner