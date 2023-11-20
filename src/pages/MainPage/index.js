import React, { useEffect, useState } from 'react'
import Products from '../../reducers/products/Products';
import { categoryState, setCategory } from '../../reducers/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';

export default function MainPage() {
    const category = useSelector(categoryState);
    const dispatch = useDispatch();

    console.log(category);

    switch(category) {
        case 'all':
            return (
                <div className='main'>
                    <div className='menu'>
                        <h1>Products</h1>
                        <button className='isClicked' onClick={() => {
                            dispatch(setCategory('all'));
                        }}>모두</button>
                        <button onClick={() => dispatch(setCategory('electronics'))}>전자기기</button>
                        <button onClick={() => dispatch(setCategory('jewelery'))}>쥬얼리</button>
                        <button onClick={() => dispatch(setCategory("men's clothing"))}>남성의류</button>
                        <button onClick={() => dispatch(setCategory("women's clothing"))}>여성의류</button>
                    </div>
                    
                    <Products />
                </div>
            )
        case 'electronics':
            return (
                <div className='main'>
                    <div className='menu'>
                        <h1>Products</h1>
                        <button onClick={() => dispatch(setCategory('all'))}>모두</button>
                        <button className='isClicked' onClick={() => dispatch(setCategory('electronics'))}>전자기기</button>
                        <button onClick={() => dispatch(setCategory('jewelery'))}>쥬얼리</button>
                        <button onClick={() => dispatch(setCategory("men's clothing"))}>남성의류</button>
                        <button onClick={() => dispatch(setCategory("women's clothing"))}>여성의류</button>
                    </div>
                    
                    <Products />
                </div>
            )
        case 'jewelery':
            return (
                <div className='main'>
                    <div className='menu'>
                        <h1>Products</h1>
                        <button onClick={() => dispatch(setCategory('all'))}>모두</button>
                        <button onClick={() => dispatch(setCategory('electronics'))}>전자기기</button>
                        <button className='isClicked' onClick={() => dispatch(setCategory('jewelery'))}>쥬얼리</button>
                        <button onClick={() => dispatch(setCategory("men's clothing"))}>남성의류</button>
                        <button onClick={() => dispatch(setCategory("women's clothing"))}>여성의류</button>
                    </div>
                    
                    <Products />
                </div>
            )
        case "men's clothing":
            return (
                <div className='main'>
                    <div className='menu'>
                        <h1>Products</h1>
                        <button onClick={() => dispatch(setCategory('all'))}>모두</button>
                        <button onClick={() => dispatch(setCategory('electronics'))}>전자기기</button>
                        <button onClick={() => dispatch(setCategory('jewelery'))}>쥬얼리</button>
                        <button className='isClicked' onClick={() => dispatch(setCategory("men's clothing"))}>남성의류</button>
                        <button onClick={() => dispatch(setCategory("women's clothing"))}>여성의류</button>
                    </div>
                    
                    <Products />
                </div>
            )
        case "women's clothing":
            return (
                <div className='main'>
                    <div className='menu'>
                        <h1>Products</h1>
                        <button onClick={() => dispatch(setCategory('all'))}>모두</button>
                        <button onClick={() => dispatch(setCategory('electronics'))}>전자기기</button>
                        <button onClick={() => dispatch(setCategory('jewelery'))}>쥬얼리</button>
                        <button onClick={() => dispatch(setCategory("men's clothing"))}>남성의류</button>
                        <button className='isClicked' onClick={() => dispatch(setCategory("women's clothing"))}>여성의류</button>
                    </div>
                    
                    <Products />
                </div>
            )
        default:
            return (
                <div>Load Failed!</div>
            )
    }

}
