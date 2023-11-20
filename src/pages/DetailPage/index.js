import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { kartState, setKart } from '../../reducers/products/productSlice';
import './DetailPage.css';

export default function DetailPage() {
  const {state} = useLocation();
  const kart = useSelector(kartState);
  const dispatch = useDispatch();
  console.log(state);


  return (
    <div className='details'>
      <img className='details-product__image' src={state.image} />
      <div className='details-product'>
        <div className='details-category'>{state.category}</div>
        <div className='details-title'>{state.title}</div>
        <div className='details-price'>{`$ ${state.price}`}</div>
        <div className='details-description'>{state.description}</div>
        {kart.includes(state.id) ? 
          <button className='isPushed__button'>장바구니에 담긴 제품</button> :
          <button className='details__btn' onClick={() => dispatch(setKart(state.id))}>장바구니에 담기</button>
        }
        <button className='details__btn'>장바구니로 이동</button>
      </div>
    </div>
  )
}
