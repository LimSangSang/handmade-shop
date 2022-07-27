import React from 'react'
import BuyBtnContainer from '../../public/components/button/BuyBtnContainer'
import CartTable from '../../public/components/cart/CartTable'
import Category from '../../public/components/category/Category'
import Header from '../../public/components/header/Header'
import { dummy_cart } from '../../public/dummy/dummy_list'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div>
        <Header />
        <div className='flexRow'>
        <Category />
        <div>
          <CartTable>
              {dummy_cart.map(item => <CartTable.Item info={item.info} price={item.price} count={item.count} delivery={item.delivery} />)}      
          </CartTable>
          <CartTable.Total>
            <CartTable.TotalItem totalCart={14000} totalDelivery={3000} />
          </CartTable.Total>   
          <BuyBtnContainer>
            <BuyBtnContainer.LinkButton value='지금 주문하기' background='black' color='white' width='50%' height='50px'  />
            <BuyBtnContainer.LinkButton value='쇼핑 계속하기' background='#ebebeb' color='black' width='50%' height='50px'/>
          </BuyBtnContainer>
        </div> 
      </div>
    </div>
  )
}

export default Cart