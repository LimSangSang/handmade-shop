import React, { useState } from 'react'
import { css } from '@emotion/react'
import ProductCounter from '../component/ProductCounter'
import { colors } from '../../../styles/colors'
import Image from 'next/image'

const itemCss = {
  container: css({
    width: 1200,
    borderTopWidth:2,
    borderTopStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid'
  }),
  column: css({
    width: 200
  }),
  infoColumn: css({
    width: 600
  }),
  columnContainer: css({
    height: 70,
  }),
  row: css({
    borderTopWidth:2,
    borderTopStyle: 'solid',
    borderTopColor: colors.gray,
  }),
  item: css({
    // justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 30,
    paddingBottom: 30
  }),
  infoItem: css({
    paddingTop: 30,
    paddingBottom: 30
  }),
}

interface Props {
  children: React.ReactNode
}

interface ItemProps {
  info: InfoProps,
  count: number,
  price: number,
  delivery: string
}

interface InfoProps {
  id: number,
  img: string,
  brand: string,
  name: string,
  price: number
}

interface TotalProps {
  totalCart: number,
  totalDelivery: number
}

const CartTable = ({children}: Props) => {
  return (
    <div css={itemCss.container}>
        <table css={css`border-collapse:collapse;`}>
          <thead>
            <tr css={itemCss.columnContainer}>
              <th css={itemCss.infoColumn}>상품정보</th><th css={itemCss.column}>수량</th><th css={itemCss.column}>주문금액</th><th css={itemCss.column}>배송비</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
    </div>
  )
}

CartTable.Info = (info :InfoProps) => {
  return (
    <div className='flexRow'>
      <Image src={info.img} width={110} height={110}/>
      <div className='flexColumn'>
        <span>{info.brand}</span>
        <span>{info.name}</span>
        <span>{info.price}원</span>
      </div>
    </div>
  )
}

const CartItem = ({info, count, price, delivery}: ItemProps) => {
  const [counter, setCounter] = useState(count)
  return (  
    <tr css={itemCss.row}>
      <td> 
        <div css={itemCss.infoItem}>
          <CartTable.Info id={info.id} img={info.img} brand={info.brand} price={info.price} name={info.name} />
        </div>
      </td>
      <td>
        <div css={itemCss.item}>
          <ProductCounter counter={counter} setCounter={setCounter} />
        </div>
      </td>
      <td >
        <div css={itemCss.item}>{price}</div>
      </td>
      <td >
        <div css={itemCss.item}>{delivery}</div>
      </td>
    </tr>
  )
}

const TotalCart = ({children}: Props) => {
  return (
    <div>
      <table css={css`border-collapse:collapse; width:100%;`}>
          <thead>
            <tr css={itemCss.columnContainer}>
              <th><div>총 주문금액</div></th>
              <th><div>총 배송비</div></th>
              <th><div>총 결제금액</div></th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
    </div>
  )
}

const TotalItem = ({totalCart, totalDelivery}: TotalProps) => {
  return (  
    <tr css={itemCss.row}>
      <td> 
        <div css={itemCss.item}>
          {totalCart}
        </div>
      </td>
      <td>
        <div css={itemCss.item}>
          {totalDelivery}
        </div>
      </td>
      <td>
        <div css={itemCss.item}>
          {totalCart+totalDelivery}
        </div>
      </td>
    </tr>
  )
}


CartTable.Item = CartItem
CartTable.Total = TotalCart
CartTable.TotalItem = TotalItem

export default CartTable