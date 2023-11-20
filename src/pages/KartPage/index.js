import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import kartImg from '../../images/kart.png';
import { useDispatch, useSelector } from 'react-redux';
import { AllProductState, deleteKart, kartState } from '../../reducers/products/productSlice';
import Counter from '../../reducers/counter/Counter';
import CostBtn from '../../components/CostBtn';
import './KartPage.css';

export default function KartPage() {
  const products = useSelector(AllProductState);
  const [costs, setCosts] = useState(0);
  const dispatch = useDispatch();
  const kart = useSelector(kartState);

  return (
    <div className='kart__container'>
      {
        kart.length > 0 ?
          products.map(product => {
            if(kart.includes(product.id)){
              return (
                <div className='product-in-kart'>
                  <img className='product-image' src={product.image} alt='product-image'/>
                  <div className='product-details'>
                    <p className='p1'>{product.category}</p>
                    <p className='p2'>{product.title}</p>
                    <p className='p3'>{`$ ${product.price}`}</p>
                  </div>
                  <Counter price={product.price} setCosts={setCosts} />
                  <button 
                    className='x__btn'
                    onClick={() => dispatch(deleteKart(product.id))}
                  >
                    X
                  </button>
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
        kart.length > 0 ? <CostBtn costs={costs} /> : null
      }
    </div>
  )
}
