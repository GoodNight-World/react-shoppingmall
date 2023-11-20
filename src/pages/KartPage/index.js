import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import kartImg from '../../images/kart.png';
import { useSelector } from 'react-redux';
import { AllProductState } from '../../reducers/products/productSlice';
import Counter from '../../reducers/counter/Counter';
import { selectCount } from '../../reducers/counter/counterSlice';
import CostBtn from '../../components/CostBtn';
import './KartPage.css';

export default function KartPage() {
  const {state} = useLocation();
  const products = useSelector(AllProductState);
  const count = useSelector(selectCount);
  const [costs, setCosts] = useState(0);

  return (
    <div className='kart__container'>
      {
        state.ids.length > 0 ?
          products.map(product => {
            if(state.ids.includes(product.id)){
              return (
                <div className='product-in-kart'>
                  <img className='product-image' src={product.image} alt='product-image'/>
                  <div className='product-details'>
                    <p>{product.category}</p>
                    <p>{product.title}</p>
                    <p>{`$ ${product.price} x 1`}</p>
                  </div>
                  <Counter price={product.price} setCosts={setCosts} />
                </div>
              )
            }
          })
          :
          <div className='empty__kart'>
            <img src={kartImg} alt='kart-image'/>
            <h1>Kart가 비었습니다.</h1>
            <p>Kart에 상품을 넣어주십시오.</p>
            <Link to='/'>계속 쇼핑하기</Link>
          </div>
      }
      {
        state.ids.length > 0 ? <CostBtn costs={costs} /> : null
      }
    </div>
  )
}
