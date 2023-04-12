import React, { useState } from  'react';
import './Coins.css';

const CoinItem = (props) => {
  console.log(props.coins.current_price);
  const price = props.coins.current_price;
  let formattedPrice;
  if(price > 0.1){
    formattedPrice = price.toFixed(2).toLocaleString();
  }else{
    formattedPrice = price.toFixed(9).toLocaleString();
  }
  let value=props.coins.price_change_percentage_24h.toFixed(3)
  let color = value < 0 ? "red" : "rgb(28, 222, 28)";

  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt={props.coins.name}/>
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>

        <p>{formattedPrice}zł</p>
        <p style={{color:color}}>{value}%</p>
        <p className='hide-mobile'>{props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem