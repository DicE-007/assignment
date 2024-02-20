import React from 'react'
import { Person, myContextType } from '../interface/interface'
import { imageApi } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { MyContext } from "../contextapi/contextapi";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./card.css";

interface personDetails {
  person: Person;
}

const Card: React.FC<personDetails> = ({ person }) => {
  const { isExist, selectFav } = useContext<myContextType>(MyContext);
  const { name, hair_color, gender, skin_color, vehicles } = person;
  const backgroundColor = (hair_color !== 'n/a' && hair_color !== 'none') ? hair_color.split(',')[0] : 'gray';
  const _isExist = isExist(person);

  const onClickHandler = () => {
    selectFav(person);
  }

  return (
    <div className={`card ${hair_color.toLowerCase() === 'black' ? 'black-text' : 'white-text'}`} style={{ backgroundColor, padding: '10px', borderRadius: '5px' }}>
      <div className='userLike' onClick={onClickHandler}>
        <FontAwesomeIcon icon={faHeart} style={{ color: _isExist ? "red" : "black" }} />
      </div>
      <div className='content'>
        <div className='img'>
          <img src={imageApi} alt={name} />
        </div>
        <div className='details'>
          <div className='left'>
            <p>Name:{name}</p>
            <p>Hair Colour:{hair_color}</p>
            <p>Sex:{gender}</p>
          </div>
          <div className='right'>
            <p>Skin:{skin_color}</p>
            <p> Vehicles:{vehicles.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
