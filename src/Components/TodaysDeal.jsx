import React from 'react'
import Carosol from './Carosol'

const TodaysDeal = () => {
    let content=[
        {
            img:"https://cdn.ratnadeep.online/product/thumbnail/Del-Monte-Tomato-Ketchup-500G-Spout-Pack-1.jpg",
            name:"Del Monte Tomato Ketchup Spout Pack 500g",
            price:69,
            saving:26,
            qty:"500 g",
            flag:0
        },
        {
            img:"https://cdn.ratnadeep.online/product/thumbnail/Del-Monte-Eggless-Mayonnaise-900G-Spout-Pack-1.jpg",
            name:"Delmonte Eggless Mayonnaise Spout Pack 900g",
            price:188,
            saving:31,
            qty:"900 g",
            flag:0
        },
        {
            img:"https://cdn.ratnadeep.online/product/thumbnail/Britannia-Nutri-Choice-Digestive-Hi-Fibre1Kg-1.jpg",
            name:"Britannia Nutri Choice Digestive Hi-Fibre 1Kg",
            price:175,
            saving:24,
            qty:"1 kg",
            flag:0
        },
        {
            img:"https://cdn.ratnadeep.online/product/thumbnail/Reeth-Royal-Authentic-Sona-Masuri-Rice-25Kg-1.jpg",
            name:"Sri Anmol Royal Authentic Sona Masuri Rice 26Kg",
            price:1350,
            saving:210,
            qty:"26 kg",
            flag:0
        },
        {
            img:"https://cdn.ratnadeep.online/product/thumbnail/Fun-Foods-Peanut-Butter-Crunchy-925G-1.jpg",
            name:"Dr. Oetker Funfoods Peanut Butter Crunchy 925g",
            price:274,
            saving:25,
            qty:"925 g",
            flag:0
        },
        {
            img:"https://cdn.ratnadeep.online/product/thumbnail/Kelloggs-Cornflakes-Honey-And-Almond-1Kg-1.jpg",
            name:"Kelloggs Cornflakes Honey And Almond 1Kg",
            price:500,
            saving:115,
            qty:"1 kg",
            flag:0
        }
    ]
  return (
    <div>
        <Carosol content={content}/>
    </div>
  )
}

export default TodaysDeal