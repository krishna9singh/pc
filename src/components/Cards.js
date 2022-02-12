import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Demo Videos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Maths'
              label='Rajat Sir'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Physics'
              label='Teacher Name'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Chemistry'
              label='Teacher Name'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Biology'
              label='Teacher Name'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Commerce'
              label='Teacher Name'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
