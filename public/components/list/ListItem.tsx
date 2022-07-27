import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { css } from '@emotion/react'

const bodyCss = {
    body: css({
        display: 'flex',
        flexDirection:'column',
        width: '25%',
        cursor: 'pointer'
    })
  }

interface props {
    img: string,
    brand: string,
    name: string,
    price: number,
    id: number
}  
const ListItem: React.FC<props> = ({img, brand, name, price, id}) => {    
    return (
        <Link href={`/product/${encodeURIComponent(id)}`}>
            <a css={bodyCss.body}>
                <Image 
                    src={img}
                    width={500}
                    height={500}
                    layout='responsive'
                />
                <div>
                    <div>{brand}</div>
                    <div>{name}</div>
                    <div>{price}</div>
                </div>
            </a>
        </Link>
    )
}
export default ListItem