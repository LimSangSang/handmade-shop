import NextImage from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { dummy_item } from '../../public/dummy/dummy_list' 
import Image from 'next/image'
import { css } from '@emotion/react'
import Header from '../../public/components/header/Header'
import AutoHeightImage from '../../public/dummy/AutoHeightImage';
import ProductCounter from '../../public/components/component/ProductCounter';
import { useState } from 'react';
import Button from '../../public/components/button/BuyBtnContainer';
import BuyBtnContainer from '../../public/components/button/BuyBtnContainer';

const Product = () => {
  const [counter, setCounter]=useState(1)
  const router = useRouter()
  const { id } = router.query

  const itemCss = {
    body: css({
        maxWidth:1200,
    }),
    info: css({
      display: 'flex',
      flexDirection:'row',
      width: '100%',
      maxWidth:1300,
      minWidth: 900,
    }),
    brand: css({
      fontSize:23,
      fontWeight: 'bold',
    }),
    title: css({
      width: 100,
      // fontWeight:'bold'
    }),
    border: css({
      borderWidth:1,
      borderColor:'red',
      borderStyle:'solid'
    }),
}

  return (
    <div>
      <Header />
      <div css={css`display:flex; flex-direction:column; align-items:center; justify-content:center; margin-right:10%; margin-left: 10%;`}>
        <div css={itemCss.info}>
          <div css={css`width: 50%;`}>
            <Image src={dummy_item.thumbnail} width={500} height={500} layout='responsive' />
          </div>
          <div css={css`width: 50%; margin-left:50px;`}>
            <p css={itemCss.brand}>{dummy_item.name}</p>
            <p>{dummy_item. brand}</p>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className='flexRow'>
              <div css={itemCss.title}>가격</div>
              <div>{dummy_item.price} 원</div>
            </div>

            <div className='flexRow'>
              <div css={itemCss.title}>신규회원가</div>
              <div>7000 원</div>
            </div>

            <div className='flexRow'>
              <div css={itemCss.title}>추가혜택가</div>
              <div className='flexColumn'>
                <div>
                  <div>toss 2,000 할인</div>
                  <div>토스 페이 5만원 이상 생애 첫 결제 시 3천원 토스 캐시백</div>
                </div>
                <div>
                  <div>payco 3,000 할인</div>
                  <div>토스 페이 5만원 이상 생애 첫 결제 시 3천원 토스 캐시백</div>
                </div>
              </div>
            </div>
            
            <div css={itemCss.border} />
            <div className='flexRow'>
              <div css={itemCss.title}>배송정보</div>
              <div className='flexColumn'>
                <div>
                  <div>무료배송</div>
                  <div>제주도를 포함한 도서/산간지역은 추가배송비 3,000원</div>
                </div>
              </div>
            </div>
            <div>
              <ProductCounter counter={counter} setCounter={setCounter} />
            </div>
            <BuyBtnContainer>
              <BuyBtnContainer.LinkButton value='주문하기' background='black' color='white' width='50%' height='50px' href='/cart' />
              <BuyBtnContainer.LinkButton value='장바구니' background='#ebebeb' color='black' width='50%' height='50px' href='/cart'/>
            </BuyBtnContainer>
          </div>
          
        </div>
        <AutoHeightImage src='https://img.29cm.co.kr/next-product/2020/02/25/b77819fc025c4d20ac14a76047697caa_20200225091522.jpg?width=1000' alt='상세페이지' />
      </div>
    </div>
  )
}

export default Product