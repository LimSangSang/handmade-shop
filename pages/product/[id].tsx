import { useEffect, useState } from 'react'
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
      flex:1
    }),
    img: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      // position: 'relative',
      // width: '100%',
      // height:'100%',
      // background: 'yellow'
      
    }),
}

  return (
    <div>
      <Header />
      <div css={itemCss.body}>
        <div css={itemCss.info}>
          <Image src={dummy_item.thumbnail} width={300} height={300} />
          <div>
            <p>{dummy_item.brand}</p>
            <p>{dummy_item.name}</p>
            <p>{dummy_item.price}</p>
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