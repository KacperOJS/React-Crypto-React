import React, { useState } from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import {Link} from 'react-router-dom';
import Coin from '../routes/Coin';
import './searchcoin.css';


const Coins = (props) => {
    const[query,setQuery]= useState("")
  return (
    <div className='container'>
        <div>
             <div className='search-bar'>
          <input 
            type='text'
            onChange={(e)=>setQuery(e.target.value)}
            />
    </div>
        </div>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>
            {props.coins.filter((value)=>{
                if(query ===""){
                    return value
                }else if(
                    value.name.toLowerCase().includes(query.toLowerCase())
                ){
                    return value;
                }
                    
                
            }).map(coins =>{
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                    <CoinItem coins={coins} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins