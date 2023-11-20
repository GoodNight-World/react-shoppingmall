import React from 'react'

export default function CostBtn({ costs }) {
  return (
    <div className='cost-btns'>
        <button>{`합계: $ ${ costs.toFixed(2) }`}</button>
        <button>계산하기</button>
    </div>
  )
}
