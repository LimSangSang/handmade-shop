import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { dummy_item } from '../../public/dummy/dummy_list' 
import Image from 'next/image'
import { css } from '@emotion/react'
import AutoHeightImage from '../../public/components/common/AutoHeightImage'
import Header from '../../public/components/header/Header'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  const itemCss = {
    body: css({
        display: 'flex',
        flex:1,
        // overflow: 'scroll',
        flexDirection:'column',
    }),
    info: css({
      display: 'flex',
      flexDirection:'row',
      flex:1,
      justifyContent:'center',
      // alignItems:'center'
    }),
    img: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'     
    }),
    brand: css({
      fontSize:23,
      fontWeight: 'bold',
    }),
    title: css({
      fontSize:18,
      fontWeight: 'bold',
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
      <div css={itemCss.body}>
        <div css={itemCss.info}>
          <div css={css`position: relative; min-width: 500px; min-height: 500px; justify-content: 'flex-end';`}>
            <Image src={dummy_item.thumbnail} layout='fill' objectFit='contain' />
          </div>
          <div >
            <p css={itemCss.brand}>{dummy_item.name}</p>
            <p>{dummy_item. brand}</p>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p css={itemCss.brand}>{dummy_item.price} 원</p>
            <div css={itemCss.border}></div>
            <div>
              <p css={itemCss.title}>배송정보</p>
            </div>
          </div>
          
        </div>
        <div css={itemCss.img}>
          <img src='https://img.29cm.co.kr/next-product/2020/02/25/b77819fc025c4d20ac14a76047697caa_20200225091522.jpg?width=1000'/>
        </div>
        {/* <div css={itemCss.img}>
          kgjh
          <AutoHeightImage src='https://img.29cm.co.kr/next-product/2020/02/25/b77819fc025c4d20ac14a76047697caa_20200225091522.jpg?width=1000' layout="fill" maxWidth="500px" />
        </div> */}
      </div>
    </div>
  )
}

export default Product