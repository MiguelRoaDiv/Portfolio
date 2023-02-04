import React from 'react'
import Cards from './Cards'
import Sabujcha from '../img/sabujcha.png'
import ZShop from '../img/zshop.png'
import Cripto from '../img/cripto.png'


const cards = [
    {
        id: 1,
        title: 'Sabujcha',
        image: Sabujcha,
        url: 'https://sabujchahome.netlify.app'
    },
    {
        id: 2,
        title: 'ZShop',
        image: ZShop,
        url: 'https://zshopmr.netlify.app'
    },
    {
        id: 3,
        title: 'Cripto',
        image: Cripto,
        url: 'https://cripto2.netlify.app'
    }
]

function Card() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {
                cards.map( card => (
                    <div className="col-md-4" key={card.id} >
                           <Cards title={card.title} imageSource={card.image} url={card.url}/>    
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Card
