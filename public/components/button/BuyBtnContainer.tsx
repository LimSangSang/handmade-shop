import React from 'react'
import { css } from '@emotion/react'



interface Props {
    children: React.ReactNode
}

interface ItemProps {
    value: string,
    background: string,
    color: string,
    width: string
}

const BuyBtnContainer = ({children}: Props) => {
    return (
        <div>{children}</div>
    )
}

BuyBtnContainer.Item = ({value, background, color, width}: ItemProps) => {
    const itemCss = {
        button: css({
          height: 50,
          background,
          color,
          width,
          borderColor: 'transparent',
        })
    }
    return <button css={itemCss.button}>{value}</button>
}

export default BuyBtnContainer