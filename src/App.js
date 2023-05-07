import './App.css';
import Banner from './Components/Banner';
import Grocery from './Components/Grocery';
import Heading from './Components/Heading';
import Navbar from './Components/Navbar';
import PromotionCarosol from './Components/PromotionCarosol';
import TodaysDeal from './Components/TodaysDeal';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (
    <div>
      <BrowserView>
        <div className="App">
          <Navbar />
          <PromotionCarosol />
          <Heading mainCont={"Today's Deals"} sideCont={"Best Deal Everyday"} />
          <TodaysDeal />
          <Banner />
          <Heading mainCont={"Order Daily Grocery"} sideCont={"Categories"} />
          <Grocery/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="App">
          <Navbar />
          <PromotionCarosol />
          <Heading mainCont={"Deals of the day"} sideCont={"Best Deal Everyday"} />
          <TodaysDeal />
          <Banner />
          <Heading mainCont={"Categories"} sideCont={""} />
          <Grocery/>
        </div>
      </MobileView>
    </div>

  );
}

export default App;
