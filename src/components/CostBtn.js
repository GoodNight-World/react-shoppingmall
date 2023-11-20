import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteKart } from '../reducers/products/productSlice';
import { useNavigate } from 'react-router-dom';
import './CostBtn.css';

export default function CostBtn({ costs }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <div className='cost-btns'>
        <button style={{ fontWeight: "bold" }}>
            {`합계: $ ${ costs.toFixed(2) }`}
        </button>
        <button 
            onClick={() => {
                dispatch(deleteKart(-1))
                navigate('/')
            }}
        >
            계산하기
        </button>
    </div>
  )
}
