import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductAsync, kartState, productState, setKart } from './productSlice'
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Products = React.memo(() => {
   const products = useSelector(productState);
   const kart = useSelector(kartState);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
    dispatch(fetchProductAsync());
    console.log('products', products);
   }, [])

   // 글 자르기 함수
   const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <div className='products__container'>
        <p>Showing: {products.length} items</p>
        <div className='products__box'>
          {products.map(product => (
              <div key={product.id} className='product__box'>
                  <img 
                    className='main-product__image' 
                    src={product.image} 
                    alt='product-image'
                    onClick={() => navigate('/details', {
                      state: {
                        id: product.id,
                        category: product.category,
                        image: product.image,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                      }
                    })}
                  />
                  <div className='main-product__title'>{truncate(product.title, 16)}</div>

                  {
                    kart.includes(product.id) ? 
                      <button className='pushed-kart__btn'>장바구니에 담긴 제품</button> :
                      <button className='push-kart__btn' onClick={() => dispatch(setKart(product.id))}>장바구니에 담기</button>
                  }
                  <span className='main-product__price'>{`$ ${product.price}`}</span>
              </div>
          ))}
        </div>
        
    </div>
  )
})

export default Products;