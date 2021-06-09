import React from 'react';
import './card.style.css';


export const Card = (props)=>{
    return(

        <div className='card-container'>
            <img alt='district' src={`https://robohash.org/${props.district.id}?set=set2&size=180x180`} />
          <h2>{props.district.name}</h2>
          <h5>{props.district.email}</h5>

    </div>
        )
}